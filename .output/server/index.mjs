globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/apple-icon.png": {
		"type": "image/png",
		"etag": "\"a42-o953JxvIavDjStfvW8JRF7vWLk4\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 2626,
		"path": "../public/apple-icon.png"
	},
	"/icon-dark-32x32.png": {
		"type": "image/png",
		"etag": "\"249-Eje7mf5IYnUOzvWahZHzVZgkxwI\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 585,
		"path": "../public/icon-dark-32x32.png"
	},
	"/icon-light-32x32.png": {
		"type": "image/png",
		"etag": "\"236-1LCyzDLVe8SSrsZvG9eS1rhTvHw\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 566,
		"path": "../public/icon-light-32x32.png"
	},
	"/icon.svg": {
		"type": "image/svg+xml",
		"etag": "\"518-9M+7JU4r6V/KOpL+LPj+dv/tp9E\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 1304,
		"path": "../public/icon.svg"
	},
	"/placeholder-user.jpg": {
		"type": "image/jpeg",
		"etag": "\"663-C3c0t/BkPcGmoKQMFVHBP6o+6fQ\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 1635,
		"path": "../public/placeholder-user.jpg"
	},
	"/placeholder.svg": {
		"type": "image/svg+xml",
		"etag": "\"cb5-3cfZ/x0uNhX4kurZGAkOBE4K/G0\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 3253,
		"path": "../public/placeholder.svg"
	},
	"/assets/brooklyn-sourdough-header-logo-DtC9CJG7.png": {
		"type": "image/png",
		"etag": "\"34b60-gzb+r/HgMrVmQedEWUJbiVzUxXQ\"",
		"mtime": "2026-07-15T20:51:24.621Z",
		"size": 215904,
		"path": "../public/assets/brooklyn-sourdough-header-logo-DtC9CJG7.png"
	},
	"/assets/classic-sourdough-gift-box-Fn3ZNhGt.jpg": {
		"type": "image/jpeg",
		"etag": "\"183b9-CPTqY3ZvAu/YTFbtEvNw7cLRMHo\"",
		"mtime": "2026-07-15T20:51:24.621Z",
		"size": 99257,
		"path": "../public/assets/classic-sourdough-gift-box-Fn3ZNhGt.jpg"
	},
	"/assets/crc-kashrus-seal-VOD0sX9B.png": {
		"type": "image/png",
		"etag": "\"9f8b-U0cH4ZZ0MND5bxWRTa1jiXedgFg\"",
		"mtime": "2026-07-15T20:51:24.625Z",
		"size": 40843,
		"path": "../public/assets/crc-kashrus-seal-VOD0sX9B.png"
	},
	"/placeholder-logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"c88-Vv8IA2xgjEZAiN2dErxBClzvxAM\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 3208,
		"path": "../public/placeholder-logo.svg"
	},
	"/assets/gift-box-hero-bg-Cs4ryKNf.jpeg": {
		"type": "image/jpeg",
		"etag": "\"26fb4-zxuqfGfjA21Vk2Wey6ST1EUQ3KU\"",
		"mtime": "2026-07-15T20:51:24.653Z",
		"size": 159668,
		"path": "../public/assets/gift-box-hero-bg-Cs4ryKNf.jpeg"
	},
	"/assets/index-BthNXEWS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5439c-nfWaejGOx65ANM5H+n0+SeuzSdI\"",
		"mtime": "2026-07-15T20:51:24.617Z",
		"size": 344988,
		"path": "../public/assets/index-BthNXEWS.js"
	},
	"/placeholder.jpg": {
		"type": "image/jpeg",
		"etag": "\"428-IKS5JfbV4RoTBDDc/wuWqgR2Qhw\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 1064,
		"path": "../public/placeholder.jpg"
	},
	"/placeholder-logo.png": {
		"type": "image/png",
		"etag": "\"238-pS23KseK6wWmMHqaT+IrH57MhUI\"",
		"mtime": "2026-07-15T20:51:25.697Z",
		"size": 568,
		"path": "../public/placeholder-logo.png"
	},
	"/assets/baker-waves-hand-on-table-BY4LgEUh.mp4": {
		"type": "video/mp4",
		"etag": "\"d066a-hS2qJm8DYcFN/Znrl+yGZfUlpUw\"",
		"mtime": "2026-07-15T20:51:24.617Z",
		"size": 853610,
		"path": "../public/assets/baker-waves-hand-on-table-BY4LgEUh.mp4"
	},
	"/assets/custom-order-now-DTwbtrO1.png": {
		"type": "image/png",
		"etag": "\"a1a82-RcF1vg1+Tk6mcQXtWQra1o6mqxs\"",
		"mtime": "2026-07-15T20:51:24.653Z",
		"size": 662146,
		"path": "../public/assets/custom-order-now-DTwbtrO1.png"
	},
	"/assets/craft-brooklyn-seal-DCXzxIbf.png": {
		"type": "image/png",
		"etag": "\"15682a-2atTNRQnYRlwBcRz0/TbSevN3jM\"",
		"mtime": "2026-07-15T20:51:24.621Z",
		"size": 1402922,
		"path": "../public/assets/craft-brooklyn-seal-DCXzxIbf.png"
	},
	"/assets/location-boro-park-CzIT8mvm.png": {
		"type": "image/png",
		"etag": "\"15e698-pVGQ0n1AFFRVDncIPhe5bgzVVL0\"",
		"mtime": "2026-07-15T20:51:24.653Z",
		"size": 1435288,
		"path": "../public/assets/location-boro-park-CzIT8mvm.png"
	},
	"/assets/location-lakewood-CBsI0VyF.png": {
		"type": "image/png",
		"etag": "\"16291a-ONo2ZRCHGQovjPHH9IQB+JUX8C8\"",
		"mtime": "2026-07-15T20:51:24.657Z",
		"size": 1452314,
		"path": "../public/assets/location-lakewood-CBsI0VyF.png"
	},
	"/assets/location-monsey-BsFxBxc_.png": {
		"type": "image/png",
		"etag": "\"168694-TagNkF7HeaPXbFyeFjCTMfRugFQ\"",
		"mtime": "2026-07-15T20:51:24.657Z",
		"size": 1476244,
		"path": "../public/assets/location-monsey-BsFxBxc_.png"
	},
	"/assets/craft-kosher-seals-BpZR_IpF.png": {
		"type": "image/png",
		"etag": "\"1fa4be-L83YQZDK23+dt4WA4/ns3e+EcaE\"",
		"mtime": "2026-07-15T20:51:24.625Z",
		"size": 2073790,
		"path": "../public/assets/craft-kosher-seals-BpZR_IpF.png"
	},
	"/assets/routes-Bn9JI7h1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"956f-IhPJ2TQ+Lo7Eg5QfJpuCBQbNDzU\"",
		"mtime": "2026-07-15T20:51:24.617Z",
		"size": 38255,
		"path": "../public/assets/routes-Bn9JI7h1.js"
	},
	"/assets/sourdough-dips-product-BNQFR9YN.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d410-KMHLzt3vl1aa8FssWeiLZGXtgJU\"",
		"mtime": "2026-07-15T20:51:24.665Z",
		"size": 185360,
		"path": "../public/assets/sourdough-dips-product-BNQFR9YN.jpg"
	},
	"/assets/styles-CJieaG8S.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12dc6-Bm6BB4LVfyWCb2sHg7ppoPBNODE\"",
		"mtime": "2026-07-15T20:51:24.665Z",
		"size": 77254,
		"path": "../public/assets/styles-CJieaG8S.css"
	},
	"/assets/classic-country-sourdough-boule-CsA3vo-Z.png": {
		"type": "image/png",
		"etag": "\"2781f8-3BZZJnFU89uIhy/xEzDPpUdQebk\"",
		"mtime": "2026-07-15T20:51:24.621Z",
		"size": 2589176,
		"path": "../public/assets/classic-country-sourdough-boule-CsA3vo-Z.png"
	},
	"/assets/braided-sourdough-challah-ES_FQ6SW.png": {
		"type": "image/png",
		"etag": "\"2a405e-snXXWb4nyabyUm1D7KnW6mn5AaI\"",
		"mtime": "2026-07-15T20:51:24.617Z",
		"size": 2768990,
		"path": "../public/assets/braided-sourdough-challah-ES_FQ6SW.png"
	},
	"/assets/crystal-arak-gift-box-BrJg_78X.png": {
		"type": "image/png",
		"etag": "\"285244-PgsuqIqxPO06P5zXuWXw+LocjtY\"",
		"mtime": "2026-07-15T20:51:24.625Z",
		"size": 2642500,
		"path": "../public/assets/crystal-arak-gift-box-BrJg_78X.png"
	},
	"/assets/location-williamsburg-YUFhBGm_.png": {
		"type": "image/png",
		"etag": "\"16a4a9-zCYyTh3Lpn3k6LLw52IQzrHGG3E\"",
		"mtime": "2026-07-15T20:51:24.657Z",
		"size": 1483945,
		"path": "../public/assets/location-williamsburg-YUFhBGm_.png"
	},
	"/assets/olive-pairing-gift-box-zKKTi9_7.png": {
		"type": "image/png",
		"etag": "\"272c2b-i4KLyELPgKOpNREAKgimQkRVumE\"",
		"mtime": "2026-07-15T20:51:24.661Z",
		"size": 2567211,
		"path": "../public/assets/olive-pairing-gift-box-zKKTi9_7.png"
	},
	"/assets/seeded-sourdough-boule-BDPZVh2o.png": {
		"type": "image/png",
		"etag": "\"2c837d-KL//3kuo2ArphRfg2qUl3AONsEY\"",
		"mtime": "2026-07-15T20:51:24.661Z",
		"size": 2917245,
		"path": "../public/assets/seeded-sourdough-boule-BDPZVh2o.png"
	},
	"/assets/custom-hero-loop-CPl5xujN.mp4": {
		"type": "video/mp4",
		"etag": "\"167d2c3-lJhA2K1aNp4hPpDDL3gO3vw4AsA\"",
		"mtime": "2026-07-15T20:51:24.629Z",
		"size": 23581379,
		"path": "../public/assets/custom-hero-loop-CPl5xujN.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_dotenv@17.4.2_jiti@1.21.7_vite@8.1.4_@types+node@22.20.1_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_h_I8cr = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_h_I8cr
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_dotenv@17.4.2_jiti@1.21.7_vite@8.1.4_@types+node@22.20.1_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_dotenv@17.4.2_jiti@1.21.7_vite@8.1.4_@types+node@22.20.1_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_dotenv@17.4.2_jiti@1.21.7_vite@8.1.4_@types+node@22.20.1_jiti@1.21.7_/node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_dotenv@17.4.2_jiti@1.21.7_vite@8.1.4_@types+node@22.20.1_jiti@1.21.7_/node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
