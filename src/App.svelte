<script lang="ts">
	import store, { type StoreModel, Page } from "./store";
	import { Map } from "./types/grenadeTypes";
	import { parsedParameters } from "./util/parsedParameters";
	import HomePage from "./pages/HomePage.svelte";
	import MapPage from "./pages/MapPage.svelte";
	let storeValue: StoreModel;
	store.subscribe((value) => storeValue = value);

	store.update((value) => {
		const query = parsedParameters();
		const map = query["map"];
		if (!!map) {
			const validMap = Object.values(Map).includes(map as Map);
			if (validMap) return { ...value, map: map as Map, page: Page.Map };
		}
		return { ...value }
	});
</script>

<main>
	{#if storeValue.page === Page.Home}
		<HomePage />
	{/if}

	{#if storeValue.page === Page.Map}
		<MapPage map={storeValue.map} />
	{/if}
</main>