import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../../../components/ui/Button";
import aboutImage from "../../../assets/about-image.png";

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

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) / r.width);
    my.set((e.clientY - r.top - r.height / 2) / r.height);
  };

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "#f0f5fa" }}
    >
      <div className="absolute inset-0 pointer-events-none select-none" style={{ opacity: 0.55 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ab-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(33,138,187,0.14)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ab-dots)" />
        </svg>
      </div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none z-0"
        style={{
          left: "-10%", top: "0%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,138,187,0.1) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute pointer-events-none z-0"
        style={{
          right: "-8%", bottom: "-5%",
          width: 450, height: 450, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(4,8,80,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.15), transparent)" }} />

      <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">

        <motion.div
          className="flex-1"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
              style={{
                transformOrigin: "left", height: 1, width: 36,
                background: "linear-gradient(90deg, #218ABB, transparent)",
              }}
            />
            <span
              className="text-zetech-primary font-bold text-sm uppercase tracking-[0.3em] block"
              style={{ fontSize: "10.5px", letterSpacing: "0.26em" }}
            >
              Who We Are
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
              style={{ textShadow: "0 0 30px rgba(33,138,187,0.2)" }}
            >
              ZETECH
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
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
            <span
              className="italic font-medium"
              style={{ color: "#218ABB" }}
            >
              Zenith
            </span>
            , kami berkomitmen untuk menciptakan ekosistem IT yang inovatif, mulai dari
            pengembangan web hingga aplikasi mobile yang ramah pengguna.
          </p>

          <div className="hidden lg:block">
            <div className="relative inline-block">
              <motion.div
                animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", inset: "-4px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #218ABB, #1a5f8a)",
                  filter: "blur(12px)", opacity: 0.3,
                }}
              />
              <Button classAdd="hover:scale-105 relative px-10 py-4" text="Explore More" href="/about" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-10"
            style={{ background: "rgba(33,138,187,0.12)" }}
          />

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
            onMouseLeave={() => { mx.set(0); my.set(0); }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute", inset: -3, borderRadius: 32, zIndex: 0,
                  background: "linear-gradient(135deg, rgba(33,138,187,0.2), rgba(4,8,80,0.08))",
                  filter: "blur(14px)",
                }}
              />

              <div
                className="bg-white relative overflow-hidden group transition-shadow duration-500"
                style={{
                  borderRadius: 28,
                  padding: "16px",
                  border: "1.5px solid rgba(33,138,187,0.1)",
                  boxShadow: "0 20px_50px rgba(0,0,0,0.08), 0 4px 12px rgba(33,138,187,0.06)",
                  position: "relative", zIndex: 1,
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 1,
                  background: "linear-gradient(90deg, transparent 10%, rgba(33,138,187,0.35) 50%, transparent 90%)",
                }} />

                <div style={{
                  position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)",
                  width: 260, height: 120,
                  background: "radial-gradient(ellipse, rgba(33,138,187,0.06) 0%, transparent 70%)",
                  filter: "blur(16px)", pointerEvents: "none",
                }} />

                <img
                  src={aboutImage}
                  alt="About Zetech"
                  className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                  style={{ borderRadius: 14 }}
                />

                {/* <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute", bottom: 24, right: 24, zIndex: 20,
                    padding: "8px 14px", borderRadius: 12,
                    border: "1px solid rgba(33,138,187,0.22)",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 20px rgba(33,138,187,0.1)",
                    display: "flex", alignItems: "center", gap: 8,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: "#218ABB",
                      boxShadow: "0 0 8px rgba(33,138,187,0.8)",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#040850", letterSpacing: "-0.01em" }}>
                      Since 2023
                    </div>
                    <div style={{ fontSize: "0.58rem", color: "rgba(33,138,187,0.75)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                      Active Studio
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA mobile (struktur sama) */}
        <div className="flex justify-center lg:hidden mt-10">
          <Button text="Explore More" classAdd="px-10 py-4" href="/about" />
        </div>
      </div>
    </section>
  );
}