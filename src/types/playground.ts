interface Coordinate {
	0: number; // longitude
	1: number; // latitude
}

interface Geometry {
	type: 'Polygon';
	coordinates: Coordinate[][];
}

interface Properties {
	OBJTYPE: 'Lekeplass';
}

interface Feature {
	type: 'Feature';
	geometry: Geometry;
	properties: Properties;
}

export interface PlaygroundData {
	type: 'FeatureCollection';
	name: 'Lekeplass';
	features: Feature[];
}
