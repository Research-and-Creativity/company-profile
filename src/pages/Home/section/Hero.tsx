"use client";

import { m, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Button from "../../../components/ui/Button";
import Particle from "../../../components/ui/Particle";
import GridLines from "../../../components/ui/GridLine";
import { PARTICLES } from "../../../constants/praticle";
import { Helmet } from "react-helmet-async";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const noAnim = isMobile || !!prefersReduced;

  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const mouseNorm = useRef({ x: 0, y: 0 });
  const smoothed = useRef({ x: 0, y: 0 });
  const fast = useRef({ x: 0, y: 0 });
  const isAnimating = useRef(false);
  const animateOrbsRef = useRef<() => void>(() => { });

  const animateOrbs = useCallback(() => {
    const lerpFactor = 0.06;
    const fastFactor = 0.12;

    smoothed.current.x += (mouseNorm.current.x - smoothed.current.x) * lerpFactor;
    smoothed.current.y += (mouseNorm.current.y - smoothed.current.y) * lerpFactor;
    fast.current.x += (mouseNorm.current.x - fast.current.x) * fastFactor;
    fast.current.y += (mouseNorm.current.y - fast.current.y) * fastFactor;

    const s = smoothed.current;
    const f = fast.current;

    // Orb 1
    orbRefs.current[0]?.style.setProperty(
      "transform",
      `translate(${s.x * 120 - 60}px, ${s.y * 80 - 40}px)`
    );
    // Orb 2
    orbRefs.current[1]?.style.setProperty(
      "transform",
      `translate(${s.x * -80 + 40}px, ${s.y * -60 + 30}px)`
    );
    // Orb 3
    orbRefs.current[2]?.style.setProperty(
      "transform",
      `translate(${s.x * 160 - 80}px, ${s.y * 120 - 60}px)`
    );

    // Title parallax
    titleRefs.current[0]?.style.setProperty(
      "transform",
      `translate(${f.x * 12 - 6}px, ${f.y * 10 - 5}px)`
    );
    titleRefs.current[1]?.style.setProperty(
      "transform",
      `translate(${f.x * 28 - 14}px, ${f.y * 20 - 10}px)`
    );

    // jika delta cukup kecil = berhenti animasinya
    const dx = Math.abs(mouseNorm.current.x - smoothed.current.x);
    const dy = Math.abs(mouseNorm.current.y - smoothed.current.y);
    if (dx > 0.001 || dy > 0.001) {
      rafRef.current = requestAnimationFrame(animateOrbsRef.current);
    } else {
      isAnimating.current = false;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el || noAnim) return;
    const rect = el.getBoundingClientRect();
    mouseNorm.current = {
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    };
    if (!isAnimating.current) {
      isAnimating.current = true;
      animateOrbs();
    }
  }, [noAnim, animateOrbs]);

  useEffect(() => {
    animateOrbsRef.current = animateOrbs;
    if (noAnim) return;
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      isAnimating.current = false;
    };
  }, [handleMouseMove, noAnim, animateOrbs]);

  const visibleParticles = noAnim
    ? []
    : PARTICLES.slice(0, 12);

  return (
    <>
      <Helmet>
        <title>Zetech | Elevating Innovations - Kabinet Zenith HMSE</title>
        <meta name="description" content="Selamat datang di Zetech (Zetra Tech), platform inovasi digital resmi HMSE Telkom University Purwokerto di bawah naungan Kabinet Zenith." />
        <link rel="canonical" href="https://zetech.vercel.app/" />
      </Helmet>

      <section
        ref={containerRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#000d1f" }}
      >
        <GridLines />

        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, #000d1f 100%)" }}
        />

        <div
          ref={el => { orbRefs.current[0] = el; }}
          className="absolute pointer-events-none z-10"
          style={{ top: "50vh", left: "50vw" }}
        >
          <div style={{
            width: isMobile ? 380 : 700,
            height: isMobile ? 380 : 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(33,138,187,0.35) 0%, transparent 70%)",
            filter: `blur(${isMobile ? 40 : 80}px)`,
            transform: "translate(-50%, -50%)",
            willChange: noAnim ? "auto" : "transform",
            aspectRatio: "1 / 1",
            pointerEvents: "none",
          }} />
        </div>

        <div
          ref={el => { orbRefs.current[1] = el; }}
          className="absolute bottom-0 left-0 pointer-events-none z-10"
          style={{ willChange: noAnim ? "auto" : "transform" }}
        >
          <div style={{
            width: isMobile ? 280 : 550,
            height: isMobile ? 280 : 550,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,80,160,0.4) 0%, transparent 70%)",
            filter: `blur(${isMobile ? 50 : 100}px)`,
            aspectRatio: "1 / 1",
            pointerEvents: "none",
          }} />
        </div>

        <div
          ref={el => { orbRefs.current[2] = el; }}
          className="absolute top-0 right-0 pointer-events-none z-10"
          style={{ willChange: noAnim ? "auto" : "transform" }}
        >
          <div style={{
            width: isMobile ? 280 : 600,
            height: isMobile ? 280 : 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(50,180,220,0.25) 0%, transparent 70%)",
            filter: `blur(${isMobile ? 60 : 120}px)`,
            opacity: 0.2,
            aspectRatio: "1 / 1",
            pointerEvents: "none",
          }} />
        </div>

        {visibleParticles.map((p, idx) => (
          <Particle key={idx} {...p} />
        ))}

        {!noAnim && (
          <>
            <div
              className="absolute pointer-events-none z-10"
              style={{
                width: 500, height: 500, borderRadius: "50%",
                border: "1px solid rgba(33,138,187,0.12)",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "heroPulse1 6s ease-in-out infinite",
              }}
            />
            <div
              className="absolute pointer-events-none z-10"
              style={{
                width: 750, height: 750, borderRadius: "50%",
                border: "1px solid rgba(33,138,187,0.06)",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "heroPulse2 9s ease-in-out infinite 1.5s",
              }}
            />
          </>
        )}

        <div className="container mx-auto px-6 text-center relative z-20 flex flex-col items-center">

          <div
            ref={el => { titleRefs.current[0] = el; }}
            style={{ willChange: noAnim ? "auto" : "transform" }}
          >
            <div style={{ overflow: "hidden" }}>
              {["Building", "Advanced"].map((word, i) => (
                <m.span
                  key={word}
                  initial={isMobile ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.45 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "inline-block",
                    marginRight: "0.25em",
                    fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: "white",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {word}
                </m.span>
              ))}
            </div>
          </div>

          <div
            ref={el => { titleRefs.current[1] = el; }}
            className="mb-10"
            style={{ willChange: noAnim ? "auto" : "transform" }}
          >
            <div style={{ overflow: "hidden" }}>
              {["Digital", "Technology"].map((word, i) => (
                <m.span
                  key={word}
                  initial={isMobile ? { opacity: 0, y: 0 } : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.5, delay: isMobile ? 0.05 : 0.7 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "inline-block",
                    marginRight: "0.25em",
                    fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: "#218ABB",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {word}
                </m.span>
              ))}
            </div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.25, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex justify-center mb-16"
          >
            <div className="relative group">
              {!noAnim && (
                <div
                  style={{
                    position: "absolute", inset: "-4px", borderRadius: "100px",
                    background: "linear-gradient(135deg, #218ABB, #1a5f8a, #218ABB)",
                    filter: "blur(14px)",
                    animation: "heroGlow 3s ease-in-out infinite",
                  }}
                />
              )}
              <Button classAdd="hover:scale-105 relative" text="Start your project" href="#products" />
            </div>
          </m.div>
        </div>

        <div
          style={{
            position: "absolute", bottom: "2.5rem",
            left: 0, right: 0, zIndex: 30,
            display: "flex", justifyContent: "center", alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: "8px",
              animation: "heroScrollBounce 2.5s ease-in-out infinite",
            }}
          >
            <span style={{
              fontSize: "9px", color: "rgba(150,200,230,0.35)",
              letterSpacing: "0.5em", textTransform: "uppercase",
            }}>
              Scroll
            </span>
            <div style={{
              width: 22, height: 34, borderRadius: "11px",
              border: "1.5px solid rgba(33,138,187,0.35)",
              display: "flex", justifyContent: "center", paddingTop: "6px",
            }}>
              <div
                style={{
                  width: 4, height: 8, borderRadius: "2px",
                  background: "rgba(33,138,187,0.8)",
                  animation: "heroScrollDot 2.5s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heroPulse1 {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            50%       { opacity: 0.6; transform: translate(-50%, -50%) scale(1.05); }
          }
          @keyframes heroPulse2 {
            0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
            50%       { opacity: 0.4; transform: translate(-50%, -50%) scale(1.03); }
          }
          @keyframes heroGlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50%       { opacity: 0.65; transform: scale(1.06); }
          }
          @keyframes heroScrollBounce {
            0%, 100% { transform: translateY(0);  opacity: 0.3; }
            50%       { transform: translateY(12px); opacity: 0.7; }
          }
          @keyframes heroScrollDot {
            0%, 100% { transform: translateY(0);  opacity: 1; }
            50%       { transform: translateY(10px); opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            * { animation-play-state: paused !important; }
          }
        `}</style>
      </section>
    </>
  );
}