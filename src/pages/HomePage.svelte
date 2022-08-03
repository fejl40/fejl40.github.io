<script lang="ts">
    import { presentableName } from "../util/presentableName";
    export let mapImages: {[mapName:string]: string};
    let mapNames = Object.keys(mapImages).map(k => mapImages[k].split(".")[0]);
    $: mapNames = Object.keys(mapImages).map(k => mapImages[k].split(".")[0]); // make sure to do it again if data changes
</script>

<div class="grid grid-flow-col grid-rows-6 lg:grid-rows-3 2xl:grid-rows-2 container px-1 mx-auto mt-24">
    {#each mapNames as map}
        <div 
            style={`background-image: url("/backgrounds/${mapImages[map]}");`}
            alt={map}
            class="map-button-size mx-auto rounded-xl shadow-inner hover:opacity-50 mt-1"
        >
            <a href={`/?map=${map}`}>
                <div class="w-full h-full relative">
                    <div class="absolute w-full h-6 bottom-8 bg-gray-600">
                        <p class="text-white font-bold text-center">{presentableName(map)}</p>
                    </div>
                </div>
            </a>
        </div>
    {/each}
</div>
  <div style="text-align:center">
      <a href="https://faceitfinder.com/"> Check them on faceitfinder!</a>
  </div>
<style>
    .map-button-size {
        width: 504px;
        height: 300px;
    }
</style>
