"use client";

import { m, type Variants, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import Button from "../../../components/ui/Button";
import aboutImage from "../../../assets/about-image.webp";

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

const contentVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 },
  },
};

const imageVariantsMobile: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const contentVariantsMobile: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

export default function About() {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const noAnim = isMobile || !!prefersReduced;

  const cardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef({ rx: 0, ry: 0 });
  const rafRef = useRef<number | null>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (noAnim) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left - r.width / 2) / r.width;
    const ny = (e.clientY - r.top - r.height / 2) / r.height;
    const targetRx = ny * -6;
    const targetRy = nx * 8;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      tiltRef.current.rx += (targetRx - tiltRef.current.rx) * 0.15;
      tiltRef.current.ry += (targetRy - tiltRef.current.ry) * 0.15;
      if (el) {
        el.style.transform = `perspective(1000px) rotateX(${tiltRef.current.rx}deg) rotateY(${tiltRef.current.ry}deg)`;
      }
    });
  }, [noAnim]);

  const onLeave = useCallback(() => {
    if (noAnim) return;
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.5s ease";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, [noAnim]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "#f0f5fa" }}
    >
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          opacity: noAnim ? 0.3 : 0.55,
          backgroundImage: "radial-gradient(circle, rgba(33,138,187,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {!noAnim && (
        <>
          <div
            className="absolute pointer-events-none z-0"
            style={{
              left: "-10%", top: "0%",
              width: 500, height: 500, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(33,138,187,0.12) 0%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          <div
            className="absolute pointer-events-none z-0"
            style={{
              right: "-8%", bottom: "-5%",
              width: 450, height: 450, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(4,8,80,0.08) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {noAnim && (
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: "-10%", top: "0%",
            width: 300, height: 300, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(33,138,187,0.06) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.15), transparent)" }} />

      <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">

        <m.div
          className="flex-1"
          variants={noAnim ? contentVariantsMobile : contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: noAnim ? 0.5 : 0.9, ease: [0.22, 1, 0.36, 1], delay: noAnim ? 0.3 : 0.65 }}
              style={{
                transformOrigin: "left", height: 1, width: 36,
                background: "linear-gradient(90deg, #218ABB, transparent)",
              }}
            />
            <span
              className="text-zetech-primary font-bold text-sm uppercase tracking-[0.3em] block"
              style={{ fontSize: "10.5px", letterSpacing: "0.26em" }}
            >
              Who Are We
            </span>
          </div>

          <h2
            className="font-bold text-[#040850] mb-3 leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            ABOUT{" "}
            <span
              className="text-zetech-primary"
              style={{ textShadow: noAnim ? "none" : "0 0 30px rgba(33,138,187,0.2)" }}
            >
              ZETECH
            </span>
          </h2>

          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: noAnim ? 0.5 : 1, ease: [0.22, 1, 0.36, 1], delay: noAnim ? 0.35 : 0.75 }}
            style={{
              transformOrigin: "left", height: 1,
              width: 72, marginBottom: 28,
              background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))",
            }}
          />

          <p className="text-gray-600 leading-relaxed mb-8 text-lg" style={{ lineHeight: 1.85 }}>
            Zetech merupakan inisiatif pengembangan teknologi profesional yang
            berada di bawah naungan
            <span className="font-semibold text-[#040850]">
              {" "}Himpunan Mahasiswa Rekayasa Perangkat Lunak (HMSE){" "}
            </span>
            Telkom University Purwokerto. Kami berfokus pada penyediaan solusi
            digital berkualitas tinggi guna mendukung transformasi bisnis dan
            ekonomi kreatif.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10 text-lg" style={{ lineHeight: 1.85 }}>
            Melalui kolaborasi di dalam kabinet{" "}
            <span className="italic font-medium" style={{ color: "#218ABB" }}>
              Zenith
            </span>
            , kami berkomitmen untuk menciptakan ekosistem IT yang inovatif, mulai dari
            pengembangan web hingga aplikasi mobile yang ramah pengguna.
          </p>

          <div className="hidden lg:block">
            <div className="relative inline-block">
              {!noAnim && (
                <div
                  style={{
                    position: "absolute", inset: "-4px", borderRadius: "100px",
                    background: "linear-gradient(135deg, #218ABB, #1a5f8a)",
                    filter: "blur(12px)", opacity: 0.3,
                    animation: "aboutBtnGlow 3s ease-in-out infinite",
                  }}
                />
              )}
              <Button classAdd="hover:scale-105 relative px-10 py-4" text="Explore More" href="/about" />
            </div>
          </div>
        </m.div>

        <m.div
          className="flex-1 relative"
          variants={noAnim ? imageVariantsMobile : imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {!noAnim && (
            <div
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-10"
              style={{ background: "rgba(33,138,187,0.12)" }}
            />
          )}

          <div style={{
            position: "absolute", top: -10, right: -10, zIndex: 20,
            width: 44, height: 44,
            borderTop: "2px solid rgba(33,138,187,0.35)",
            borderRight: "2px solid rgba(33,138,187,0.35)",
            borderRadius: "0 8px 0 0",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -10, left: -10, zIndex: 20,
            width: 44, height: 44,
            borderBottom: "2px solid rgba(33,138,187,0.35)",
            borderLeft: "2px solid rgba(33,138,187,0.35)",
            borderRadius: "0 0 0 8px",
            pointerEvents: "none",
          }} />

          <div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ willChange: noAnim ? "auto" : "transform" }}
          >
            <div
              className="bg-white relative overflow-hidden"
              style={{
                borderRadius: 28,
                padding: "16px",
                border: "1.5px solid rgba(33,138,187,0.1)",
                boxShadow: noAnim
                  ? "0 8px 24px rgba(0,0,0,0.06)"
                  : "0 20px 50px rgba(0,0,0,0.08), 0 4px 12px rgba(33,138,187,0.06)",
                position: "relative",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: "linear-gradient(90deg, transparent 10%, rgba(33,138,187,0.35) 50%, transparent 90%)",
              }} />

              <img
                src={aboutImage}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                alt="About Zetech"
                className="w-full h-auto object-contain relative z-10"
                style={{
                  borderRadius: 14,
                  transition: noAnim ? "none" : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: noAnim ? "auto" : "transform",
                }}
                onMouseEnter={e => { if (!noAnim) (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { if (!noAnim) (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
            </div>
          </div>
        </m.div>

        {/* CTA mobile */}
        <div className="flex justify-center lg:hidden mt-10">
          <Button text="Explore More" classAdd="px-10 py-4" href="/about" />
        </div>
      </div>

      <style>{`
        @keyframes aboutBtnGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(1.04); }
        }
      `}</style>
    </section>
  );
}