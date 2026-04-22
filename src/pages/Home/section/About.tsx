"use client";

import { m, type Variants, useReducedMotion } from "framer-motion";
import { useRef, useCallback } from "react";
import Button from "../../../components/ui/Button";
import aboutImage from "../../../assets/about-image.webp";


const contentVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  const prefersReduced = useReducedMotion();

  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tiltRef = useRef({ rx: 0, ry: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReduced) return;
      const el = cardRef.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left - r.width / 2) / r.width;
      const ny = (e.clientY - r.top - r.height / 2) / r.height;
      const targetRx = ny * -5;
      const targetRy = nx * 7;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        tiltRef.current.rx += (targetRx - tiltRef.current.rx) * 0.12;
        tiltRef.current.ry += (targetRy - tiltRef.current.ry) * 0.12;
        if (el) {
          el.style.transform = `perspective(1000px) rotateX(${tiltRef.current.rx}deg) rotateY(${tiltRef.current.ry}deg)`;
        }
      });
    },
    [prefersReduced]
  );

  const onLeave = useCallback(() => {
    if (prefersReduced) return;
    const el = cardRef.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    tiltRef.current = { rx: 0, ry: 0 };
    el.style.transition = "transform 0.5s ease";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, [prefersReduced]);

  const activeContentVariants = prefersReduced ? reducedVariants : contentVariants;
  const activeImageVariants = prefersReduced ? reducedVariants : imageVariants;

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#f0f5fa" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          opacity: 0.45,
          backgroundImage:
            "radial-gradient(circle, rgba(33,138,187,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {!prefersReduced && (
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute"
            style={{
              left: "-10%",
              top: "0%",
              width: "min(500px, 60vw)",
              height: "min(500px, 60vw)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(33,138,187,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute"
            style={{
              right: "-8%",
              bottom: "-5%",
              width: "min(450px, 55vw)",
              height: "min(450px, 55vw)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(4,8,80,0.07) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(33,138,187,0.15), transparent)",
        }}
      />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          <m.div
            className="flex-1 w-full"
            variants={activeContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <m.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReduced ? 0 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: prefersReduced ? 0 : 0.45,
                }}
                style={{
                  transformOrigin: "left",
                  height: 1,
                  width: 36,
                  background: "linear-gradient(90deg, #218ABB, transparent)",
                }}
              />
              <span
                className="text-zetech-primary font-bold uppercase tracking-widest block"
                style={{ fontSize: "10.5px", letterSpacing: "0.26em" }}
              >
                Who Are We
              </span>
            </div>

            <h2
              className="font-black text-[#040850] mb-3 leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                letterSpacing: "-0.03em",
              }}
            >
              ABOUT{" "}
              <span className="text-zetech-primary">ZETECH</span>
            </h2>

            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0 : 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: prefersReduced ? 0 : 0.55,
              }}
              style={{
                transformOrigin: "left",
                height: 1,
                width: 72,
                marginBottom: 24,
                background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))",
              }}
            />

            <p
              className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg"
              style={{ lineHeight: 1.85 }}
            >
              Zetech merupakan inisiatif pengembangan teknologi profesional yang
              berada di bawah naungan{" "}
              <span className="font-semibold text-[#040850]">
                Himpunan Mahasiswa Rekayasa Perangkat Lunak (HMSE)
              </span>{" "}
              Telkom University Purwokerto. Kami berfokus pada penyediaan solusi
              digital berkualitas tinggi guna mendukung transformasi bisnis dan
              ekonomi kreatif.
            </p>

            <p
              className="text-gray-600 leading-relaxed mb-8 text-base sm:text-lg"
              style={{ lineHeight: 1.85 }}
            >
              Melalui kolaborasi di dalam kabinet{" "}
              <span className="italic font-medium" style={{ color: "#218ABB" }}>
                Zenith
              </span>
              , kami berkomitmen untuk menciptakan ekosistem IT yang inovatif,
              mulai dari pengembangan web hingga aplikasi mobile yang ramah
              pengguna.
            </p>

            <div className="hidden lg:block">
              <Button
                classAdd="hover:scale-105 px-10 py-4"
                text="Explore More"
                href="/about"
              />
            </div>
          </m.div>

          <m.div
            className="flex-1 w-full max-w-lg lg:max-w-none"
            variants={activeImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -10,
                right: -10,
                zIndex: 20,
                width: 40,
                height: 40,
                borderTop: "2px solid rgba(33,138,187,0.35)",
                borderRight: "2px solid rgba(33,138,187,0.35)",
                borderRadius: "0 8px 0 0",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -10,
                left: -10,
                zIndex: 20,
                width: 40,
                height: 40,
                borderBottom: "2px solid rgba(33,138,187,0.35)",
                borderLeft: "2px solid rgba(33,138,187,0.35)",
                borderRadius: "0 0 0 8px",
                pointerEvents: "none",
              }}
            />

            <div
              ref={cardRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{ willChange: prefersReduced ? "auto" : "transform" }}
            >
              <div
                className="bg-white relative overflow-hidden"
                style={{
                  borderRadius: 24,
                  padding: "14px",
                  border: "1.5px solid rgba(33,138,187,0.1)",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.07), 0 3px 10px rgba(33,138,187,0.05)",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background:
                      "linear-gradient(90deg, transparent 10%, rgba(33,138,187,0.35) 50%, transparent 90%)",
                  }}
                />

                <img
                  src={aboutImage}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  alt="About Zetech — Tim HMSE Telkom University Purwokerto"
                  className="w-full h-auto object-contain relative z-10"
                  style={{
                    borderRadius: 12,
                    transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!prefersReduced)
                      (e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                  }}
                />
              </div>
            </div>
          </m.div>

          <div className="flex justify-center lg:hidden w-full">
            <Button text="Explore More" classAdd="px-10 py-4" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}