<script lang="ts">
    import store, { type StoreModel } from "../store";
    import { GrenadeTeam, type CounterStrikeGrenadeMap, type CsgoMap, type Smoke } from "../types/grenadeTypes";
    import { screenName } from "../util/mapNameMap";

    import SmokeComponent from "../lib/Smoke.svelte";
    import Overview from "../lib/Overview.svelte";


    export let map: CsgoMap;
    let storeValue: StoreModel;
    let mapName: string = screenName(map);
    let grenadeMap: CounterStrikeGrenadeMap;
    let smokes: Smoke[] = [];
    $: mapName = screenName(map);
    

    let t: boolean = false;
    let ct: boolean = false;

    const filterDispatch = (input: CustomEvent<any>) => {
        t = input.detail.t as boolean;
        ct = input.detail.ct as boolean;
        smokes = refreshFilter(grenadeMap.smokes);
    }

    const refreshFilter = (smokes: Smoke[]): Smoke[] => {
        return smokes.filter((s) => {
            if (t && s.team === GrenadeTeam.Terrorist) return true;
            if (ct && s.team === GrenadeTeam.CounterTerrorist) return true;
            return false;
        });
    }

	store.subscribe((value) =>  {
        storeValue = value;
        grenadeMap = storeValue.nadeMap.find(m => m.map === map);
        smokes = refreshFilter(grenadeMap.smokes);
    });
</script>

<div class="map-page-grid">
    <div>
        <div class="fixed w-48 h-screen py-2 px-1">
            <div class="relative w-full h-full">
                <h2 class="text-2xl">Overview</h2>
                <br />
                <Overview grenades={smokes} on:filter={(data) => filterDispatch(data)}/>
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
                    {#each smokes as smoke}
                        <li><SmokeComponent smoke={smoke} /></li>
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