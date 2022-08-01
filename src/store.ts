import { writable } from "svelte/store";
import manifest from "./map-manifest.json";
import type { CounterStrikeGrenadeMap, CsgoMap } from "./types/grenadeTypes";
import { backgroundImages } from "./util/backgroundImages";
import { createNadeMap } from "./util/createNadeMap";

export enum Page {
    Home,
    Map
}

export interface StoreModel {
    page: Page;
    backgroundImages: {[mapName: string]: string};
    map?: CsgoMap;
    nadeMap: CounterStrikeGrenadeMap[];
}

export const initialStore: StoreModel = {
    page: Page.Home,
    backgroundImages: backgroundImages(Object.keys(manifest)),
    nadeMap: createNadeMap()
}

export default writable(initialStore);