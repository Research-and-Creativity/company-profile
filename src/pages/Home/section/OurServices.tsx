import { motion, type Variants, type TargetAndTransition, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Button from "../../../components/ui/Button";
import webImage from "../../../assets/web-development.webp";
import mobileImage from "../../../assets/mobile-development.webp";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.8 },
  },
};

const itemVariantsMobile: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface ServiceCardProps {
  delay: number;
  gradient: string;
  blobPos: "top-right" | "bottom-left";
  shimmerOpacity: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  noAnim?: boolean;
}

function ServiceCard({
  delay, gradient, blobPos, shimmerOpacity,
  label, icon, title, description, image, imageAlt,
  noAnim = false,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 64, scale: 0.94 }}
      animate={inView ? (noAnim ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }) : {}}
      transition={{ duration: noAnim ? 0.5 : 0.9, ease: [0.22, 1, 0.36, 1], delay: noAnim ? delay * 0.5 : delay }}
      {...(!noAnim ? { whileHover: { y: -10 } as TargetAndTransition } : {})}
      className="group relative rounded-3xl overflow-hidden border"
      style={{
        background: gradient,
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: noAnim
          ? "0 8px 24px rgba(0,0,0,0.3)"
          : "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
      onMouseEnter={noAnim ? undefined : e => {
        e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)";
        e.currentTarget.style.boxShadow = "0 32px 80px rgba(0,0,0,0.5), 0 0 40px rgba(33,138,187,0.1), inset 0 1px 0 rgba(255,255,255,0.06)";
      }}
      onMouseLeave={noAnim ? undefined : e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)";
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent 5%, ${shimmerOpacity} 50%, transparent 95%)`,
      }} />

      {!noAnim && (
        <div style={{
          position: "absolute",
          ...(blobPos === "top-right" ? { top: -20, right: -20 } : { bottom: -20, left: -20 }),
          width: 160, height: 160, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,138,187,0.14) 0%, transparent 70%)",
          filter: "blur(22px)", pointerEvents: "none",
        }} />
      )}

      <div className="p-8 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            border: "1px solid rgba(33,138,187,0.4)",
            background: "rgba(33,138,187,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {icon}
          </div>
          <span style={{ color: "#218ABB", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {label}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(160,200,230,0.6)", lineHeight: 1.8 }}>{description}</p>
      </div>

      <div className="relative h-72 overflow-hidden">
        <motion.img
          {...(!noAnim ? { whileHover: { scale: 1.1 } } : {})}
          transition={{ duration: 0.6 }}
          src={image}
          loading="lazy"
          alt={imageAlt}
          className="w-full h-full object-cover transition-all"
          style={{ filter: "saturate(0.85) brightness(0.88)" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #020049 0%, rgba(2,0,73,0.35) 55%, transparent 100%)", opacity: 0.7 }}
        />
        {!noAnim && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(33,138,187,0.18) 0%, transparent 65%)" }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function OurServices() {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const noAnim = isMobile || !!prefersReduced;

  return (
    <section className="relative py-28 text-white overflow-hidden" style={{ background: "#020049" }}>

      <div className="absolute inset-0 pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="rgba(33,138,187,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-grid)" />
        </svg>
      </div>

      {!noAnim && (
        <>
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            style={{ left: "-12%", top: "5%", width: 650, height: 650, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.14) 0%, transparent 65%)", filter: "blur(70px)" }}
          />
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            style={{ right: "-8%", bottom: "-5%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.09) 0%, transparent 70%)", filter: "blur(80px)" }}
          />
        </>
      )}

      {noAnim && (
        <div className="absolute pointer-events-none"
          style={{ left: "-12%", top: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.06) 0%, transparent 65%)" }}
        />
      )}

      {!noAnim && ([
        { x: "8%",  y: "15%", size: 3, delay: 0,   dur: 5.2 },
        { x: "88%", y: "10%", size: 2, delay: 1.2, dur: 6.5 },
        { x: "80%", y: "60%", size: 3, delay: 0.7, dur: 5.8 },
        { x: "12%", y: "80%", size: 2, delay: 2.0, dur: 7.0 },
        { x: "55%", y: "8%",  size: 2, delay: 3.0, dur: 6.1 },
      ] as const).map((p, i) => (
        <motion.div key={i} className="absolute pointer-events-none rounded-full"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size, background: "#218ABB", boxShadow: "0 0 6px rgba(33,138,187,0.8)" }}
          animate={{ y: [0, -22, 0], opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.35), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)" }} />

      <motion.div
        className="container mx-auto px-6 md:px-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={noAnim ? itemVariantsMobile : itemVariants} className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: noAnim ? 0.5 : 0.9, ease: [0.22, 1, 0.36, 1], delay: noAnim ? 0.3 : 0.9 }}
              style={{ transformOrigin: "left", height: 1, width: 36, background: "linear-gradient(90deg, #218ABB, transparent)" }}
            />
            <span style={{ color: "#218ABB", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase" }}>
              What We Do
            </span>
          </div>

          <h2 className="font-bold mb-3 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Our{" "}
            <span style={{ color: "#218ABB", textShadow: noAnim ? "none" : "0 0 50px rgba(33,138,187,0.55)" }}>
              Services
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: noAnim ? 0.5 : 1, ease: [0.22, 1, 0.36, 1], delay: noAnim ? 0.35 : 1 }}
            style={{ transformOrigin: "left", height: 1, width: 72, marginBottom: 20, background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))" }}
          />

          <p className="md:text-lg leading-relaxed" style={{ color: "rgba(160,200,230,0.62)", lineHeight: 1.85 }}>
            Zetech menyediakan berbagai macam layanan untuk memenuhi kebutuhan
            Anda di bidang digital. Kami siap membantu Anda dengan sepenuh hati,
            konsultasi dengan kami secara gratis sekarang!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <ServiceCard delay={0.1}
            gradient="linear-gradient(140deg, rgba(33,138,187,0.11) 0%, rgba(2,0,73,0.55) 100%)"
            blobPos="top-right" shimmerOpacity="rgba(33,138,187,0.65)"
            label="Web Solution"
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>}
            title="Website Development"
            description="Pembuatan website profesional yang responsif, cepat, dan ramah SEO."
            image={webImage} imageAlt="Website Development" noAnim={noAnim}
          />
          <ServiceCard delay={0.25}
            gradient="linear-gradient(140deg, rgba(2,0,73,0.55) 0%, rgba(33,138,187,0.09) 100%)"
            blobPos="bottom-left" shimmerOpacity="rgba(33,138,187,0.5)"
            label="Mobile Solution"
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" /><line x1="12" x2="12.01" y1="18" y2="18" /></svg>}
            title="Mobile App Development"
            description="Aplikasi mobile Android dan iOS dengan performa tinggi dan desain intuitif."
            image={mobileImage} imageAlt="Mobile App Development" noAnim={noAnim}
          />
        </div>

        <motion.div variants={noAnim ? itemVariantsMobile : itemVariants} className="flex justify-start lg:justify-center mt-20">
          <div className="relative group">
            {!noAnim && (
              <motion.div
                animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1 rounded-full blur"
                style={{ background: "#218ABB" }}
              />
            )}
            <Button classAdd="hover:scale-105 px-10 py-4" text="Consult now" href="#contact" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}