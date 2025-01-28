// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			// ... other locals
		}
		interface PageData {
			// ... other page data
		}
		// interface PageState {}
		interface Platform {
			// ... platform specific
		}
	}
}

interface ImportMetaEnv {
	VITE_GOOGLE_MAPS_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

export {};
