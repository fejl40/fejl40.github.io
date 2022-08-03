<script lang="ts">
    import { onDestroy, onMount, createEventDispatcher } from "svelte";
    import type { BaseGrenade } from "../types/grenadeTypes";
    export let grenades: BaseGrenade[]
    const dispatch = createEventDispatcher();

    let t: boolean = false;
    let ct: boolean = false;

    let fraction = 0;
    let listHeight = 0;
    let ol: HTMLOListElement;

    const filterChanged = () => {
        console.log("change");
        const value = { t, ct };
        dispatch("filter", value);
        setTimeout(() => scrollEventFunction(), 0);
    }

    const scrollToNade = (nade: BaseGrenade) => {
        document.getElementById(nade.name.replace(" ", "-")).scrollIntoView({
            behavior: "smooth"
        });
    }

    const markerPos = (frac: number, height: number): number => {
        const grenadeIdx = (grenades.length-1);
        const grenadeHeight = height/grenadeIdx;
        const rounded = Math.floor(frac*grenadeIdx)*grenadeHeight+6*(1-frac)-2
        return Math.max(0, Math.min(rounded, height));
    }

    const scrollEventFunction = () => {
        const currentScroll = (document.documentElement.scrollTop || document.body.scrollTop) + fraction*518*1.4;
        const scrHeight = screen.height*0.5;
        const totalScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - scrHeight;
        const scrollPos = currentScroll/totalScroll;
        fraction = Math.max(0, Math.min(scrollPos, 1));
        if (!!ol) {
            listHeight = ol.getBoundingClientRect().height - 16; //marker is 16 px high
        }
    }
    
    onMount(() => {
        ol = document.getElementById("overview-list") as HTMLOListElement;
        scrollEventFunction();
        addEventListener("scroll", scrollEventFunction);
        addEventListener("resize", scrollEventFunction);
    });

    onDestroy(() => {
        removeEventListener("scroll", scrollEventFunction);
        removeEventListener("resize", scrollEventFunction);
    });
</script>

<div>
    <h4>Filter not implemented</h4>

    <input type="checkbox" id="t" bind:checked={t} on:change={filterChanged} />
    <label for="t">Terrorist</label>

    <br />

    <input type="checkbox" id="ct" bind:checked={ct} on:change={filterChanged} />
    <label for="ct">CounterTerrorist</label>
    
    <br />
    <br />
    <hr />
    <br />

    <div class="overview-grid">
        <div class="relative">
            <div class={`absolute w-full h-4 bg-white smooth-movement ${!grenades?.length ? "opacity-0" : "opacity-100"}`} style={`top: ${markerPos(fraction, listHeight)}px;`}></div>
        </div>
        
        <ol id="overview-list">
            {#each grenades as nade}
                <li>
                    <button 
                        class="w-full text-left ml-0.5 hover:underline"
                        on:click={() => scrollToNade(nade)}>
                        {nade.name}
                    </button>
                </li>
            {/each}
        </ol>
    </div>
</div>

<style>
    .overview-grid {
        display: grid;
        grid-template-columns: 0.15rem auto;
    }

    .smooth-movement {
        transition: top 0.05s ease 0s;
    }
</style>
