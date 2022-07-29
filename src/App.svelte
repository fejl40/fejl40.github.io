<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import HomePage from "./pages/HomePage.svelte"
	import MapPage from "./pages/MapPage.svelte"
</script>

<Router>
	<Route path="/" component={HomePage}/>
	<Route path="/:map" component={MapPage} />
</Router>