import { CsgoMap } from "../types/grenadeTypes";

const mapNameMap: {[map: string]: string} = {};
mapNameMap[typeof CsgoMap.Ancient] = "Ancient";
mapNameMap[typeof CsgoMap.Inferno] = "Inferno";
mapNameMap[typeof CsgoMap.Nuke] = "Nuke";
mapNameMap[typeof CsgoMap.Dust2] = "Dust2";
mapNameMap[typeof CsgoMap.Mirage] = "Mirage";
mapNameMap[typeof CsgoMap.Vertigo] = "Vertigo";
mapNameMap[typeof CsgoMap.Overpass] = "Overpass";

export const screenName = (map: CsgoMap): string => mapNameMap[typeof map];

export default mapNameMap;