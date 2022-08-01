import { Map } from "../types/grenadeTypes";

const mapNameMap: {[map: string]: string} = {};
mapNameMap[typeof Map.Ancient] = "Ancient";
mapNameMap[typeof Map.Inferno] = "Inferno";
mapNameMap[typeof Map.Nuke] = "Nuke";
mapNameMap[typeof Map.Dust2] = "Dust2";
mapNameMap[typeof Map.Mirage] = "Mirage";
mapNameMap[typeof Map.Vertigo] = "Vertigo";
mapNameMap[typeof Map.Overpass] = "Overpass";

export const screenName = (map: Map): string => mapNameMap[typeof map];

export default mapNameMap;