<script lang="ts">
	import { onMount } from 'svelte';
	import playgroundsData from '../lib/data/playgrounds.json';
	import type { PlaygroundData } from '../types/playground';
	import { mapStyles } from '../utils/map';

	const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

	export let center: google.maps.LatLngLiteral = { lat: 58.97, lng: 5.73 };
	export let zoom: number = 14;

	let mapContainer: HTMLDivElement;
	let map: google.maps.Map;
	const playgrounds = (playgroundsData as any as PlaygroundData).features;

	onMount(async () => {
		if (!window.google) {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
			document.head.appendChild(script);

			await new Promise((resolve) => {
				script.onload = resolve;
			});
		}

		map = new google.maps.Map(mapContainer, {
			center,
			zoom,
			styles: mapStyles
		});

		playgrounds.forEach((playground) => {
			const coordinates = playground.geometry.coordinates[0].map((coord) => ({
				lat: coord[1],
				lng: coord[0]
			}));

			new google.maps.Polygon({
				paths: coordinates,
				map,
				strokeColor: 'green',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: 'green',
				fillOpacity: 0.35
			});
		});
	});
</script>

<div bind:this={mapContainer} class="h-[40rem] w-full rounded-lg sm:h-[50rem]"></div>

<style>
	div {
		border-radius: 0.5rem;
	}
</style>
