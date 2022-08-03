import { CsgoMap } from "../types/grenadeTypes";

const mapNameMap: {[map: string]: string} = {};
mapNameMap[CsgoMap.Ancient] = "Ancient";
mapNameMap[CsgoMap.Inferno] = "Inferno";
mapNameMap[CsgoMap.Nuke] = "Nuke";
mapNameMap[CsgoMap.Dust2] = "Dust2";
mapNameMap[CsgoMap.Mirage] = "Mirage";
mapNameMap[CsgoMap.Vertigo] = "Vertigo";
mapNameMap[CsgoMap.Overpass] = "Overpass";

export const screenName = (map: CsgoMap): string => mapNameMap[map];

export default mapNameMap;