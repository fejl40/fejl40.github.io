<script lang="ts">
	import HomePage from "./pages/HomePage.svelte"
	import MapPage from "./pages/MapPage.svelte"
	const queryList = !!document.location.search ? document.location.search.substring(1).split("&") : [];
	const query: {[key:string]: string} = {};
	for (let i = 0; i < queryList.length; i++) {
		const elm = queryList[i].split("=");
		query[elm[0]] = elm[1];
	}
</script>

<main>
	{#if !!query.map}
		<MapPage map={query.map} />
	{:else}
		<HomePage />
	{/if}
</main>