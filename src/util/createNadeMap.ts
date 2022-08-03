import manifest from "../map-manifest.json";
import { type CounterStrikeGrenadeMap, type Smoke, type CsgoMap, GrenadeTeam } from "../types/grenadeTypes";

interface PairWithId {
    id: string;
    pos?: string;
    aim?:string;
}

const findPairs = (): {[map:string]: PairWithId[]} => {
    const obj: {[map:string]: PairWithId[]} = {};
    Object.keys(manifest).forEach((map: string) => {
        obj[map] = [];
        manifest[map].forEach((img: string) => {
            const noEx = img.substring(0, img.lastIndexOf(".")); // no file extension (ect .jpg)
            let noNum = noEx.toLowerCase(); // no "_2" at the end for use as id
            const aim = noEx[noEx.length-1] === "2" // check if there is a "2" at the end. If yes then its an aim image
            if (aim) noNum = noEx.substring(0, noEx.lastIndexOf("_")).toLowerCase(); // no "_2" at the end for use as id
            
            let idx = obj[map].findIndex(o => o.id.trim() == noNum.trim());
            if (!obj[map][idx]) idx = obj[map].push({ id: noNum })-1;
            if (aim) {
                obj[map][idx].aim = img; // add raw img input as aim img
            } else {
                obj[map][idx].pos = img; // add raw img input as position img
            }
        });
    });
    return obj;
}

const validatePairs = (pairs: {[map:string]: PairWithId[]}): boolean => {
    let valid = true;
    const keys = Object.keys(pairs);
    for (let i = 0; i < keys.length; i++) {
        const mapPairs = pairs[keys[i]];
        mapPairs.forEach((pair, idx) => {
            const aim = !!pair.aim;
            const pos = !!pair.pos;

            if (aim && !pos) {console.error(keys[i], "No aim image found for", pair.id);valid=false;}
            else if (pos && !aim) {console.error(keys[i], "No pos image found for", pair.id);valid=false;}
            else if (!pos && !aim) {console.error(keys[i], "No images found at all for", pair.id);valid=false;}
        });
    }
    return valid;
}

const presentableGrenadeName = (input:string): string => {
    const safe = input.substring(input.indexOf("_"), input.length).replace(/_+/g, " ");
    return (safe[0].toUpperCase()+safe.substring(1).toLowerCase()).trim();
}

const convertToCounterStrikeGrenadeMap = (input: PairWithId[], mapName: string): CounterStrikeGrenadeMap => {
    const smokes: Smoke[] = input.map((pair: PairWithId): Smoke => {
        let team: GrenadeTeam = GrenadeTeam.None;
        if (pair.id[0].toLowerCase() === "t" && pair.id[1].toLowerCase() === "_") team = GrenadeTeam.Terrorist;
        if (pair.id[0].toLowerCase() === "c" && pair.id[1].toLowerCase() === "t") team = GrenadeTeam.CounterTerrorist;

        const obj: Smoke = {
            team,
            name: presentableGrenadeName(pair.id),
            posImage: `/maps/${mapName}/${pair.pos}`,
            aimImage: `/maps/${mapName}/${pair.aim}`,
            throwGuide: [],
            favorite: false
        }
        return obj;
    }).sort((a, b) => a.name.localeCompare(b.name));
    
    const flashbangs: Smoke[] = [];
    const molotovs: Smoke[] = [];
    const frags: Smoke[] = [];
    
    const map: CounterStrikeGrenadeMap = {
        map: mapName as CsgoMap,
        smokes,
        flashbangs,
        molotovs,
        frags
    };

    return map;
}

export const createNadeMap = (): CounterStrikeGrenadeMap[] => {
    const pairs = findPairs();
    const valid = validatePairs(pairs); // will do a console error if there are incomplete pairs
    if (!valid) throw new Error("There are incomplete map image pairs!");
    
    // convert object with map keys to array with CounterStrikeGrenadeMaps
    return Object.keys(pairs).map((key) => convertToCounterStrikeGrenadeMap(pairs[key], key));
}