export type Coordinates = {
	lat: number;
	lng: number;
}[];

interface Geometry {
	type: 'Polygon';
	coordinates: Coordinates;
}

interface Properties {
	OBJTYPE: 'Lekeplass';
}

export interface Feature {
	type: 'Feature';
	geometry: Geometry;
	properties: Properties;
}

export interface PlaygroundData {
	type: 'FeatureCollection';
	name: 'Lekeplass';
	features: Feature[];
}
