import { writable } from "svelte/store";
import type { CounterStrikeGrenadeMap, Map } from "./types/grenadeTypes";
import { createNadeMap } from "./util/createNadeMap";

export enum Page {
    Home,
    Map
}

export interface StoreModel {
    page: Page;
    map?: Map;
    nadeMap: CounterStrikeGrenadeMap[];
}

export const initialStore: StoreModel = {
    page: Page.Home,
    nadeMap: createNadeMap()
}

export default writable(initialStore);