"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
// ─── Sub-components ──────────────────────────────────────────────────────────

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`bg-white/65 backdrop-blur-xl border border-white/80
      shadow-[0_4px_24px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]
      ${className}`}
  >
    {children}
  </div>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const WindowDots = () => (
  <div className="flex gap-1 mb-1">
    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
  </div>
);

const GraphPath = ({ d }) => (
  <div className="h-8 w-full bg-gray-100 rounded mt-1 relative overflow-hidden">
    <svg
      className="absolute bottom-0 left-0 w-full h-full"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="graph-path"
        d={d}
        fill="none"
        stroke="#F40E00"
        strokeWidth="2"
        style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
      />
    </svg>
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE_STEPS = ["Idea", "Design", "Build", "Launch", "Investor Ready"];

const FUNDING_CARDS = [
  { title: "Funding Secured", sub: "Series A Ready" },
  { title: "Seed Round Closed", sub: "120% Oversubscribed" },
  { title: "Investor Updates", sub: "Automated Reporting" },
];

const TEAM_ICONS = [
  {
    label: "Engineering",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Product Design",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    label: "Go-to-Market",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

const PRODUCT_SCREENS = [
  { label: "Marketplace", graph: null },
  { label: "Mobility App", graph: "M0,35 Q25,5 50,25 T100,15" },
  { label: "Booking Platform", graph: "M0,25 Q30,35 60,15 T100,20" },
  { label: "SaaS Dashboard", graph: "M0,30 Q20,10 40,20 T100,5" },
  { label: "Consumer App", graph: null },
];

const PRODUCT_SCREENS_MOBILE = [
  { label: "Mobility App", graph: "M0,35 Q25,5 50,25 T100,15" },
  { label: "Booking Platform", graph: "M0,25 Q30,35 60,15 T100,20" },
  { label: "SaaS Dashboard", graph: "M0,30 Q20,10 40,20 T100,5" },
];

// Connection line paths (decorative dashed SVG lines)
const CONNECTION_PATHS = [
  "M 50% 50% Q 30% 50% 28% 25%",
  "M 50% 50% Q 30% 50% 28% 50%",
  "M 50% 50% Q 30% 50% 28% 75%",
  "M 50% 50% Q 70% 50% 72% 25%",
  "M 50% 50% Q 70% 50% 72% 50%",
  "M 50% 50% Q 70% 50% 72% 75%",
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;

    const initGsap = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ repeat: -1 });

        // ── 0.0–2.0: Timeline line draw ──
        tl.fromTo(
          ".lb-timeline-line-active",
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" },
          0,
        );
        tl.fromTo(
          ".lb-step-node",
          { scale: 0.8, borderColor: "#D1D5DB" },
          { scale: 1, borderColor: "#F40E00", duration: 0.4, stagger: 0.3 },
          0.2,
        );
        tl.fromTo(
          ".lb-step-label",
          { color: "#9CA3AF" },
          { color: "#111827", duration: 0.4, stagger: 0.3 },
          0.2,
        );

        // ── 1.0–1.8: Dashboard reveals FIRST ──
        tl.fromTo(
          ".lb-dashboard",
          { opacity: 0, y: 24, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" },
          1.0,
        );

        // ── 1.8–3.0: Funding cards slide in AFTER dashboard ──
        tl.fromTo(
          ".lb-funding-card",
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" },
          1.8,
        );

        // ── 2.0–3.5: Team panel slides in AFTER dashboard ──
        tl.fromTo(
          ".lb-team-panel",
          { opacity: 0, x: 24 },
          { opacity: 1, x: 0, duration: 0.8 },
          2.0,
        );
        tl.fromTo(
          ".lb-team-icon",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.2 },
          2.2,
        );
        tl.fromTo(
          ".lb-connection-line",
          { strokeDashoffset: 300, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 0.4,
            duration: 1,
            ease: "power2.inOut",
          },
          2.5,
        );

        // ── 3.0–4.5: Product screens ──
        tl.fromTo(
          ".lb-product-screen",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          3.0,
        );
        tl.fromTo(
          ".graph-path",
          { strokeDashoffset: 300 },
          { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
          3.5,
        );

        // ── 6.5–8.0: Fade out / reset ──
        tl.to(".lb-step-node", { borderColor: "#D1D5DB", duration: 0.5 }, 6.5);
        tl.to(".lb-step-label", { color: "#9CA3AF", duration: 0.5 }, 6.5);
        tl.to(
          ".lb-timeline-line-active",
          { strokeDashoffset: 1000, duration: 1 },
          6.5,
        );
        tl.to(
          ".lb-funding-card, .lb-team-panel, .lb-product-screen, .lb-dashboard",
          {
            opacity: 0,
            y: -10,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.in",
          },
          6.8,
        );
        tl.to(".lb-connection-line", { opacity: 0, duration: 0.8 }, 6.8);

        // ── Ambient loops (independent) ──
        gsap.to(".lb-dashboard", {
          y: -3,
          duration: 5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
        gsap.to(".lb-rocket", {
          y: -6,
          duration: 2.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
        gsap.to(".lb-particle", {
          y: 15,
          opacity: 0,
          duration: 1.2,
          stagger: 0.4,
          repeat: -1,
          ease: "power1.out",
        });

        // Background floating dots
        gsap.utils.toArray(".lb-dot").forEach((dot, i) => {
          gsap.to(dot, {
            x: `random(-50, 50)`,
            y: `random(-50, 50)`,
            duration: `random(8, 15)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 2,
          });
        });

        // Team icon micro-float
        gsap.utils.toArray(".lb-team-icon").forEach((icon, i) => {
          gsap.to(icon, {
            y: -3,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: i * 0.5,
          });
        });

        // Product screen float
        gsap.utils.toArray(".lb-product-screen").forEach((screen, i) => {
          gsap.to(screen, {
            y: -4,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
        });
      }, containerRef);
    };

    initGsap();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen pt-20 pb-28 flex items-center justify-center overflow-hidden bg-[#fff]"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* ── Ambient red glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(244,14,0,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ── Floating dots ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {[
          "w-1.5 h-1.5 bg-red-500/20",
          "w-1 h-1 bg-red-500/30",
          "w-2 h-2 bg-red-500/10",
          "w-1 h-1 bg-red-500/20",
          "w-1.5 h-1.5 bg-red-500/15",
        ].map((cls, i) => (
          <div
            key={i}
            className={`lb-dot absolute rounded-full ${cls}`}
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 18}%` }}
          />
        ))}
      </div>

      {/* ── keyframe injection ── */}
      <style>{`
        @keyframes lbGridMove {
          0%   { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
      `}</style>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col items-center">
        {/* 1. Timeline */}
        <div className="relative flex items-center justify-center gap-8 mb-12 w-full max-w-3xl">
          <svg
            className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 pointer-events-none"
            style={{ overflow: "visible" }}
            aria-hidden="true"
          >
            <line
              x1="5%"
              y1="50%"
              x2="95%"
              y2="50%"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <line
              className="lb-timeline-line-active"
              x1="5%"
              y1="50%"
              x2="95%"
              y2="50%"
              stroke="#F40E00"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>
          {TIMELINE_STEPS.map((step) => (
            <div
              key={step}
              className="flex flex-col items-center gap-3 relative z-10"
            >
              <div className="lb-step-node w-4 h-4 rounded-full bg-white border-2 border-gray-300 shadow-sm transition-colors duration-300" />
              <span className="lb-step-label text-[8px] md:text-[9px] lg:text-xs font-semibold text-gray-400 tracking-widest uppercase transition-colors duration-300">
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* 2-4. Middle section */}
        <div className="relative w-full flex items-center justify-between mb-8">
          {/* Funding Cards */}
          <div className="lb-funding-cards hidden lg:flex flex-col gap-4 w-64">
            {FUNDING_CARDS.map(({ title, sub }) => (
              <GlassCard
                key={title}
                className="lb-funding-card rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#F40E00] flex-shrink-0">
                  <CheckIcon />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">{title}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Dashboard + Rocket */}
          <div className="relative flex flex-col items-center mx-auto">
            <Image
              src="/dashboard-image.png"
              alt="Launch Dashboard"
              width={580}
              height={420}
              className="lb-dashboard max-w-xl w-full h-auto rounded-xl mx-auto"
              style={{
                willChange: "transform, opacity",
              }}
            />
          </div>

          {/* Team Panel */}
          <div className="lb-team-panel hidden lg:flex flex-col gap-4 w-64">
            {TEAM_ICONS.map(({ label, svg }) => (
              <GlassCard
                key={label}
                className="lb-team-icon rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-[#F40E00] flex-shrink-0">
                  {svg}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {label}
                </span>
              </GlassCard>
            ))}
          </div>

          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: -1, overflow: "visible" }}
            aria-hidden="true"
          >
            {CONNECTION_PATHS.map((d, i) => (
              <path
                key={i}
                className="lb-connection-line"
                d={d}
                fill="none"
                stroke="#F40E00"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0"
                style={{ strokeDashoffset: 300 }}
              />
            ))}
          </svg>
        </div>

        {/* 5. Product Screens */}
        <div className="hidden lg:flex gap-4 justify-center w-full">
          {PRODUCT_SCREENS.map(({ label, graph }) => (
            <GlassCard
              key={label}
              className={`lb-product-screen rounded-xl p-3 flex flex-col gap-2 ${label === "SaaS Dashboard" || label === "Booking Platform" ? "w-32" : "w-28"}`}
            >
              <WindowDots />
              <div className="h-1 w-3/4 bg-gray-200 rounded" />
              <div className="h-1 w-1/2 bg-gray-200 rounded" />
              {label === "SaaS Dashboard" && (
                <div className="flex gap-2 mt-1">
                  <div className="h-6 w-1/2 bg-gray-100 rounded" />
                  <div className="h-6 w-1/2 bg-gray-100 rounded" />
                </div>
              )}
              {graph && <GraphPath d={graph} />}
              <div className="mt-auto pt-2">
                <div className="text-[10px] font-semibold text-gray-500 text-center">
                  {label}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="lg:hidden flex gap-4 justify-center w-full">
          {PRODUCT_SCREENS_MOBILE.map(({ label, graph }) => (
            <GlassCard
              key={label}
              className={`lb-product-screen rounded-xl p-3 flex flex-col gap-2 ${label === "SaaS Dashboard" || label === "Booking Platform" ? "w-32" : "w-28"}`}
            >
              <WindowDots />
              <div className="h-1 w-3/4 bg-gray-200 rounded" />
              <div className="h-1 w-1/2 bg-gray-200 rounded" />
              {label === "SaaS Dashboard" && (
                <div className="flex gap-2 mt-1">
                  <div className="h-6 w-1/2 bg-gray-100 rounded" />
                  <div className="h-6 w-1/2 bg-gray-100 rounded" />
                </div>
              )}
              {graph && <GraphPath d={graph} />}
              <div className="mt-auto pt-2">
                <div className="text-[10px] font-semibold text-gray-500 text-center">
                  {label}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
