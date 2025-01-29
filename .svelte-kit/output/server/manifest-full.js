export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","playground-white.svg","playgrounds-app.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.B06eZR8C.js","app":"_app/immutable/entry/app.7AIomc9V.js","imports":["_app/immutable/entry/start.B06eZR8C.js","_app/immutable/chunks/BuC_7S9Z.js","_app/immutable/chunks/DgxXjY45.js","_app/immutable/chunks/BXx1OxI7.js","_app/immutable/entry/app.7AIomc9V.js","_app/immutable/chunks/DgxXjY45.js","_app/immutable/chunks/DRC1ROaK.js","_app/immutable/chunks/CSo-r9BV.js","_app/immutable/chunks/Cfx8-ev3.js","_app/immutable/chunks/Szm1OiFh.js","_app/immutable/chunks/BXx1OxI7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
