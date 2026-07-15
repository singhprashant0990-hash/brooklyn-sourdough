import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { Menu, MapPin, Star, Instagram, Phone, Clock, X, ChevronRight, ShieldCheck, Check } from "lucide-react";
import heroVideo from "@/assets/custom-hero-loop.mp4";
import braidedSourdoughChallah from "@/assets/braided-sourdough-challah.png";
import classicCountryBoule from "@/assets/classic-country-sourdough-boule.png";
import seededSourdoughBoule from "@/assets/seeded-sourdough-boule.png";
import crcKashrusSeal from "@/assets/crc-kashrus-seal.png";
import locationWilliamsburg from "@/assets/location-williamsburg.png";
import locationBoroPark from "@/assets/location-boro-park.png";
import locationMonsey from "@/assets/location-monsey.png";
import locationLakewood from "@/assets/location-lakewood.png";
import sourdoughDip from "@/assets/sourdough-dips-product.jpg";
import brooklynLogo from "@/assets/brooklyn-sourdough-header-logo.png";
import orderBtnImg from "@/assets/custom-order-now.png";
import classicSourdoughGiftBox from "@/assets/classic-sourdough-gift-box.jpg";
import olivePairingGiftBox from "@/assets/olive-pairing-gift-box.png";
import crystalArakGiftBox from "@/assets/crystal-arak-gift-box.png";
import giftBoxHeroBg from "@/assets/gift-box-hero-bg.jpeg";
import bakerWavesVideo from "@/assets/baker-waves-hand-on-table.mp4";
import craftBrooklynSeal from "@/assets/craft-brooklyn-seal.png";
import craftKosherSeals from "@/assets/craft-kosher-seals.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brooklyn Sourdough Bakery — Authentic Sourdough" },
      { name: "description", content: "Authentic sourdough bagels, sandwiches and bakery items made fresh in Brooklyn." },
      { property: "og:title", content: "Brooklyn Sourdough Bakery" },
      { property: "og:description", content: "Authentic sourdough bagels and sandwiches in Brooklyn." },
    ],
  }),
  component: Index,
});

const BRAND = "#54724B";
const CREAM = "#FFF9F2";
const YELLOW = "#F6E75A";
const TOAST_URL = "https://order.toasttab.com/online/brooklynsourdoughbakery";

function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <img src={brooklynLogo} alt="Brooklyn Sourdough" className={className} />
  );
}

