<script lang="ts">
    import { presentableName } from "../util/presentableName";
    import manifest_json from "../map-manifest.json"
    export let map: string;
    let mapName: string = map;
    $: mapName = map.toLowerCase().trim();

    let ct: boolean = true;
    let t: boolean = true;

    const presentableMapName = presentableName(mapName);
    const mapImages: string[] = manifest_json[mapName];
    let mapImageSets: {positionImage: string, aimImage: string}[] = [];

    const filterSmokes = () => {
        mapImageSets = [];
        for (let i = 0; i < mapImages.length; i++) {
            const img: string = mapImages[i];
            const imgTest = img.substring(0, img.lastIndexOf("."));
            if (imgTest[imgTest.length-1] === "2") continue;
            const aimImg = `${imgTest}_2${img.substring(img.lastIndexOf("."))}`;
            const obj: {positionImage: string, aimImage: string} = {
                positionImage: img.trim(),
                aimImage: aimImg.trim()
            };
            mapImageSets.push(obj);
        }
        if (!(t && ct)) {
            if (ct) mapImageSets = mapImageSets.filter((set) => set.positionImage.substring(0,2).toUpperCase() === "CT");
            if (t) mapImageSets = mapImageSets.filter((set) => set.positionImage.substring(0,1).toUpperCase() === "T");
        }
    }

    const changedFilter = () => {
        filterSmokes();
    }

    const presentableGrenadeName = (name: string) => {
        let str = name.substring(0, name.lastIndexOf(".")).replace(/_+/g, " ");
        return str;
    }

    // remove extension
    const rmEx = (input: string) => {
        return input.substring(0, input.lastIndexOf("."));
    }

    const scrollToId = (id:string) => {
        const elm = document.getElementById(id);
        if (!elm) return;
        elm.scrollIntoView();
    }

    filterSmokes();
</script>

<div class="relative">
    <h2 class="text-center text-3xl">{presentableMapName} smokes</h2>

    <br />
    <br />

    <div class="fixed w-48 top-0">
        <div class="relative w-full">
            <div class="absolute z-10 bg-gray-500 rounded-br-md transition-opacity opacity-40 hover:opacity-100">
                <div class="p-1">
                    <h3>Overview</h3>
                </div>

                <hr />

                <div class="p-1">
                    <input
                        type="checkbox"
                        name="terrorist-filter"
                        id="terrorist-filter-checkbox"
                        bind:checked={t}
                        on:change={changedFilter}
                    />
                    <label for="terrorist-filter-checkbox">T</label>

                    <br />

                    <input
                        type="checkbox"
                        name="counter-terrorist-filter"
                        id="counter-terrorist-filter-checkbox"
                        bind:checked={ct}
                        on:change={changedFilter}
                    />
                    <label for="counter-terrorist-filter-checkbox">CT</label>
                </div>
        
                <hr />
        
                <div class="p-1">
                    {#each mapImageSets as set}
                        <button class="w-full hover:underline text-left" on:click={() => scrollToId(rmEx(set.positionImage))}>{presentableGrenadeName(set.positionImage)}</button>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    {#each mapImageSets as set}
        <article id={rmEx(set.positionImage)}>
            <div class="position-relative 2xl:ml-auto 2xl:mr-auto ml-auto mr-0">
                <h4 class="text-xl">{presentableGrenadeName(set.positionImage)}</h4>
                <img
                    class="aim-image z-0"
                    src={`/maps/${map}/${set.aimImage}`}
                    width="960px"
                    height="720px"
                    alt="aim"
                />
                <img
                    class="position-image z-0"
                    src={`/maps/${map}/${set.positionImage}`}
                    width="960px"
                    height="720px"
                    alt="position"
                />
            </div>
        </article>
    {/each}
</div>

<style>
    .position-image {
        position: absolute;
        transition: opacity 0.25s;
        opacity: 1;
    }

    .aim-image {
        position: absolute;
    }

    .position-image:hover {
        position: absolute;
        opacity: 0;
    }

    .position-relative {
        position: relative;
        height: calc(720px + 4rem);
        width: 960px;
    }
</style>
  