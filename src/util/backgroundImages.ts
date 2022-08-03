import manifest from "../map-manifest.json";

export const backgroundImages = () => {
    const mapNames = Object.keys(manifest);
    let mapBackgroundImages: {[mapName:string]: string} = {};
    for (let i = 0; i < mapNames.length; i++) {
        const n = mapNames[i];
        if (n === "ancient") {
            mapBackgroundImages[n] = `${n}.jpeg`;
            continue;
        }
        mapBackgroundImages[n] = `${n}.jpg`;
    }
    return mapBackgroundImages;
}