function useReveal<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
          } else {
            e.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n, i) => {
      n.classList.add("reveal");
      n.style.animationDelay = `${i * 90}ms`;
      io.observe(n);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const [locOpen, setLocOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerStuck, setHeaderStuck] = useState(false);
  const aboutRef = React.useRef<HTMLElement | null>(null);
  const aboutVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const announcementRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const barHeight = announcementRef.current?.offsetHeight ?? 44;
      setHeaderStuck(window.scrollY >= barHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (locOpen || menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [locOpen, menuOpen]);

  useEffect(() => {
    const section = aboutRef.current;
    const video = aboutVideoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          video.currentTime = 0;
          video.play().catch(() => {
            // Autoplay can be blocked on some mobile browsers; keep the first frame visible.
          });
          return;
        }

        video.pause();
      },
      { threshold: [0, 0.4] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = aboutVideoRef.current;
    if (!video) return;

    const keepLastFrame = () => {
      video.pause();
    };

    video.addEventListener("ended", keepLastFrame);
    return () => video.removeEventListener("ended", keepLastFrame);
  }, []);
  const openOrder = () => setLocOpen(true);

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: CREAM }}>
      <div className="mx-auto w-full max-w-[430px] md:max-w-[480px] bg-[--color-cream] overflow-x-clip">
        {/* Announcement bar (scrolls away normally) */}
        <div ref={announcementRef} className="h-11 relative overflow-hidden text-white text-[13px] font-medium tracking-[0.14em] uppercase" style={{ backgroundColor: BRAND }}>
            <div className="absolute inset-y-0 left-0 flex items-center gap-10 whitespace-nowrap animate-marquee will-change-transform" style={{ width: "200%" }}>
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex items-center gap-10 pr-10">
                  <span>Brooklyn Authentic Sourdough</span><span className="opacity-60">✦</span>
                  <span>Slow-Fermented · Hand-Shaped</span><span className="opacity-60">✦</span>
                  <span>Baked Fresh Daily</span><span className="opacity-60">✦</span>
                  <span>Kosher Certified</span><span className="opacity-60">✦</span>
                </div>
              ))}
            </div>
          </div>
        {/* Sticky navigation header */}
        <header
          className="sticky top-0 z-50 h-[80px] flex items-center px-5 bg-white border-b border-black/5 transition-shadow duration-300"
          style={{ boxShadow: headerStuck ? "0 2px 10px rgba(0,0,0,0.08)" : "0 6px 24px -18px rgba(0,0,0,0.35)" }}
        >
          <button aria-label="Menu" onClick={() => setMenuOpen(true)} style={{ color: BRAND }} className="z-10 transition-transform hover:scale-110 active:scale-95">
            <Menu strokeWidth={2.2} className="h-7 w-7" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Logo className="h-[76px] w-[76px] object-contain object-center opacity-100 bg-transparent shadow-none" />
          </div>
          <a href="https://maps.app.goo.gl/r3a3Hvo14rj54bma8" target="_blank" rel="noopener noreferrer" aria-label="Location" style={{ color: BRAND }} className="z-10 ml-auto transition-transform hover:scale-110 active:scale-95">
            <MapPin strokeWidth={2.2} className="h-7 w-7" />
          </a>
        </header>

        {/* Hero video */}
        <section className="relative animate-fade-up bg-black overflow-hidden">
          <div className="w-full h-[520px] overflow-hidden">
            <video src={heroVideo} autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover block" />
          </div>
          <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.45) 100%)" }} />
        </section>

        {/* CTA */}
        <section className="px-6 pt-14 pb-12 text-center relative overflow-hidden" style={{ backgroundColor: BRAND }}>
          <h2 className="font-display text-[56px] leading-[1.02] tracking-tight relative" style={{ color: CREAM }}>
            <span className="inline-block reveal-in" style={{ animationDelay: "0.05s" }}>The Good</span><br />
            <span className="inline-block reveal-in" style={{ animationDelay: "0.25s" }}>Sourdough</span>
          </h2>
          <div className="relative mt-8 w-full max-w-[299px] mx-auto reveal-in" style={{ animationDelay: "0.45s" }}>
            <button onClick={openOrder} aria-label="Order Now" className="block w-full transition-transform hover:scale-[1.03] active:scale-[0.98]">
              <img src={orderBtnImg} alt="Order Now" className="block w-full h-auto drop-shadow-2xl" />
            </button>
          </div>
        </section>

        {/* Collections */}
        <CollectionsSection />

        {/* Gift Boxes */}
        <GiftIntroSection />

        {/* About */}
        <section id="about" ref={aboutRef} className="relative isolate aspect-[9/16] w-full overflow-hidden animate-fade-up" style={{ backgroundColor: CREAM }}>
          <div className="absolute inset-0">
            <video
              ref={aboutVideoRef}
              src={bakerWavesVideo}
              muted
              playsInline
              preload="auto"
              className="block h-full w-full object-cover object-bottom opacity-100"
            />
          </div>
          <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,249,242,0.64) 0%, rgba(255,249,242,0.38) 32%, rgba(255,249,242,0.04) 58%, rgba(255,249,242,0) 100%)" }} />
          <div className="relative z-10 px-5 pt-12 text-left">
            <h2 className="font-display whitespace-nowrap leading-none reveal-in" style={{ color: BRAND, fontSize: "clamp(42px, 11.4vw, 55px)" }}>
              Know about us
            </h2>
            <p className="mt-16 max-w-[330px] text-[15px] font-medium leading-[1.48] reveal-in" style={{ color: BRAND, animationDelay: "0.18s" }}>
              Brooklyn Sourdough Bakery brings slow-fermented flavor to everyday favorites, from fresh sandwiches and hand-shaped breads to signature dips and gift boxes made to share. Every item is crafted with honest ingredients, baked with care, and prepared under trusted kosher standards.
            </p>
          </div>
        </section>

        <CraftStatsSection />

        <ReviewsSection />
        <DipsSection />
        <DeliverySection />
        <Footer />
      </div>

      {/* Location Modal */}
      {locOpen && <LocationModal onClose={() => setLocOpen(false)} />}
      {/* Side Menu */}
      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}
      <FloatingWhatsApp />

    </div>
  );
}

function CollectionsSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="menu" ref={ref} className="relative overflow-hidden py-16">
      <span className="pointer-events-none absolute -top-10 right-6 select-none font-display text-[140px] opacity-[0.04]" style={{ color: BRAND }}>菜</span>
      <div data-reveal>
        <span className="block text-center text-[11px] font-semibold uppercase tracking-[0.28em] opacity-70" style={{ color: BRAND }}>Handcrafted Selection</span>
      </div>
      <h2 data-reveal className="mt-2 px-4 text-center font-display text-[60px] leading-[0.95]" style={{ color: BRAND, transform: "scaleY(1.20)", transformOrigin: "center", letterSpacing: "-0.5px" }}>
        Taste our<br />Collections
      </h2>
      <ProductRail />
    </section>
  );
}

const giftBoxCollection = [
  {
    name: "Classic Sourdough Gift Box",
    image: classicSourdoughGiftBox,
    alt: "Brooklyn Sourdough gift box with two artisan boules, sliced bread and signature spreads",
    details: ["Two artisan sourdough loaves", "Signature spreads", "Ready to share", "Perfect for hosts & families"],
  },
  {
    name: "Olive Pairing Collection",
    image: olivePairingGiftBox,
    alt: "Wooden Brooklyn Sourdough gift box with two loaves, olive oil, savory spreads and tasting glasses",
    details: ["Two artisan loaves", "Premium olive oil", "Two savory spreads", "Elegant wooden presentation"],
  },
  {
    name: "Crystal Arak Collection",
    image: crystalArakGiftBox,
    alt: "Crystal Arak wooden gift box with two sourdough loaves, arak, savory spreads and tasting glasses",
    details: ["Two artisan loaves", "Crystal Arak bottle", "Two savory spreads", "Tasting glasses included"],
  },
];

