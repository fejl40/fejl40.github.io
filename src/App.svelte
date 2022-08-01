<script lang="ts">
	import store, { type StoreModel, Page } from "./store";
	import { CsgoMap } from "./types/grenadeTypes";
	import { parsedParameters } from "./util/parsedParameters";
	import HomePage from "./pages/HomePage.svelte";
	import MapPage from "./pages/MapPage.svelte";
	let storeValue: StoreModel;
	store.subscribe((value) => storeValue = value);

	store.update((value) => {
		const query = parsedParameters();
		const map = query["map"];
		if (!!map) {
			const validMap = Object.values(CsgoMap).includes(map as CsgoMap);
			if (validMap) return { ...value, map: map as CsgoMap, page: Page.Map };
		}
		return { ...value }
	});
</script>

<main>
	{#if storeValue.page === Page.Home}
		<HomePage mapImages={storeValue.backgroundImages} />
	{/if}

	{#if storeValue.page === Page.Map}
		<MapPage map={storeValue.map} />
	{/if}
</main>