<script lang="ts">
    import manifest_json from "../map-manifest.json"
    let mapNames = Object.keys(manifest_json);
    
    let mapBackgroundImages: {[mapName:string]: string} = {};
    for (let i = 0; i < mapNames.length; i++) {
        const n = mapNames[i];
        if (n === "ancient") {
            mapBackgroundImages[n] = `${n}.jpeg`;
            continue;
        }
        mapBackgroundImages[n] = `${n}.jpg`;
    }
</script>

<div class="grid grid-flow-col grid-rows-3 lg:grid-rows-2 container px-1 mx-auto mt-24">
    {#each mapNames as map}
        <div 
            style={`background-image: url("/backgrounds/${mapBackgroundImages[map]}");`}
            alt={map}
            class="map-button-size mx-auto rounded-xl shadow-inner hover:opacity-50 mt-1"
        >
            <a href={`/${map}`}>
                <div class="w-full h-full"></div>
            </a>
        </div>
    {/each}
</div>
  
<style>
    .map-button-size {
        width: 504px;
        height: 300px;
    }
</style>