function GiftIntroSection() {
  const ref = useReveal<HTMLDivElement>();
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry) setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  const features = [
    "Fresh artisan sourdough",
    "Handcrafted homemade dips",
    "Beautifully packaged and ready to serve or gift",
  ];

  return (
    <div ref={ref} className="relative mt-14 overflow-hidden">
      {/* Background image with slow zoom-out */}
      <img
        src={giftBoxHeroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: inView ? "scale(1)" : "scale(1.05)",
          transition: "transform 2.8s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      />
      {/* Brand-green overlays for a cohesive site palette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "rgba(84, 114, 75, 0.78)" }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(84,114,75,0.55) 0%, rgba(84,114,75,0.25) 38%, rgba(84,114,75,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-7 pt-16 pb-4 text-left">
        <span
          data-reveal
          className="text-[11px] font-semibold uppercase tracking-[0.32em]"
          style={{ color: "rgba(255,249,242,0.85)" }}
        >
          Ready to Share
        </span>

        <h3
          data-reveal
          className="mt-4 font-display leading-[1.06]"
          style={{ fontSize: "clamp(40px, 11vw, 64px)" }}
        >
          <span style={{ color: CREAM }}>A Perfect Way</span>
          <br />
          <span style={{ color: "#A6C695" }}>to Share</span>
        </h3>

        <p
          data-reveal
          className="mt-6 w-full max-w-[520px] text-[15px] leading-[1.65]"
          style={{ color: "rgba(255,249,242,0.86)" }}
        >
          Share the warmth of Brooklyn Sourdough with our thoughtfully curated gift boxes. Each box combines freshly baked artisan sourdough with handcrafted homemade dips, creating a beautifully packaged experience that's perfect for hosting, celebrating, or gifting.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          {features.map((feature) => (
            <div key={feature} data-reveal className="flex items-center gap-3.5">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(166,198,149,0.22)", border: "1px solid rgba(166,198,149,0.5)" }}
              >
                <Check strokeWidth={2.5} className="h-3.5 w-3.5" style={{ color: "#A6C695" }} />
              </span>
              <span className="text-[14.5px] font-medium" style={{ color: "rgba(255,249,242,0.92)" }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gift box slider — same section, order button under each box */}
      <div className="relative z-10 pt-10 pb-14">
        <div data-reveal className="px-7">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "rgba(255,249,242,0.75)" }}>
            Ready-to-share bakery sets
          </span>
          <h4 className="mt-1 font-display text-[34px] leading-none" style={{ color: CREAM }}>
            Gift Boxes
          </h4>
        </div>
        <div data-reveal className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 pb-2 scrollbar-none">
          {giftBoxCollection.map((box) => (
            <article key={box.name} className="group flex w-[84%] shrink-0 snap-center flex-col text-left">
              <div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
                style={{ boxShadow: "0 20px 44px -18px rgba(0,0,0,0.55)", border: "1px solid rgba(255,249,242,0.18)" }}
              >
                <img
                  src={box.image}
                  alt={box.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h5 className="mt-4 text-balance font-display text-[22px] leading-tight" style={{ color: CREAM }}>
                {box.name}
              </h5>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${box.name} details`}>
                {box.details.map((detail) => (
                  <li key={detail} className="rounded-full border px-2.5 py-1 text-[11px] font-medium leading-[1.3]" style={{ borderColor: "rgba(255,249,242,0.28)", color: CREAM, backgroundColor: "rgba(255,249,242,0.1)" }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="flex min-h-[320px] w-[84%] shrink-0 snap-center items-center justify-center rounded-3xl border text-center" style={{ borderColor: "rgba(255,249,242,0.22)", backgroundColor: "rgba(255,249,242,0.08)" }}>
            <a href={TOAST_URL} target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-3 text-[15px] font-semibold transition-transform hover:scale-[1.04]" style={{ backgroundColor: CREAM, color: BRAND }}>
              See More
            </a>
          </article>
        </div>
        <p className="mt-4 px-7 text-center text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(255,249,242,0.62)" }}>Swipe to explore</p>
      </div>
    </div>
  );
}

function CraftStatsSection() {
  const stats = [
    { value: "17yrs", label: "Of Craft" },
    { value: "2", label: "Locations" },
    { value: "Kosher", label: "Certified" },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-12 animate-fade-up" style={{ backgroundColor: BRAND, color: CREAM }}>
      <div className="absolute inset-y-0 left-0 w-20 opacity-25" style={{ background: "linear-gradient(90deg, rgba(255,249,242,0.2), transparent)" }} />
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-5">
          <div className="w-[42%] max-w-[160px]">
            <img
              src={craftBrooklynSeal}
              alt="Brooklyn Sourdough seal"
              className="block h-auto w-full object-contain opacity-100"
              style={{ filter: "contrast(1.12) brightness(1.05)" }}
            />
          </div>
          <div className="w-[42%] max-w-[170px]">
            <img
              src={craftKosherSeals}
              alt="Kosher certification seals"
              className="block h-auto w-full object-contain opacity-100"
              style={{ filter: "contrast(1.14) brightness(1.05)" }}
            />
          </div>
        </div>

        <div className="my-7 h-px w-full bg-white/30" />

        <div className="grid grid-cols-3 gap-3 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <div className="font-display leading-none" style={{ color: CREAM, fontSize: stat.value === "Kosher" ? "clamp(26px, 8vw, 36px)" : "clamp(34px, 10vw, 48px)" }}>
                {stat.value}
              </div>
              <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] opacity-75">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sourdoughCollection = [
  {
    name: "Braided Sourdough Challah",
    image: braidedSourdoughChallah,
    alt: "Large braided sourdough challah loaves coated with sesame seeds",
    details: ["60–65% hydration", "Thin, shiny crust", "Soft, fluffy crumb", "Mild tang · buttery notes", "Best for sandwiches, French toast & breakfast", "8–16 hour fermentation"],
  },
  {
    name: "Classic Country Sourdough Boule",
    image: classicCountryBoule,
    alt: "Round classic country sourdough boule with a large score on top",
    details: ["70–80% hydration", "Thick, caramelized crust", "Open, airy crumb", "Balanced sour · nutty & wheaty", "Bread flour, water, salt & starter", "Perfect for toast, soup & cheese boards"],
  },
  {
    name: "Seeded Sourdough Boule",
    image: seededSourdoughBoule,
    alt: "Round sourdough boule heavily coated in black and white sesame seeds",
    details: ["Black & white sesame, flax, poppy & sunflower", "Deeply nutty, toasted flavor", "Extra-crunchy crust", "Moist, chewy crumb", "Best with avocado, eggs, cream cheese or smoked salmon"],
  },
];

function ProductRail() {
  return (
    <div data-reveal className="mt-10">
      <div className="px-6 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70" style={{ color: BRAND }}>Slow-fermented classics</span>
        <h3 className="mt-1 font-display text-[34px] leading-none" style={{ color: BRAND }}>Sourdough</h3>
      </div>
      <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 scrollbar-none">
        {sourdoughCollection.map((bread) => (
          <article key={bread.name} className="group flex w-[88%] shrink-0 snap-center flex-col text-left">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white card-lift" style={{ boxShadow: "0 18px 40px -16px rgba(0,91,79,0.35)" }}>
              <img src={bread.image} alt={bread.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h4 className="mt-4 text-balance font-display text-[23px] leading-[1.05]" style={{ color: BRAND }}>{bread.name}</h4>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${bread.name} details`}>
              {bread.details.map((detail) => (
                <li key={detail} className="rounded-full border px-2.5 py-1 text-[11px] font-medium leading-[1.3]" style={{ borderColor: "rgba(84,114,75,0.2)", color: BRAND, backgroundColor: "rgba(255,255,255,0.55)" }}>
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <article className="flex min-h-[320px] w-[88%] shrink-0 snap-center items-center justify-center rounded-3xl border text-center" style={{ borderColor: "rgba(84,114,75,0.2)", backgroundColor: "rgba(255,255,255,0.55)" }}>
          <a href={TOAST_URL} target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-3 text-[15px] font-semibold transition-transform hover:scale-[1.04]" style={{ backgroundColor: BRAND, color: CREAM }}>
            See More
          </a>
        </article>
      </div>
      <p className="mt-3 px-6 text-center text-[10px] font-semibold uppercase tracking-[0.18em] opacity-60" style={{ color: BRAND }}>Swipe to explore</p>
    </div>
  );
}

function LocationModal({ onClose }: { onClose: () => void }) {
  const locations = [
    { name: "Williamsburg", icon: locationWilliamsburg, status: "available" as const, href: TOAST_URL },
    { name: "Boro Park", icon: locationBoroPark, status: "available" as const, href: null },
    { name: "Monsey", icon: locationMonsey, status: "soon" as const, href: null },
    { name: "Lakewood", icon: locationLakewood, status: "soon" as const, href: null },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 animate-fade-up" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} onClick={onClose}>
      <div className="relative w-full max-w-[300px] rounded-[22px] p-4 pt-5" style={{ backgroundColor: CREAM }} onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" onClick={onClose} className="absolute top-3 right-3 h-7 w-7 rounded-full border flex items-center justify-center hover:bg-black/5" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
          <X className="h-3 w-3" />
        </button>

        <div className="flex flex-col items-center">
          <div className="relative h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F3EAD3" }}>
            <MapPin className="h-5 w-5" style={{ color: BRAND }} fill={BRAND} />
            <span className="absolute -bottom-0.5 h-1.5 w-4 rounded-full" style={{ backgroundColor: YELLOW }} />
          </div>
          <h3 className="mt-2 font-display text-[18px] leading-tight text-center" style={{ color: BRAND }}>Choose Your Location</h3>
          <p className="mt-1 text-[10px] text-center opacity-70" style={{ color: BRAND }}>Select your nearest Brooklyn Sourdough store.</p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {locations.map((loc) => {
            const isAvail = loc.status === "available";
            const clickable = !!loc.href;
            const Row = (
              <div
                className="flex items-center gap-3 rounded-xl px-3 py-2 border transition-all"
                style={{
                  borderColor: isAvail ? BRAND : "rgba(0,0,0,0.08)",
                  borderWidth: isAvail ? 1.5 : 1,
                  backgroundColor: isAvail ? "#FBF5E8" : "#F2EFE7",
                  opacity: isAvail ? 1 : 0.75,
                  cursor: clickable ? "pointer" : "default",
                }}
              >
                <div className="h-14 w-14 shrink-0">
                  <img src={loc.icon} alt={loc.name} className="block h-full w-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-[13px] leading-tight" style={{ color: isAvail ? BRAND : "#8a8a83" }}>{loc.name}</div>
                  <div className="mt-0.5 flex items-center gap-1 text-[9px]" style={{ color: isAvail ? "#3a7a4a" : "#9a988e" }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isAvail ? "#4CAF50" : "#B4B1A6" }} />
                    {isAvail ? "Available" : "Coming Soon"}
                  </div>
                </div>
                {isAvail ? (
                  <ChevronRight className="h-4 w-4" style={{ color: BRAND }} />
                ) : (
                  <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold" style={{ backgroundColor: "#F9D48A", color: "#7a5a1a" }}>
                    Soon
                  </span>
                )}
              </div>
            );
            return clickable ? (
              <a key={loc.name} href={loc.href!} target="_blank" rel="noopener noreferrer" onClick={onClose}>{Row}</a>
            ) : (
              <div key={loc.name}>{Row}</div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[9px]" style={{ color: BRAND }}>
          <ShieldCheck className="h-3 w-3" />
          <span className="opacity-80">Freshly baked. Locally delivered.</span>
        </div>
      </div>
    </div>
  );
}

function SideMenu({ onClose }: { onClose: () => void }) {
  const items = [
    { label: "Menu", href: "#menu", external: false },
    { label: "Reviews", href: "#reviews", external: false },
    { label: "Gallery", href: "#gallery", external: false },
    { label: "About us", href: "#about", external: false },
    { label: "Location", href: "https://maps.app.goo.gl/r3a3Hvo14rj54bma8", external: true },
  ];
  return (
    <div className="fixed inset-0 z-[100]" onClick={onClose}>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
      <aside
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 left-0 h-full w-1/2 min-w-[240px] max-w-[380px] flex flex-col p-6 animate-in slide-in-from-left duration-300"
        style={{ backgroundColor: BRAND, color: CREAM }}
      >
        <button aria-label="Close menu" onClick={onClose} className="self-end h-9 w-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20">
          <X className="h-5 w-5" />
        </button>
        <nav className="mt-8 flex flex-col gap-5">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.external ? "_blank" : undefined}
              rel={it.external ? "noopener noreferrer" : undefined}
              onClick={onClose}
              className="font-display text-[24px] leading-tight hover:opacity-80 transition-opacity"
            >
              {it.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex items-center gap-3">
          <a href="https://wa.me/17182127323" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.887-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/brooklyn.sourdough" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </aside>
    </div>
  );
}

function ReviewsSection() {
  const reviews = [
    { name: "Sarah K.", text: "The everything bagel sandwich is unreal — perfect crust, fresh fillings, every single time.", avatar: "https://i.pravatar.cc/120?img=47" },
    { name: "Marcus T.", text: "Best sourdough in Brooklyn. I drive across the borough just for these.", avatar: "https://i.pravatar.cc/120?img=12" },
    { name: "Aisha R.", text: "Their croissant sandwich changed my mornings. Flaky, fresh, full of flavor.", avatar: "https://i.pravatar.cc/120?img=32" },
    { name: "Daniel P.", text: "Real bread, real ingredients. You can taste the slow ferment in every bite.", avatar: "https://i.pravatar.cc/120?img=15" },
    { name: "Rivka L.", text: "The dips are addictive — I keep coming back for more every weekend.", avatar: "https://i.pravatar.cc/120?img=45" },
    { name: "Jonah B.", text: "Crackling crust, tender crumb. This is what real sourdough tastes like.", avatar: "https://i.pravatar.cc/120?img=13" },
    { name: "Elena M.", text: "Gift boxes were a hit at our office — everyone asked where they were from.", avatar: "https://i.pravatar.cc/120?img=36" },
    { name: "Tomer S.", text: "Fresh, kosher, and consistently amazing. My family's new favorite bakery.", avatar: "https://i.pravatar.cc/120?img=8" },
    { name: "Priya N.", text: "That tangy sourdough flavor is next level. Worth every bite.", avatar: "https://i.pravatar.cc/120?img=48" },
    { name: "Chaim W.", text: "Warm loaves, kind staff, and the best challah-adjacent sourdough in town.", avatar: "https://i.pravatar.cc/120?img=68" },
  ];
  const dots = [
    { top: "12%", left: "8%", bg: "#FF8AA0", ring: BRAND },
    { top: "20%", left: "92%", bg: YELLOW, ring: "#1a1a1a" },
    { top: "55%", left: "5%", bg: "#FF8AA0", ring: BRAND },
    { top: "78%", left: "12%", bg: "transparent", ring: BRAND },
    { top: "68%", left: "88%", bg: "#fff", ring: "#1a1a1a" },
    { top: "40%", left: "85%", bg: "#9bd1cf", ring: BRAND },
  ];
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let paused = false;
    let last = performance.now();
    let acc = 0;
    const SPEED = 0.8; // px per second — slow enough to read each card
    const step = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused && el) {
        acc += (SPEED * dt) / 1000;
        if (acc >= 1) {
          const px = Math.floor(acc);
          acc -= px;
          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
            el.scrollTo({ left: 0, behavior: "auto" });
          } else {
            el.scrollBy({ left: px, behavior: "auto" });
          }
        }
      }
      raf = window.requestAnimationFrame(step);
    };
    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; last = performance.now(); };
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
  return (
    <section id="reviews" className="relative px-6 pt-14 pb-14 overflow-hidden animate-fade-up" style={{ backgroundColor: BRAND }}>
      {dots.map((d, i) => (
        <span key={i} className="absolute rounded-full" style={{ top: d.top, left: d.left, width: 12, height: 12, backgroundColor: d.bg, border: `2px solid ${d.ring}` }} />
      ))}
      <h2 className="font-display text-[38px] leading-[1.05] text-center" style={{ color: CREAM }}>What Brooklyn Says</h2>
      <div className="mt-8 -mx-6 overflow-hidden pb-3">
        <div className="flex w-max gap-4 px-6 animate-reviews-roll will-change-transform hover:[animation-play-state:paused]">
        {rollingReviews.map((r, index) => (
          <article key={`${r.name}-${index}`} className="shrink-0 w-[300px] max-w-[78vw] rounded-[22px] bg-white p-5 card-lift" style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#F6C84A" }} />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <img src={r.avatar} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-display text-[17px]" style={{ color: BRAND }}>{r.name}</span>
            </div>
            <p className="mt-3 text-[14px] leading-snug opacity-90" style={{ color: BRAND }}>{r.text}</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

function DipsSection() {
  return (
    <section id="dips" className="relative px-6 pt-16 pb-16 text-center animate-fade-up" style={{ backgroundColor: CREAM }}>
      <span className="inline-block text-[12px] font-semibold tracking-[0.2em] uppercase opacity-70" style={{ color: BRAND }}>Signature Jars</span>
      <h2 className="mt-2 font-display text-[44px] leading-[1] tracking-tight" style={{ color: BRAND }}>Our Sourdough Dips</h2>
      <div className="mt-8 relative">
        <div className="absolute inset-x-4 top-6 bottom-6 rounded-[28px]" style={{ background: `linear-gradient(180deg, ${BRAND}15, transparent)` }} />
        <img src={sourdoughDip} alt="Brooklyn Sourdough Dips" className="relative w-full h-auto rounded-[28px] object-cover" style={{ boxShadow: "0 20px 40px -18px rgba(0,0,0,0.35)" }} />
      </div>
      <p className="mt-8 text-[15px] leading-[1.6] max-w-[380px] mx-auto" style={{ color: BRAND }}>
        Traditional homemade dips crafted from scratch with fresh, wholesome ingredients. Discover the rich, tangy flavor of our signature sourdough dip — a delicious depth of flavor and the perfect balance to any dish. Elevate your sandwich or snack with this unique taste.
      </p>
      <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: BRAND }}>
        <span className="h-px w-8" style={{ backgroundColor: BRAND, opacity: 0.4 }} />
        Delicious Depth of Flavor
        <span className="h-px w-8" style={{ backgroundColor: BRAND, opacity: 0.4 }} />
      </div>
    </section>
  );
}

function DeliverySection() {
  return (
    <section className="relative px-6 pt-16 pb-28 text-center overflow-hidden animate-fade-up">
      <h2 className="font-display text-[44px] leading-[1.05]" style={{ color: BRAND }}>Available on<br />Platforms</h2>
      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="w-full max-w-[320px] rounded-2xl bg-white py-5 px-6 flex items-center justify-center gap-3 card-lift" style={{ boxShadow: "0 12px 28px -16px rgba(0,0,0,0.25)" }}>
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#EB1700" aria-hidden>
            <path d="M23.07 8.69a4.9 4.9 0 0 0-4.36-2.69H1.4a.4.4 0 0 0-.28.68l3.2 3.2c.27.27.63.42 1.01.42h12.93c.85 0 1.55.7 1.55 1.55s-.7 1.55-1.55 1.55H8.84a.4.4 0 0 0-.28.68l3.2 3.2c.27.27.63.42 1.01.42h5.94c4.71 0 7.99-4.78 4.36-9.01Z"/>
          </svg>
          <span className="font-display text-[26px] tracking-tight" style={{ color: "#EB1700" }}>DoorDash</span>
        </div>
        <div className="w-full max-w-[320px] rounded-2xl bg-white py-5 px-6 flex items-center justify-center gap-2 card-lift" style={{ boxShadow: "0 12px 28px -16px rgba(0,0,0,0.25)" }}>
          <span className="font-display text-[26px] tracking-tight" style={{ color: "#0a0a0a" }}>Uber</span>
          <span className="font-display text-[26px] tracking-tight" style={{ color: "#06C167" }}>Eats</span>
        </div>
      </div>
      <svg viewBox="0 0 430 60" className="absolute bottom-0 left-0 w-full block" preserveAspectRatio="none">
        <path d="M0,30 C120,60 300,0 430,30 L430,60 L0,60 Z" fill={BRAND} />
      </svg>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 pt-12 pb-10" style={{ backgroundColor: BRAND, color: CREAM }}>
      <div className="flex flex-col items-center text-center">
        <img src={crcKashrusSeal} alt="CRC Kashrus certification seal" className="h-auto w-full max-w-[280px] object-contain" />
        <p className="mt-5 text-[14px] leading-relaxed opacity-90 max-w-[320px]">
          Our products are prepared under kosher certification, giving every sourdough loaf, dip, and gift box the trusted standards our customers expect.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 text-[14.5px]">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <div className="font-display text-[17px] mb-0.5">Our Location</div>
            <a href="https://maps.app.goo.gl/r3a3Hvo14rj54bma8" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:underline">5 Heyward St, Brooklyn, NY 11249</a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <div className="font-display text-[17px] mb-0.5">Store Hours</div>
            <div className="opacity-90">9:00 AM — 6:00 PM</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <div className="font-display text-[17px] mb-0.5">Contact Us</div>
            <a href="tel:+17182127323" className="opacity-90 hover:underline">718-212-7323</a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-4 justify-center">
        <a href="https://wa.me/17182127323" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.887-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/brooklyn.sourdough" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition">
          <Instagram className="h-5 w-5" />
        </a>
      </div>
      <div className="mt-10 pt-6 border-t border-white/15 text-center">
        <p className="font-display text-[18px] leading-tight">Brooklyn Sourdough Bakery</p>
        <p className="mt-1 text-[12px] opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/17182127323"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-[max(1rem,calc((100vw-480px)/2+1rem))] bottom-5 z-50 block aspect-[3.58/1] w-[min(78vw,350px)] overflow-hidden rounded-full animate-whatsapp-float shadow-[0_6px_20px_rgba(0,0,0,0.22)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2016%2C%202026%2C%2002_16_29%20AM-wcGIZTbUdUMEzmrANr4T5tUZCDMkMc.png"
        alt="Contact us on WhatsApp"
        className="absolute max-w-none"
        style={{ width: "132.5%", height: "auto", left: "-16.25%", top: "-103.5%" }}
      />
    </a>
  );
}
