import { n as __toESM } from "../_runtime.mjs";
import { o as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Menu, c as Clock, i as Phone, l as ChevronRight, n as Star, o as MapPin, r as ShieldCheck, s as Instagram, t as X, u as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CL1QfE1Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var custom_hero_loop_default = "/assets/custom-hero-loop-CPl5xujN.mp4";
var braided_sourdough_challah_default = "/assets/braided-sourdough-challah-ES_FQ6SW.png";
var classic_country_sourdough_boule_default = "/assets/classic-country-sourdough-boule-CsA3vo-Z.png";
var seeded_sourdough_boule_default = "/assets/seeded-sourdough-boule-BDPZVh2o.png";
var crc_kashrus_seal_default = "/assets/crc-kashrus-seal-VOD0sX9B.png";
var location_williamsburg_default = "/assets/location-williamsburg-YUFhBGm_.png";
var location_boro_park_default = "/assets/location-boro-park-CzIT8mvm.png";
var location_monsey_default = "/assets/location-monsey-BsFxBxc_.png";
var location_lakewood_default = "/assets/location-lakewood-CBsI0VyF.png";
var sourdough_dips_product_default = "/assets/sourdough-dips-product-BNQFR9YN.jpg";
var brooklyn_sourdough_header_logo_default = "/assets/brooklyn-sourdough-header-logo-DtC9CJG7.png";
var custom_order_now_default = "/assets/custom-order-now-DTwbtrO1.png";
var classic_sourdough_gift_box_default = "/assets/classic-sourdough-gift-box-Fn3ZNhGt.jpg";
var olive_pairing_gift_box_default = "/assets/olive-pairing-gift-box-zKKTi9_7.png";
var crystal_arak_gift_box_default = "/assets/crystal-arak-gift-box-BrJg_78X.png";
var gift_box_hero_bg_default = "/assets/gift-box-hero-bg-Cs4ryKNf.jpeg";
var baker_waves_hand_on_table_default = "/assets/baker-waves-hand-on-table-BY4LgEUh.mp4";
var craft_brooklyn_seal_default = "/assets/craft-brooklyn-seal-DCXzxIbf.png";
var craft_kosher_seals_default = "/assets/craft-kosher-seals-BpZR_IpF.png";
var BRAND = "#54724B";
var CREAM = "#FFF9F2";
var YELLOW = "#F6E75A";
var TOAST_URL = "https://order.toasttab.com/online/brooklynsourdoughbakery";
function Logo({ className = "h-14 w-auto" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: brooklyn_sourdough_header_logo_default,
		alt: "Brooklyn Sourdough",
		className
	});
}
function useReveal() {
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) e.target.classList.add("is-visible");
				else e.target.classList.remove("is-visible");
			});
		}, { threshold: .15 });
		el.querySelectorAll("[data-reveal]").forEach((n, i) => {
			n.classList.add("reveal");
			n.style.animationDelay = `${i * 90}ms`;
			io.observe(n);
		});
		return () => io.disconnect();
	}, []);
	return ref;
}
function Index() {
	const [locOpen, setLocOpen] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [headerStuck, setHeaderStuck] = (0, import_react.useState)(false);
	const aboutRef = import_react.useRef(null);
	const aboutVideoRef = import_react.useRef(null);
	const announcementRef = import_react.useRef(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const barHeight = announcementRef.current?.offsetHeight ?? 44;
			setHeaderStuck(window.scrollY >= barHeight);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (locOpen || menuOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [locOpen, menuOpen]);
	(0, import_react.useEffect)(() => {
		const section = aboutRef.current;
		const video = aboutVideoRef.current;
		if (!section || !video) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry) return;
			if (entry.isIntersecting && entry.intersectionRatio >= .4) {
				video.currentTime = 0;
				video.play().catch(() => {});
				return;
			}
			video.pause();
		}, { threshold: [0, .4] });
		observer.observe(section);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const video = aboutVideoRef.current;
		if (!video) return;
		const keepLastFrame = () => {
			video.pause();
		};
		video.addEventListener("ended", keepLastFrame);
		return () => video.removeEventListener("ended", keepLastFrame);
	}, []);
	const openOrder = () => setLocOpen(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen w-full",
		style: { backgroundColor: CREAM },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[430px] md:max-w-[480px] bg-[--color-cream] overflow-x-clip",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: announcementRef,
						className: "h-11 relative overflow-hidden text-white text-[13px] font-medium tracking-[0.14em] uppercase",
						style: { backgroundColor: BRAND },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-y-0 left-0 flex items-center gap-10 whitespace-nowrap animate-marquee will-change-transform",
							style: { width: "200%" },
							children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-10 pr-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brooklyn Authentic Sourdough" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-60",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Slow-Fermented · Hand-Shaped" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-60",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Baked Fresh Daily" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-60",
										children: "✦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kosher Certified" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-60",
										children: "✦"
									})
								]
							}, k))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-50 h-[80px] flex items-center px-5 bg-white border-b border-black/5 transition-shadow duration-300",
						style: { boxShadow: headerStuck ? "0 2px 10px rgba(0,0,0,0.08)" : "0 6px 24px -18px rgba(0,0,0,0.35)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Menu",
								onClick: () => setMenuOpen(true),
								style: { color: BRAND },
								className: "z-10 transition-transform hover:scale-110 active:scale-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									strokeWidth: 2.2,
									className: "h-7 w-7"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-[76px] w-[76px] object-contain object-center opacity-100 bg-transparent shadow-none" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://maps.app.goo.gl/r3a3Hvo14rj54bma8",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Location",
								style: { color: BRAND },
								className: "z-10 ml-auto transition-transform hover:scale-110 active:scale-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									strokeWidth: 2.2,
									className: "h-7 w-7"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative animate-fade-up bg-black overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-[520px] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: custom_hero_loop_default,
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								preload: "auto",
								className: "w-full h-full object-cover block"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0",
							style: { background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.45) 100%)" }
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "px-6 pt-14 pb-12 text-center relative overflow-hidden",
						style: { backgroundColor: BRAND },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-[56px] leading-[1.02] tracking-tight relative",
							style: { color: CREAM },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block reveal-in",
									style: { animationDelay: "0.05s" },
									children: "The Good"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block reveal-in",
									style: { animationDelay: "0.25s" },
									children: "Sourdough"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mt-8 w-full max-w-[299px] mx-auto reveal-in",
							style: { animationDelay: "0.45s" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: openOrder,
								"aria-label": "Order Now",
								className: "block w-full transition-transform hover:scale-[1.03] active:scale-[0.98]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: custom_order_now_default,
									alt: "Order Now",
									className: "block w-full h-auto drop-shadow-2xl"
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftIntroSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "about",
						ref: aboutRef,
						className: "relative isolate aspect-[9/16] w-full overflow-hidden animate-fade-up",
						style: { backgroundColor: CREAM },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									ref: aboutVideoRef,
									src: baker_waves_hand_on_table_default,
									muted: true,
									playsInline: true,
									preload: "auto",
									className: "block h-full w-full object-cover object-bottom opacity-100"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0",
								style: { background: "linear-gradient(180deg, rgba(255,249,242,0.64) 0%, rgba(255,249,242,0.38) 32%, rgba(255,249,242,0.04) 58%, rgba(255,249,242,0) 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 px-5 pt-12 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display whitespace-nowrap leading-none reveal-in",
									style: {
										color: BRAND,
										fontSize: "clamp(42px, 11.4vw, 55px)"
									},
									children: "Know about us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-16 max-w-[330px] text-[15px] font-medium leading-[1.48] reveal-in",
									style: {
										color: BRAND,
										animationDelay: "0.18s"
									},
									children: "Brooklyn Sourdough Bakery brings slow-fermented flavor to everyday favorites, from fresh sandwiches and hand-shaped breads to signature dips and gift boxes made to share. Every item is crafted with honest ingredients, baked with care, and prepared under trusted kosher standards."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CraftStatsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DipsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliverySection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			locOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationModal, { onClose: () => setLocOpen(false) }),
			menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideMenu, { onClose: () => setMenuOpen(false) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
function CollectionsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "menu",
		ref: useReveal(),
		className: "relative overflow-hidden py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute -top-10 right-6 select-none font-display text-[140px] opacity-[0.04]",
				style: { color: BRAND },
				children: "菜"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-center text-[11px] font-semibold uppercase tracking-[0.28em] opacity-70",
					style: { color: BRAND },
					children: "Handcrafted Selection"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				"data-reveal": true,
				className: "mt-2 px-4 text-center font-display text-[60px] leading-[0.95]",
				style: {
					color: BRAND,
					transform: "scaleY(1.20)",
					transformOrigin: "center",
					letterSpacing: "-0.5px"
				},
				children: [
					"Taste our",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Collections"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRail, {})
		]
	});
}
var giftBoxCollection = [
	{
		name: "Classic Sourdough Gift Box",
		image: classic_sourdough_gift_box_default,
		alt: "Brooklyn Sourdough gift box with two artisan boules, sliced bread and signature spreads",
		details: [
			"Two artisan sourdough loaves",
			"Signature spreads",
			"Ready to share",
			"Perfect for hosts & families"
		]
	},
	{
		name: "Olive Pairing Collection",
		image: olive_pairing_gift_box_default,
		alt: "Wooden Brooklyn Sourdough gift box with two loaves, olive oil, savory spreads and tasting glasses",
		details: [
			"Two artisan loaves",
			"Premium olive oil",
			"Two savory spreads",
			"Elegant wooden presentation"
		]
	},
	{
		name: "Crystal Arak Collection",
		image: crystal_arak_gift_box_default,
		alt: "Crystal Arak wooden gift box with two sourdough loaves, arak, savory spreads and tasting glasses",
		details: [
			"Two artisan loaves",
			"Crystal Arak bottle",
			"Two savory spreads",
			"Tasting glasses included"
		]
	}
];
function GiftIntroSection() {
	const ref = useReveal();
	const [inView, setInView] = import_react.useState(false);
	import_react.useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry) setInView(entry.isIntersecting);
		}, { threshold: .2 });
		io.observe(el);
		return () => io.disconnect();
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative mt-14 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: gift_box_hero_bg_default,
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 h-full w-full object-cover",
				style: {
					transform: inView ? "scale(1)" : "scale(1.05)",
					transition: "transform 2.8s cubic-bezier(0.22, 1, 0.36, 1)",
					willChange: "transform"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { backgroundColor: "rgba(84, 114, 75, 0.78)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(84,114,75,0.55) 0%, rgba(84,114,75,0.25) 38%, rgba(84,114,75,0.92) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 px-7 pt-16 pb-4 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-reveal": true,
						className: "text-[11px] font-semibold uppercase tracking-[0.32em]",
						style: { color: "rgba(255,249,242,0.85)" },
						children: "Ready to Share"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						"data-reveal": true,
						className: "mt-4 font-display leading-[1.06]",
						style: { fontSize: "clamp(40px, 11vw, 64px)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: CREAM },
								children: "A Perfect Way"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#A6C695" },
								children: "to Share"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-reveal": true,
						className: "mt-6 w-full max-w-[520px] text-[15px] leading-[1.65]",
						style: { color: "rgba(255,249,242,0.86)" },
						children: "Share the warmth of Brooklyn Sourdough with our thoughtfully curated gift boxes. Each box combines freshly baked artisan sourdough with handcrafted homemade dips, creating a beautifully packaged experience that's perfect for hosting, celebrating, or gifting."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-col gap-5",
						children: [
							"Fresh artisan sourdough",
							"Handcrafted homemade dips",
							"Beautifully packaged and ready to serve or gift"
						].map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "flex items-center gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
								style: {
									backgroundColor: "rgba(166,198,149,0.22)",
									border: "1px solid rgba(166,198,149,0.5)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									strokeWidth: 2.5,
									className: "h-3.5 w-3.5",
									style: { color: "#A6C695" }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[14.5px] font-medium",
								style: { color: "rgba(255,249,242,0.92)" },
								children: feature
							})]
						}, feature))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 pt-10 pb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						className: "px-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold uppercase tracking-[0.22em]",
							style: { color: "rgba(255,249,242,0.75)" },
							children: "Ready-to-share bakery sets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-1 font-display text-[34px] leading-none",
							style: { color: CREAM },
							children: "Gift Boxes"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						className: "mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 pb-2 scrollbar-none",
						children: [giftBoxCollection.map((box) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex w-[84%] shrink-0 snap-center flex-col text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative aspect-[4/3] w-full overflow-hidden rounded-3xl",
									style: {
										boxShadow: "0 20px 44px -18px rgba(0,0,0,0.55)",
										border: "1px solid rgba(255,249,242,0.18)"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: box.image,
										alt: box.alt,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-4 text-balance font-display text-[22px] leading-tight",
									style: { color: CREAM },
									children: box.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-wrap gap-2",
									"aria-label": `${box.name} details`,
									children: box.details.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full border px-2.5 py-1 text-[11px] font-medium leading-[1.3]",
										style: {
											borderColor: "rgba(255,249,242,0.28)",
											color: CREAM,
											backgroundColor: "rgba(255,249,242,0.1)"
										},
										children: detail
									}, detail))
								})
							]
						}, box.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "flex min-h-[320px] w-[84%] shrink-0 snap-center items-center justify-center rounded-3xl border text-center",
							style: {
								borderColor: "rgba(255,249,242,0.22)",
								backgroundColor: "rgba(255,249,242,0.08)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: TOAST_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-full px-8 py-3 text-[15px] font-semibold transition-transform hover:scale-[1.04]",
								style: {
									backgroundColor: CREAM,
									color: BRAND
								},
								children: "See More"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 px-7 text-center text-[10px] font-semibold uppercase tracking-[0.18em]",
						style: { color: "rgba(255,249,242,0.62)" },
						children: "Swipe to explore"
					})
				]
			})
		]
	});
}
function CraftStatsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-6 py-12 animate-fade-up",
		style: {
			backgroundColor: BRAND,
			color: CREAM
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-y-0 left-0 w-20 opacity-25",
			style: { background: "linear-gradient(90deg, rgba(255,249,242,0.2), transparent)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-[42%] max-w-[160px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: craft_brooklyn_seal_default,
							alt: "Brooklyn Sourdough seal",
							className: "block h-auto w-full object-contain opacity-100",
							style: { filter: "contrast(1.12) brightness(1.05)" }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-[42%] max-w-[170px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: craft_kosher_seals_default,
							alt: "Kosher certification seals",
							className: "block h-auto w-full object-contain opacity-100",
							style: { filter: "contrast(1.14) brightness(1.05)" }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-7 h-px w-full bg-white/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-3 text-center",
					children: [
						{
							value: "17yrs",
							label: "Of Craft"
						},
						{
							value: "2",
							label: "Locations"
						},
						{
							value: "Kosher",
							label: "Certified"
						}
					].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display leading-none",
							style: {
								color: CREAM,
								fontSize: stat.value === "Kosher" ? "clamp(26px, 8vw, 36px)" : "clamp(34px, 10vw, 48px)"
							},
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] opacity-75",
							children: stat.label
						})]
					}, stat.label))
				})
			]
		})]
	});
}
var sourdoughCollection = [
	{
		name: "Braided Sourdough Challah",
		image: braided_sourdough_challah_default,
		alt: "Large braided sourdough challah loaves coated with sesame seeds",
		details: [
			"60–65% hydration",
			"Thin, shiny crust",
			"Soft, fluffy crumb",
			"Mild tang · buttery notes",
			"Best for sandwiches, French toast & breakfast",
			"8–16 hour fermentation"
		]
	},
	{
		name: "Classic Country Sourdough Boule",
		image: classic_country_sourdough_boule_default,
		alt: "Round classic country sourdough boule with a large score on top",
		details: [
			"70–80% hydration",
			"Thick, caramelized crust",
			"Open, airy crumb",
			"Balanced sour · nutty & wheaty",
			"Bread flour, water, salt & starter",
			"Perfect for toast, soup & cheese boards"
		]
	},
	{
		name: "Seeded Sourdough Boule",
		image: seeded_sourdough_boule_default,
		alt: "Round sourdough boule heavily coated in black and white sesame seeds",
		details: [
			"Black & white sesame, flax, poppy & sunflower",
			"Deeply nutty, toasted flavor",
			"Extra-crunchy crust",
			"Moist, chewy crumb",
			"Best with avocado, eggs, cream cheese or smoked salmon"
		]
	}
];
function ProductRail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-reveal": true,
		className: "mt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70",
					style: { color: BRAND },
					children: "Slow-fermented classics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-[34px] leading-none",
					style: { color: BRAND },
					children: "Sourdough"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 scrollbar-none",
				children: [sourdoughCollection.map((bread) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group flex w-[88%] shrink-0 snap-center flex-col text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white card-lift",
							style: { boxShadow: "0 18px 40px -16px rgba(0,91,79,0.35)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: bread.image,
								alt: bread.alt,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-4 text-balance font-display text-[23px] leading-[1.05]",
							style: { color: BRAND },
							children: bread.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							"aria-label": `${bread.name} details`,
							children: bread.details.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border px-2.5 py-1 text-[11px] font-medium leading-[1.3]",
								style: {
									borderColor: "rgba(84,114,75,0.2)",
									color: BRAND,
									backgroundColor: "rgba(255,255,255,0.55)"
								},
								children: detail
							}, detail))
						})
					]
				}, bread.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "flex min-h-[320px] w-[88%] shrink-0 snap-center items-center justify-center rounded-3xl border text-center",
					style: {
						borderColor: "rgba(84,114,75,0.2)",
						backgroundColor: "rgba(255,255,255,0.55)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: TOAST_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full px-8 py-3 text-[15px] font-semibold transition-transform hover:scale-[1.04]",
						style: {
							backgroundColor: BRAND,
							color: CREAM
						},
						children: "See More"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 px-6 text-center text-[10px] font-semibold uppercase tracking-[0.18em] opacity-60",
				style: { color: BRAND },
				children: "Swipe to explore"
			})
		]
	});
}
function LocationModal({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-5 animate-fade-up",
		style: { backgroundColor: "rgba(0,0,0,0.55)" },
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-[300px] rounded-[22px] p-4 pt-5",
			style: { backgroundColor: CREAM },
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close",
					onClick: onClose,
					className: "absolute top-3 right-3 h-7 w-7 rounded-full border flex items-center justify-center hover:bg-black/5",
					style: { borderColor: "rgba(0,0,0,0.15)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-10 w-10 rounded-full flex items-center justify-center",
							style: { backgroundColor: "#F3EAD3" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "h-5 w-5",
								style: { color: BRAND },
								fill: BRAND
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -bottom-0.5 h-1.5 w-4 rounded-full",
								style: { backgroundColor: YELLOW }
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-[18px] leading-tight text-center",
							style: { color: BRAND },
							children: "Choose Your Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] text-center opacity-70",
							style: { color: BRAND },
							children: "Select your nearest Brooklyn Sourdough store."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: [
						{
							name: "Williamsburg",
							icon: location_williamsburg_default,
							status: "available",
							href: TOAST_URL
						},
						{
							name: "Boro Park",
							icon: location_boro_park_default,
							status: "available",
							href: null
						},
						{
							name: "Monsey",
							icon: location_monsey_default,
							status: "soon",
							href: null
						},
						{
							name: "Lakewood",
							icon: location_lakewood_default,
							status: "soon",
							href: null
						}
					].map((loc) => {
						const isAvail = loc.status === "available";
						const clickable = !!loc.href;
						const Row = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl px-3 py-2 border transition-all",
							style: {
								borderColor: isAvail ? BRAND : "rgba(0,0,0,0.08)",
								borderWidth: isAvail ? 1.5 : 1,
								backgroundColor: isAvail ? "#FBF5E8" : "#F2EFE7",
								opacity: isAvail ? 1 : .75,
								cursor: clickable ? "pointer" : "default"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-14 w-14 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: loc.icon,
										alt: loc.name,
										className: "block h-full w-full object-contain"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-[13px] leading-tight",
										style: { color: isAvail ? BRAND : "#8a8a83" },
										children: loc.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-0.5 flex items-center gap-1 text-[9px]",
										style: { color: isAvail ? "#3a7a4a" : "#9a988e" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-1.5 w-1.5 rounded-full",
											style: { backgroundColor: isAvail ? "#4CAF50" : "#B4B1A6" }
										}), isAvail ? "Available" : "Coming Soon"]
									})]
								}),
								isAvail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "h-4 w-4",
									style: { color: BRAND }
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full px-2 py-0.5 text-[9px] font-semibold",
									style: {
										backgroundColor: "#F9D48A",
										color: "#7a5a1a"
									},
									children: "Soon"
								})
							]
						});
						return clickable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: loc.href,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: onClose,
							children: Row
						}, loc.name) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Row }, loc.name);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-center gap-1.5 text-[9px]",
					style: { color: BRAND },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-80",
						children: "Freshly baked. Locally delivered."
					})]
				})
			]
		})
	});
}
function SideMenu({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100]",
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: { backgroundColor: "rgba(0,0,0,0.5)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			onClick: (e) => e.stopPropagation(),
			className: "absolute top-0 left-0 h-full w-1/2 min-w-[240px] max-w-[380px] flex flex-col p-6 animate-in slide-in-from-left duration-300",
			style: {
				backgroundColor: BRAND,
				color: CREAM
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close menu",
					onClick: onClose,
					className: "self-end h-9 w-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-8 flex flex-col gap-5",
					children: [
						{
							label: "Menu",
							href: "#menu",
							external: false
						},
						{
							label: "Reviews",
							href: "#reviews",
							external: false
						},
						{
							label: "Gallery",
							href: "#gallery",
							external: false
						},
						{
							label: "About us",
							href: "#about",
							external: false
						},
						{
							label: "Location",
							href: "https://maps.app.goo.gl/r3a3Hvo14rj54bma8",
							external: true
						}
					].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: it.href,
						target: it.external ? "_blank" : void 0,
						rel: it.external ? "noopener noreferrer" : void 0,
						onClick: onClose,
						className: "font-display text-[24px] leading-tight hover:opacity-80 transition-opacity",
						children: it.label
					}, it.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/17182127323",
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "WhatsApp",
						className: "h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 24 24",
							className: "h-5 w-5",
							fill: "currentColor",
							"aria-hidden": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.887-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/brooklyn.sourdough",
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "Instagram",
						className: "h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
					})]
				})
			]
		})]
	});
}
function ReviewsSection() {
	const reviews = [
		{
			name: "Sarah K.",
			text: "The everything bagel sandwich is unreal — perfect crust, fresh fillings, every single time.",
			avatar: "https://i.pravatar.cc/120?img=47"
		},
		{
			name: "Marcus T.",
			text: "Best sourdough in Brooklyn. I drive across the borough just for these.",
			avatar: "https://i.pravatar.cc/120?img=12"
		},
		{
			name: "Aisha R.",
			text: "Their croissant sandwich changed my mornings. Flaky, fresh, full of flavor.",
			avatar: "https://i.pravatar.cc/120?img=32"
		},
		{
			name: "Daniel P.",
			text: "Real bread, real ingredients. You can taste the slow ferment in every bite.",
			avatar: "https://i.pravatar.cc/120?img=15"
		},
		{
			name: "Rivka L.",
			text: "The dips are addictive — I keep coming back for more every weekend.",
			avatar: "https://i.pravatar.cc/120?img=45"
		},
		{
			name: "Jonah B.",
			text: "Crackling crust, tender crumb. This is what real sourdough tastes like.",
			avatar: "https://i.pravatar.cc/120?img=13"
		},
		{
			name: "Elena M.",
			text: "Gift boxes were a hit at our office — everyone asked where they were from.",
			avatar: "https://i.pravatar.cc/120?img=36"
		},
		{
			name: "Tomer S.",
			text: "Fresh, kosher, and consistently amazing. My family's new favorite bakery.",
			avatar: "https://i.pravatar.cc/120?img=8"
		},
		{
			name: "Priya N.",
			text: "That tangy sourdough flavor is next level. Worth every bite.",
			avatar: "https://i.pravatar.cc/120?img=48"
		},
		{
			name: "Chaim W.",
			text: "Warm loaves, kind staff, and the best challah-adjacent sourdough in town.",
			avatar: "https://i.pravatar.cc/120?img=68"
		}
	];
	const dots = [
		{
			top: "12%",
			left: "8%",
			bg: "#FF8AA0",
			ring: BRAND
		},
		{
			top: "20%",
			left: "92%",
			bg: YELLOW,
			ring: "#1a1a1a"
		},
		{
			top: "55%",
			left: "5%",
			bg: "#FF8AA0",
			ring: BRAND
		},
		{
			top: "78%",
			left: "12%",
			bg: "transparent",
			ring: BRAND
		},
		{
			top: "68%",
			left: "88%",
			bg: "#fff",
			ring: "#1a1a1a"
		},
		{
			top: "40%",
			left: "85%",
			bg: "#9bd1cf",
			ring: BRAND
		}
	];
	const trackRef = import_react.useRef(null);
	import_react.useEffect(() => {
		const el = trackRef.current;
		if (!el) return;
		let raf = 0;
		let paused = false;
		let last = performance_default.now();
		let acc = 0;
		const SPEED = .8;
		const step = (now) => {
			const dt = now - last;
			last = now;
			if (!paused && el) {
				acc += SPEED * dt / 1e3;
				if (acc >= 1) {
					const px = Math.floor(acc);
					acc -= px;
					if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) el.scrollTo({
						left: 0,
						behavior: "auto"
					});
					else el.scrollBy({
						left: px,
						behavior: "auto"
					});
				}
			}
			raf = window.requestAnimationFrame(step);
		};
		const onEnter = () => {
			paused = true;
		};
		const onLeave = () => {
			paused = false;
			last = performance_default.now();
		};
		el.addEventListener("pointerdown", onEnter);
		el.addEventListener("pointerup", onLeave);
		el.addEventListener("pointerleave", onLeave);
		raf = window.requestAnimationFrame(step);
		return () => {
			window.cancelAnimationFrame(raf);
			el.removeEventListener("pointerdown", onEnter);
			el.removeEventListener("pointerup", onLeave);
			el.removeEventListener("pointerleave", onLeave);
		};
	}, []);
	const rollingReviews = [...reviews, ...reviews];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "reviews",
		className: "relative px-6 pt-14 pb-14 overflow-hidden animate-fade-up",
		style: { backgroundColor: BRAND },
		children: [
			dots.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full",
				style: {
					top: d.top,
					left: d.left,
					width: 12,
					height: 12,
					backgroundColor: d.bg,
					border: `2px solid ${d.ring}`
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-[38px] leading-[1.05] text-center",
				style: { color: CREAM },
				children: "What Brooklyn Says"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 -mx-6 overflow-hidden pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max gap-4 px-6 animate-reviews-roll will-change-transform hover:[animation-play-state:paused]",
					children: rollingReviews.map((r, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "shrink-0 w-[300px] max-w-[78vw] rounded-[22px] bg-white p-5 card-lift",
						style: { boxShadow: "0 12px 32px rgba(0,0,0,0.18)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "h-4 w-4 fill-current",
									style: { color: "#F6C84A" }
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.avatar,
									alt: r.name,
									loading: "lazy",
									className: "h-12 w-12 rounded-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-[17px]",
									style: { color: BRAND },
									children: r.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[14px] leading-snug opacity-90",
								style: { color: BRAND },
								children: r.text
							})
						]
					}, `${r.name}-${index}`))
				})
			})
		]
	});
}
function DipsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "dips",
		className: "relative px-6 pt-16 pb-16 text-center animate-fade-up",
		style: { backgroundColor: CREAM },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block text-[12px] font-semibold tracking-[0.2em] uppercase opacity-70",
				style: { color: BRAND },
				children: "Signature Jars"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-[44px] leading-[1] tracking-tight",
				style: { color: BRAND },
				children: "Our Sourdough Dips"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-4 top-6 bottom-6 rounded-[28px]",
					style: { background: `linear-gradient(180deg, ${BRAND}15, transparent)` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sourdough_dips_product_default,
					alt: "Brooklyn Sourdough Dips",
					className: "relative w-full h-auto rounded-[28px] object-cover",
					style: { boxShadow: "0 20px 40px -18px rgba(0,0,0,0.35)" }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-[15px] leading-[1.6] max-w-[380px] mx-auto",
				style: { color: BRAND },
				children: "Traditional homemade dips crafted from scratch with fresh, wholesome ingredients. Discover the rich, tangy flavor of our signature sourdough dip — a delicious depth of flavor and the perfect balance to any dish. Elevate your sandwich or snack with this unique taste."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase",
				style: { color: BRAND },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8",
						style: {
							backgroundColor: BRAND,
							opacity: .4
						}
					}),
					"Delicious Depth of Flavor",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8",
						style: {
							backgroundColor: BRAND,
							opacity: .4
						}
					})
				]
			})
		]
	});
}
function DeliverySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative px-6 pt-16 pb-28 text-center overflow-hidden animate-fade-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-[44px] leading-[1.05]",
				style: { color: BRAND },
				children: [
					"Available on",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Platforms"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[320px] rounded-2xl bg-white py-5 px-6 flex items-center justify-center gap-3 card-lift",
					style: { boxShadow: "0 12px 28px -16px rgba(0,0,0,0.25)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: "h-7 w-7",
						fill: "#EB1700",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23.07 8.69a4.9 4.9 0 0 0-4.36-2.69H1.4a.4.4 0 0 0-.28.68l3.2 3.2c.27.27.63.42 1.01.42h12.93c.85 0 1.55.7 1.55 1.55s-.7 1.55-1.55 1.55H8.84a.4.4 0 0 0-.28.68l3.2 3.2c.27.27.63.42 1.01.42h5.94c4.71 0 7.99-4.78 4.36-9.01Z" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[26px] tracking-tight",
						style: { color: "#EB1700" },
						children: "DoorDash"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[320px] rounded-2xl bg-white py-5 px-6 flex items-center justify-center gap-2 card-lift",
					style: { boxShadow: "0 12px 28px -16px rgba(0,0,0,0.25)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[26px] tracking-tight",
						style: { color: "#0a0a0a" },
						children: "Uber"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[26px] tracking-tight",
						style: { color: "#06C167" },
						children: "Eats"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 430 60",
				className: "absolute bottom-0 left-0 w-full block",
				preserveAspectRatio: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0,30 C120,60 300,0 430,30 L430,60 L0,60 Z",
					fill: BRAND
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "px-6 pt-12 pb-10",
		style: {
			backgroundColor: BRAND,
			color: CREAM
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: crc_kashrus_seal_default,
					alt: "CRC Kashrus certification seal",
					className: "h-auto w-full max-w-[280px] object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-[14px] leading-relaxed opacity-90 max-w-[320px]",
					children: "Our products are prepared under kosher certification, giving every sourdough loaf, dip, and gift box the trusted standards our customers expect."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid grid-cols-1 gap-6 text-[14.5px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-[17px] mb-0.5",
							children: "Our Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://maps.app.goo.gl/r3a3Hvo14rj54bma8",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "opacity-90 hover:underline",
							children: "5 Heyward St, Brooklyn, NY 11249"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-[17px] mb-0.5",
							children: "Store Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "opacity-90",
							children: "9:00 AM — 6:00 PM"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-[17px] mb-0.5",
							children: "Contact Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+17182127323",
							className: "opacity-90 hover:underline",
							children: "718-212-7323"
						})] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex gap-4 justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://wa.me/17182127323",
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": "WhatsApp",
					className: "rounded-full bg-white/10 p-3 hover:bg-white/20 transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: "h-5 w-5",
						fill: "currentColor",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.887-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.instagram.com/brooklyn.sourdough",
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": "Instagram",
					className: "rounded-full bg-white/10 p-3 hover:bg-white/20 transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 pt-6 border-t border-white/15 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[18px] leading-tight",
					children: "Brooklyn Sourdough Bakery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-[12px] opacity-70",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" All rights reserved."
					]
				})]
			})
		]
	});
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "https://wa.me/17182127323",
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Contact us on WhatsApp",
		className: "fixed right-[max(1rem,calc((100vw-480px)/2+1rem))] bottom-5 z-50 block aspect-[3.58/1] w-[min(78vw,350px)] overflow-hidden rounded-full animate-whatsapp-float shadow-[0_6px_20px_rgba(0,0,0,0.22)] transition-transform hover:scale-[1.03] active:scale-[0.98]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2016%2C%202026%2C%2002_16_29%20AM-wcGIZTbUdUMEzmrANr4T5tUZCDMkMc.png",
			alt: "Contact us on WhatsApp",
			className: "absolute max-w-none",
			style: {
				width: "132.5%",
				height: "auto",
				left: "-16.25%",
				top: "-103.5%"
			}
		})
	});
}
//#endregion
export { Index as component };
