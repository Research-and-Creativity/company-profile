"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import Particle from "../../../components/ui/Particle";
import GridLines from "../../../components/ui/GridLine";
import { PARTICLES } from "../../../constants/praticle";
import { Helmet } from "react-helmet-async";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const fastSpring = { stiffness: 120, damping: 25, mass: 0.5 };
  const fastX = useSpring(mouseX, fastSpring);
  const fastY = useSpring(mouseY, fastSpring);

  useEffect(() => {
    if (isMobile) {
      mouseX.set(0);
      mouseY.set(0);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  const orb1X = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-60, 60]);
  const orb1Y = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-40, 40]);
  const orb2X = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [40, -40]);
  const orb2Y = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [30, -30]);
  const orb3X = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-80, 80]);
  const orb3Y = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-60, 60]);

  const tiltX = useTransform(fastY, [-0.5, 0.5], isMobile ? [0, 0] : [4, -4]);
  const tiltY = useTransform(fastX, [-0.5, 0.5], isMobile ? [0, 0] : [-6, 6]);

  // const badgeX  = useTransform(fastX, [-0.5, 0.5], [-10, 10]);
  // const badgeY  = useTransform(fastY, [-0.5, 0.5], [-8, 8]);
  const title1X = useTransform(fastX, [-0.5, 0.5], isMobile ? [0, 0] : [-6, 6]);
  const title1Y = useTransform(fastY, [-0.5, 0.5], isMobile ? [0, 0] : [-5, 5]);
  const title2X = useTransform(fastX, [-0.5, 0.5], isMobile ? [0, 0] : [-14, 14]);
  const title2Y = useTransform(fastY, [-0.5, 0.5], isMobile ? [0, 0] : [-10, 10]);

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

        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute pointer-events-none z-10"
          animate={isMobile ? {} : { scale: [1, 1.15, 0.95, 1], opacity: [0.25, 0.4, 0.2, 0.25] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{
            width: isMobile ? 380 : 700,
            height: isMobile ? 380 : 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(33,138,187,0.35) 0%, transparent 70%)",
            filter: `blur(${isMobile ? 40 : 80}px)`,
            transform: "translate(-50%, -50%)",
            position: "absolute", top: "50vh", left: "50vw",
          }} />
        </motion.div>

        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute bottom-0 left-0 pointer-events-none z-10"
          animate={{ scale: [0.9, 1.2, 1, 0.9], rotate: [0, 60, 120, 180] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <div style={{
            width: isMobile ? 280 : 550,
            height: isMobile ? 280 : 550,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,80,160,0.4) 0%, transparent 70%)",
            filter: `blur(${isMobile ? 50 : 100}px)`,
          }} />
        </motion.div>

        <motion.div
          style={{ x: orb3X, y: orb3Y }}
          className="absolute top-0 right-0 pointer-events-none z-10"
          animate={{ scale: [1, 0.85, 1.1, 1], opacity: [0.15, 0.3, 0.1, 0.15] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        >
          <div style={{
            width: isMobile ? 280 : 600,
            height: isMobile ? 280 : 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(50,180,220,0.25) 0%, transparent 70%)",
            filter: `blur(${isMobile ? 60 : 120}px)`,
          }} />
        </motion.div>

        {PARTICLES.map((p, idx) => (
          <Particle key={idx} {...p} />
        ))}

        {!isMobile && (
          <>
            <motion.div
              className="absolute pointer-events-none z-10"
              style={{
                width: 500, height: 500, borderRadius: "50%",
                border: "1px solid rgba(33,138,187,0.12)",
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute pointer-events-none z-10"
              style={{
                width: 750, height: 750, borderRadius: "50%",
                border: "1px solid rgba(33,138,187,0.06)",
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </>
        )}

        <div className="container mx-auto px-6 text-center relative z-20 flex flex-col items-center">

          <motion.div
            style={{
              x: title1X,
              y: title1Y,
              ...(isMobile ? {} : { rotateX: tiltX, rotateY: tiltY, perspective: 1200 }),
            }}
          >
            <div style={{ overflow: "hidden" }}>
              {["Building", "Advanced"].map((word, i) => (
                <motion.span
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
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{
              x: title2X,
              y: title2Y,
              ...(isMobile ? {} : { rotateX: tiltX, rotateY: tiltY, perspective: 1200 }),
            }}
            className="mb-10"
          >
            <div style={{ overflow: "hidden" }}>
              {["Digital", "Technology"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.7 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
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
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: "easeOut" }}
          style={{
            color: "rgba(160,200,230,0.6)",
            fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
            maxWidth: "460px",
            marginBottom: "2.5rem",
            lineHeight: 1.75,
            letterSpacing: "0.01em",
          }}
        >
          We craft cutting-edge digital experiences that push the boundaries of what&apos;s possible.
        </motion.p> */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.25, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex justify-center mb-16"
          >
            <div className="relative group">
              <motion.div
                animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.06, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", inset: "-4px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #218ABB, #1a5f8a, #218ABB)",
                  filter: "blur(14px)", opacity: 0.4,
                }}
              />
              <Button classAdd="hover:scale-105 relative" text="Start your project" href="#products" />
            </div>
          </motion.div>

          {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", gap: "4rem" }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              style={{ textAlign: "center", cursor: "default" }}
            >
              <div style={{
                fontSize: "1.7rem", fontWeight: 800, color: "#218ABB",
                letterSpacing: "-0.02em",
                textShadow: "0 0 30px rgba(33,138,187,0.6)",
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: "0.7rem", color: "rgba(150,200,230,0.45)",
                letterSpacing: "0.14em", textTransform: "uppercase",
                marginTop: "3px", fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
        </div>

        <div
          style={{
            position: "absolute", bottom: "2.5rem",
            left: 0, right: 0,
            zIndex: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
          >
            <span style={{ fontSize: "9px", color: "rgba(150,200,230,0.35)", letterSpacing: "0.5em", textTransform: "uppercase" }}>
              Scroll
            </span>
            <div style={{
              width: 22, height: 34, borderRadius: "11px",
              border: "1.5px solid rgba(33,138,187,0.35)",
              display: "flex", justifyContent: "center", paddingTop: "6px",
            }}>
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 4, height: 8, borderRadius: "2px", background: "rgba(33,138,187,0.8)" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}