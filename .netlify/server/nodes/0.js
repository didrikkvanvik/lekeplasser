

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D8FdHKX0.js","_app/immutable/chunks/Cfx8-ev3.js","_app/immutable/chunks/DgxXjY45.js","_app/immutable/chunks/CsDxXExh.js"];
export const stylesheets = ["_app/immutable/assets/app.BwFtnA3m.css"];
export const fonts = [];
