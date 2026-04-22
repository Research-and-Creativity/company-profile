import { m, type Variants, type TargetAndTransition, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo } from "react";
import Button from "../../../components/ui/Button";
import webImage from "../../../assets/web-development.webp";
import mobileImage from "../../../assets/mobile-development.webp";

function useIsMobile() {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
  },
};

const itemVariantsMobile: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
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
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: noAnim ? 12 : 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: noAnim ? 0.4 : 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: noAnim ? delay * 0.3 : delay,
      }}
      {...(!noAnim ? { whileHover: { y: -6 } as TargetAndTransition } : {})}
      className="group relative rounded-3xl overflow-hidden"
      style={{
        background: gradient,
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        willChange: noAnim ? "auto" : "transform", 
      }}
      onMouseEnter={noAnim ? undefined : e => {
        e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)";
        e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.45), 0 0 30px rgba(33,138,187,0.08), inset 0 1px 0 rgba(255,255,255,0.06)";
      }}
      onMouseLeave={noAnim ? undefined : e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)";
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent 5%, ${shimmerOpacity} 50%, transparent 95%)`,
      }} />

      {!noAnim && (
        <div style={{
          position: "absolute",
          ...(blobPos === "top-right" ? { top: -10, right: -10 } : { bottom: -10, left: -10 }),
          width: 120, height: 120, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,138,187,0.12) 0%, transparent 70%)",
          filter: "blur(16px)", pointerEvents: "none",
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
        <m.img
          {...(!noAnim ? { whileHover: { scale: 1.06 } } : {})}
          transition={{ duration: 0.5 }}
          src={image}
          loading="lazy"
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.85) brightness(0.88)" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #020049 0%, rgba(2,0,73,0.3) 55%, transparent 100%)", opacity: 0.7 }}
        />
        {!noAnim && (
          <m.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(33,138,187,0.15) 0%, transparent 65%)" }}
          />
        )}
      </div>
    </m.div>
  );
}

export default function OurServices() {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const noAnim = isMobile || !!prefersReduced;

  return (
    <section className="relative py-28 text-white overflow-hidden" style={{ background: "#020049" }}>

      <div className="absolute inset-0 pointer-events-none select-none" style={{
        backgroundImage: "linear-gradient(rgba(33,138,187,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(33,138,187,0.05) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {!noAnim ? (
        <>
          <div className="absolute pointer-events-none" style={{
            left: "-12%", top: "5%", width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(33,138,187,0.1) 0%, transparent 65%)",
            filter: "blur(60px)",
            opacity: 0.6,
          }} />
          <div className="absolute pointer-events-none" style={{
            right: "-8%", bottom: "-5%", width: 420, height: 420, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(33,138,187,0.07) 0%, transparent 70%)",
            filter: "blur(70px)",
            opacity: 0.5,
          }} />
        </>
      ) : (
        <div className="absolute pointer-events-none" style={{
          left: "-12%", top: "5%", width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,138,187,0.06) 0%, transparent 65%)",
        }} />
      )}

      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.35), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)" }} />

      <m.div
        className="container mx-auto px-6 md:px-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <m.div variants={noAnim ? itemVariantsMobile : itemVariants} className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: noAnim ? 0.4 : 0.7, ease: [0.22, 1, 0.36, 1], delay: noAnim ? 0.2 : 0.7 }}
              style={{ transformOrigin: "left", height: 1, width: 36, background: "linear-gradient(90deg, #218ABB, transparent)" }}
            />
            <span style={{ color: "#218ABB", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase" }}>
              What We Do
            </span>
          </div>

          <h2 className="font-bold mb-3 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Our{" "}
            <span style={{ color: "#218ABB", textShadow: noAnim ? "none" : "0 0 40px rgba(33,138,187,0.45)" }}>
              Services
            </span>
          </h2>

          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: noAnim ? 0.4 : 0.8, ease: [0.22, 1, 0.36, 1], delay: noAnim ? 0.25 : 0.8 }}
            style={{ transformOrigin: "left", height: 1, width: 72, marginBottom: 20, background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))" }}
          />

          <p className="md:text-lg leading-relaxed" style={{ color: "rgba(160,200,230,0.62)", lineHeight: 1.85 }}>
            Zetech menyediakan berbagai macam layanan untuk memenuhi kebutuhan
            Anda di bidang digital. Kami siap membantu Anda dengan sepenuh hati,
            konsultasi dengan kami secara gratis sekarang!
          </p>
        </m.div>

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
          <ServiceCard delay={0.2}
            gradient="linear-gradient(140deg, rgba(2,0,73,0.55) 0%, rgba(33,138,187,0.09) 100%)"
            blobPos="bottom-left" shimmerOpacity="rgba(33,138,187,0.5)"
            label="Mobile Solution"
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" /><line x1="12" x2="12.01" y1="18" y2="18" /></svg>}
            title="Mobile App Development"
            description="Aplikasi mobile Android dan iOS dengan performa tinggi dan desain intuitif."
            image={mobileImage} imageAlt="Mobile App Development" noAnim={noAnim}
          />
        </div>

        <m.div variants={noAnim ? itemVariantsMobile : itemVariants} className="flex justify-center mt-20">
          <div className="relative">
            <Button classAdd="hover:scale-105 px-10 py-4" text="Consult now" href="#contact" />
          </div>
        </m.div>
      </m.div>
    </section>
  );
}