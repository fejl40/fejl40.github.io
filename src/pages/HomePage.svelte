<script lang="ts">
    import manifest_json from "../map-manifest.json"
    let mapNames = Object.keys(manifest_json);
</script>

<div>
    <ul>
        {#each mapNames as map}
            <li>
                <a href={`/${map}`}>{map}</a>
            </li>
        {/each}
    </ul>
</div>
  