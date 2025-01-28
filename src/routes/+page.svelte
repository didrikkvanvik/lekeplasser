<script lang="ts">
	import '../app.css';
	import Map from '../components/Map.svelte';
</script>

<div class="mt-8">
	<p class="text-md mb-4 text-center">
		Finn lekeplasser i Stavanger. Hver lekeplass er markert med et grønt polygon.
	</p>
	<Map />
	<p class="mt-2 text-center text-sm text-gray-500">
		Kilde: <a
			class="text-blue-500 underline"
			href="https://opencom.no/dataset/offentlige-leke-og-moteplasser/resource/7417b7a0-cfd8-492b-9f2d-275d61e3fc0f?view_id=cc79e018-4e24-46d2-91b1-4273e67a30cc"
			>Offentlige leke- og møteplasser i Norge 2023</a
		>
	</p>
</div>
