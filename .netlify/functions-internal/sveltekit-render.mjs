import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.Cyxf6d4L.js","app":"_app/immutable/entry/app.iIO-xsDO.js","imports":["_app/immutable/entry/start.Cyxf6d4L.js","_app/immutable/chunks/BsoFCEdV.js","_app/immutable/chunks/DgxXjY45.js","_app/immutable/chunks/BXx1OxI7.js","_app/immutable/entry/app.iIO-xsDO.js","_app/immutable/chunks/DgxXjY45.js","_app/immutable/chunks/DRC1ROaK.js","_app/immutable/chunks/CSo-r9BV.js","_app/immutable/chunks/Cfx8-ev3.js","_app/immutable/chunks/Szm1OiFh.js","_app/immutable/chunks/BXx1OxI7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
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
})());
