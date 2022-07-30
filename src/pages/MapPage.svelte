<script lang="ts">
    import { presentableName } from "../util/presentableName";
    import manifest_json from "../map-manifest.json"
    export let map: string;
    let mapName: string = map;
    $: mapName = map.toLowerCase().trim();

    const presentableMapName = presentableName(mapName);
    const mapImages: string[] = manifest_json[mapName];
    const mapImageSets: {positionImage: string, aimImage: string}[] = [];

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

    const presentableGrenadeName = (name: string) => {
        let str = name.substring(0, name.lastIndexOf(".")).replace(/_+/g, " ");
        return str;
    }
</script>

<div>
    <h2 class="text-center text-3xl">{presentableMapName} smokes</h2>

    <br />
    <br />

    {#each mapImageSets as set}
        <div>
            <div class="position-relative mx-auto">
                <h3 class="text-xl">{presentableGrenadeName(set.positionImage)}</h3>
                <img
                    class="aim-image"
                    src={`/maps/${map}/${set.aimImage}`}
                    width="640px"
                    height="480px"
                    alt="aim"
                />
                <img
                    class="position-image mx-auto"
                    src={`/maps/${map}/${set.positionImage}`}
                    width="640px"
                    height="480px"
                    alt="position"
                />
            </div>
        </div>
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
        height: calc(480px + 4rem);
        width: 640px;
    }
</style>
  