"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoPromo() {
  const outerRef  = useRef<HTMLDivElement>(null);
  const innerRef  = useRef<HTMLDivElement>(null);
  const labelRef  = useRef<HTMLDivElement>(null);
  const lineRef   = useRef<HTMLDivElement>(null);
  const line2Ref  = useRef<HTMLDivElement>(null);
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const locRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef    = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const ctx = gsap.context(() => {

      // ── 1. label ──────────────────────────────────────────
      gsap.fromTo(labelRef.current,
        { x: -70, opacity: 0 },
        {
          x: 0, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "top top",
            end: "22% top",
            scrub: 1.4,
          },
        }
      );

      // ── 2. horizontal accent line ─────────────────────────
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "8% top",
            end: "28% top",
            scrub: 1,
          },
        }
      );

      // ── 3. main title ─────────────────────────────────────
      gsap.fromTo(titleRef.current,
        { x: -110, opacity: 0 },
        {
          x: 0, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "18% top",
            end: "52% top",
            scrub: 1.6,
          },
        }
      );

      // ── 4. second line (decorative) ───────────────────────
      gsap.fromTo(line2Ref.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "45% top",
            end: "62% top",
            scrub: 1,
          },
        }
      );

      // ── 5. location ───────────────────────────────────────
      gsap.fromTo(locRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "50% top",
            end: "70% top",
            scrub: 1.2,
          },
        }
      );

      // ── 6. CTA ────────────────────────────────────────────
      gsap.fromTo(ctaRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "62% top",
            end: "80% top",
            scrub: 1,
          },
        }
      );

    }, outer);

    return () => ctx.revert();
  }, []);

  return (
    /*
      outer div  — 280 vh tall — creates the scroll runway.
      inner div  — 100 vh, sticky top:0 — stays pinned while
                   the user scrolls through the runway above.
    */
    <div ref={outerRef} style={{ height: "280vh", position: "relative" }}>
      <div
        ref={innerRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
        className="bg-[#0a0a0a]"
      >
        {/* ── Video ─────────────────────────────────────── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/MimizIntroVideo_h264.mp4" type="video/mp4" />
        </video>

        {/* ── Overlays ──────────────────────────────────── */}

        {/* Base warm dark wash */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "rgba(8, 4, 0, 0.48)",
        }} />

        {/* Left-side gradient shelf — text lives here */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0.18) 62%, transparent 100%)",
        }} />

        {/* Top edge burn */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 22%)",
        }} />

        {/* Bottom edge burn */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 22%)",
        }} />

        {/* ── Text block — left aligned ──────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            paddingLeft: "clamp(32px, 8vw, 120px)",
            maxWidth: "58%",
          }}
        >
          {/* Label */}
          <div
            ref={labelRef}
            style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px", opacity: 0 }}
          >
            <div style={{ width: "36px", height: "1px", background: "#F05724" }} />
            <span style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "10px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}>
              Experience Mimiz
            </span>
          </div>

          {/* Accent line */}
          <div
            ref={lineRef}
            style={{
              width: "72px",
              height: "1.5px",
              background: "#F05724",
              marginBottom: "32px",
              opacity: 1,
            }}
          />

          {/* Main heading */}
          <h2
            ref={titleRef}
            className="font-display"
            style={{
              fontSize: "clamp(68px, 11.5vw, 152px)",
              fontWeight: 700,
              lineHeight: 0.88,
              color: "#ffffff",
              marginBottom: "36px",
              opacity: 0,
            }}
          >
            <span style={{ color: "#F05724" }}>MIMIZ</span>
            <br />
            CAFE
          </h2>

          {/* Second decorative line */}
          <div
            ref={line2Ref}
            style={{
              width: "120px",
              height: "1px",
              background: "rgba(255,255,255,0.2)",
              marginBottom: "22px",
            }}
          />

          {/* Location */}
          <p
            ref={locRef}
            style={{
              color: "rgba(255,255,255,0.42)",
              fontSize: "11px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              marginBottom: "36px",
              opacity: 0,
            }}
          >
            Birtamode · Jhapa · Nepal
          </p>

          {/* CTA */}
          <a
            ref={ctaRef}
            href="/menu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "rgba(255,255,255,0.7)",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              opacity: 0,
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              paddingBottom: "4px",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#F05724";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F05724";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)";
            }}
          >
            Explore Our Menu
            <span style={{ display: "inline-block", transition: "transform 0.3s" }}>→</span>
          </a>
        </div>

        {/* ── Corner brackets ───────────────────────────── */}
        <div style={{ position:"absolute", top:28, left:28, width:32, height:32, borderTop:"1px solid rgba(255,255,255,0.18)", borderLeft:"1px solid rgba(255,255,255,0.18)", zIndex:2, pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:28, right:28, width:32, height:32, borderTop:"1px solid rgba(255,255,255,0.18)", borderRight:"1px solid rgba(255,255,255,0.18)", zIndex:2, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:28, left:28, width:32, height:32, borderBottom:"1px solid rgba(255,255,255,0.18)", borderLeft:"1px solid rgba(255,255,255,0.18)", zIndex:2, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:28, right:28, width:32, height:32, borderBottom:"1px solid rgba(255,255,255,0.18)", borderRight:"1px solid rgba(255,255,255,0.18)", zIndex:2, pointerEvents:"none" }} />

        {/* ── Scroll hint (fades out as user scrolls) ───── */}
        <div style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 2,
          opacity: 0.4,
        }}>
          <span style={{ color:"white", fontSize:"9px", letterSpacing:"0.3em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:40, background:"linear-gradient(to bottom, white, transparent)" }} />
        </div>
      </div>
    </div>
  );
}
