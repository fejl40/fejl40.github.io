<script lang="ts">
	import { Router, Route, Link } from "svelte-navigator";
	

	import HomePage from "./pages/HomePage.svelte"
	import MapPage from "./pages/MapPage.svelte"
	
</script>

<Router>
	<main>
		<Route path="/" component={HomePage}/>
		<Route path="/:map" component={MapPage} />
	</main>
</Router>