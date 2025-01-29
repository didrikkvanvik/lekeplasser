<script lang="ts">
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	import playgroundsData from '../lib/data/playgrounds.json';
	import type { Feature, PlaygroundData } from '../types/playground';
	import { mapStyles } from '../utils/map';

	const apiKey = PUBLIC_GOOGLE_MAPS_API_KEY;
	const STORAGE_KEY = 'drawn_playgrounds';

	export let center: google.maps.LatLngLiteral = { lat: 58.97, lng: 5.73 };
	export let zoom: number = 14;

	let mapContainer: HTMLDivElement;
	let map: google.maps.Map;
	let drawingManager: google.maps.drawing.DrawingManager;
	let drawnPolygons: Feature[] = [];
	let polygons: google.maps.Polygon[] = [];
	const existingPlaygrounds = (playgroundsData as any as PlaygroundData).features;
	let savedPlaygrounds: Feature[] = [];
	let allPlaygrounds = existingPlaygrounds;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			savedPlaygrounds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
			allPlaygrounds = [...existingPlaygrounds, ...savedPlaygrounds];
		}

		if (!window.google) {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=drawing`;
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

		drawingManager = new google.maps.drawing.DrawingManager({
			drawingMode: null,
			drawingControl: true,
			drawingControlOptions: {
				position: google.maps.ControlPosition.TOP_CENTER,
				drawingModes: [google.maps.drawing.OverlayType.POLYGON]
			},
			polygonOptions: {
				strokeColor: 'green',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: 'green',
				fillOpacity: 0.75,
				editable: true
			}
		});

		drawingManager.setMap(map);

		google.maps.event.addListener(
			drawingManager,
			'polygoncomplete',
			(polygon: google.maps.Polygon) => {
				polygons.push(polygon);
				const path = polygon.getPath();
				const coordinates = path.getArray().map((point) => ({
					lat: point.lat(),
					lng: point.lng()
				}));
				const item: Feature = {
					type: 'Feature',
					geometry: {
						type: 'Polygon',
						coordinates: [[...coordinates.map((coord) => [coord.lng, coord.lat])]]
					},
					properties: {
						OBJTYPE: 'Lekeplass'
					}
				};

				drawnPolygons = [...drawnPolygons, item];
				localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedPlaygrounds, item]));
			}
		);
		allPlaygrounds.forEach((playground) => {
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
				fillOpacity: 0.5
			});
		});
	});

	function clearDrawnPolygons() {
		polygons.forEach((polygon) => {
			polygon.setMap(null);
		});
		drawnPolygons = [];
		localStorage.setItem(STORAGE_KEY, '[]');
		window.location.reload();
	}
</script>

<div class="space-y-4">
	<div class="overflow-hidden rounded-xl">
		<div bind:this={mapContainer} class="h-[40rem] w-full sm:h-[50rem]"></div>
	</div>
	<div class="flex justify-center">
		<button
			class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
			on:click={clearDrawnPolygons}
		>
			Fjern lagrede lekeplasser
		</button>
	</div>
</div>
