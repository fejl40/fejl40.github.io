<script lang="ts">
    import { type Smoke, GrenadeTeam } from "../types/grenadeTypes";
    export let smoke: Smoke;
</script>

<div id={smoke.name.replace(" ", "-")}>
    <h2 class="text-xl">{smoke.name}</h2>
    <div class="image-size relative rounded-lg">
        <img 
            src={smoke.posImage}
            alt="stand-pos"
        />
        
        <img 
            src={smoke.aimImage}
            alt="aim-dir"
            class="left-0 top-0 absolute opacity-0 hover:opacity-100 transition-opacity"
        />

        <p class="absolute top-1 right-1 text-xs font-bold">{GrenadeTeam[smoke.team]}</p>
    </div>
</div>

<style>
    .image-size {
        width: calc(960px);
        height: calc(720px);
    }
</style>