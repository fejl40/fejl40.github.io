<script lang="ts">
    import store, { type StoreModel } from "../store";
    import type { CounterStrikeGrenadeMap, CsgoMap } from "../types/grenadeTypes";
    import { screenName } from "../util/mapNameMap";

    import Smoke from "../lib/Smoke.svelte";
    import Overview from "../lib/Overview.svelte";


    export let map: CsgoMap;
    let storeValue: StoreModel;
    let mapName: string = screenName(map);
    let grenadeMap: CounterStrikeGrenadeMap;
    $: mapName = screenName(map);

	store.subscribe((value) =>  {
        storeValue = value
        grenadeMap = storeValue.nadeMap.find(m => m.map === map);
    });
</script>

<div class="map-page-grid">
    <div>
        <div class="fixed w-48 h-screen py-2 px-1">
            <div class="relative w-full h-full">
                <h2 class="text-2xl">Overview</h2>
                <br />
                <Overview grenades={grenadeMap.smokes}/>
            </div>
        </div>
    </div>

    <div>
        <div class="container mx-auto py-2">
            <h1 class="text-2xl">{mapName} smokes</h1>
            <br />
            {#if !!grenadeMap}
                <div id="top-grenade"></div>
                <ol class="space-y-10">
                    {#each grenadeMap.smokes as smoke}
                        <li><Smoke smoke={smoke} /></li>
                    {/each}
                </ol>
                <div id="bottom-grenade"></div>
            {/if}
        </div>
    </div>
</div>

<style>
    .map-page-grid {
        display: grid;
        grid-template-columns: 12rem auto;
    }
</style>