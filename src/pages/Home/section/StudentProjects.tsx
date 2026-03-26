import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../../components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "../../../constants/studentProjects";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

const CARDS_PER_PAGE = 4;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const AUTO_INTERVAL = 5000;

export default function StudentProjects() {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const noAnim = isMobile || !!prefersReduced;

  const [page, setPage]           = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef                = useRef<HTMLElement>(null);
  const intervalRef               = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPages   = Math.ceil(FEATURED_PROJECTS.length / CARDS_PER_PAGE);
  const visibleCards = FEATURED_PROJECTS.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const goToPage = (next: number) => {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };

  const startInterval = () => {
    if (noAnim || totalPages <= 1) return;
    intervalRef.current = setInterval(() => {
      setPage(prev => {
        const next = (prev + 1) % totalPages;
        setDirection(1);
        return next;
      });
    }, AUTO_INTERVAL);
  };

  const clearAutoInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startInterval();
    return () => clearAutoInterval();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noAnim, totalPages]);

  const handleMouseEnter = () => clearAutoInterval();
  const handleMouseLeave = () => startInterval();

  const handleManualNav = (next: number) => {
    clearAutoInterval();
    goToPage(next);
    startInterval();
  };

  const pageVariants = {
    enter: (dir: number) => ({ opacity: 0, x: noAnim ? 0 : dir * 60 }),
    center: {
      opacity: 1, x: 0,
      transition: { duration: noAnim ? 0.3 : 0.55, ease: EASE },
    },
    exit: (dir: number) => ({
      opacity: 0, x: noAnim ? 0 : dir * -60,
      transition: { duration: noAnim ? 0.2 : 0.35, ease: EASE },
    }),
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: noAnim ? 0 : 0.08,
        delayChildren: noAnim ? 0 : 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: noAnim ? 0 : 28, scale: noAnim ? 1 : 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: noAnim ? 0.3 : 0.6, ease: EASE },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#eef3f8" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none select-none" style={{ opacity: noAnim ? 0.3 : 0.5 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sp-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(33,138,187,0.13)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sp-dots)" />
        </svg>
      </div>

      {!noAnim && (
        <>
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ left: "-8%", top: "10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.08) 0%, transparent 65%)", filter: "blur(60px)" }}
          />
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{ right: "-6%", bottom: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
        </>
      )}
      {noAnim && (
        <div className="absolute pointer-events-none"
          style={{ left: "-8%", top: "10%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.05) 0%, transparent 65%)" }}
        />
      )}

      <div className="container mx-auto px-6 md:px-20 relative z-10 pt-14">

        <motion.div
          initial={noAnim ? { opacity: 0 } : { opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: noAnim ? 0.4 : 0.7, ease: EASE }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: noAnim ? 0.4 : 0.9, ease: EASE, delay: noAnim ? 0.15 : 0.35 }}
              style={{ transformOrigin: "left", height: 1, width: 36, background: "linear-gradient(90deg, #218ABB, transparent)" }}
            />
            <span style={{ color: "#218ABB", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase" }}>
              Our Students
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-bold mb-2"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#040850" }}>
                Student{" "}
                <span style={{ color: "#218ABB", textShadow: noAnim ? "none" : "0 0 30px rgba(33,138,187,0.2)" }}>
                  Showcase
                </span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: noAnim ? 0.4 : 1, ease: EASE, delay: noAnim ? 0.2 : 0.45 }}
                style={{ transformOrigin: "left", height: 1, width: 72, marginBottom: 12, background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))" }}
              />
              <p style={{ color: "rgba(50,70,100,0.6)", lineHeight: 1.75, fontSize: "0.95rem", maxWidth: 480 }}>
                Karya nyata mahasiswa RPL Telkom University Purwokerto — dari ide menjadi produk digital.
              </p>
            </div>

            <Link to="/projects"
              className="hidden sm:flex items-center gap-2"
              style={{ color: "#218ABB", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", flexShrink: 0 }}
            >
              Lihat semua project
              <motion.span
                animate={noAnim ? {} : { x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >→</motion.span>
            </Link>
          </div>
        </motion.div>

        <div style={{ position: "relative", overflow: "hidden" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <motion.div
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
              >
                {visibleCards.map(project => (
                  <motion.div key={project.id} variants={cardVariants} style={{ width: "100%", minWidth: 0 }}>
                    <div style={{ width: "100%" }}>
                      <ProjectCard project={project} noAnim={noAnim} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => handleManualNav(i)}
                style={{
                  width: page === i ? 24 : 7, height: 7, borderRadius: 100,
                  background: page === i ? "#218ABB" : "rgba(33,138,187,0.25)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleManualNav(Math.max(0, page - 1))}
              disabled={page === 0}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1.5px solid rgba(33,138,187,0.25)",
                background: "rgba(33,138,187,0.08)",
                cursor: page === 0 ? "not-allowed" : "pointer",
                opacity: page === 0 ? 0.3 : 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s", color: "#218ABB",
              }}
              onMouseEnter={e => { if (page !== 0) { e.currentTarget.style.background = "rgba(33,138,187,0.15)"; e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)"; } }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(33,138,187,0.08)"; e.currentTarget.style.borderColor = "rgba(33,138,187,0.25)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => handleManualNav(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1.5px solid rgba(33,138,187,0.25)",
                background: "rgba(33,138,187,0.08)",
                cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                opacity: page === totalPages - 1 ? 0.3 : 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s", color: "#218ABB",
              }}
              onMouseEnter={e => { if (page !== totalPages - 1) { e.currentTarget.style.background = "rgba(33,138,187,0.15)"; e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)"; } }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(33,138,187,0.08)"; e.currentTarget.style.borderColor = "rgba(33,138,187,0.25)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="sm:hidden mt-6 mb-4">
          <Link to="/projects"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "12px 24px", borderRadius: 12,
              border: "1px solid rgba(33,138,187,0.25)",
              background: "rgba(33,138,187,0.06)",
              color: "#218ABB", fontWeight: 700, fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Lihat semua project →
          </Link>
        </div>
      </div>

      <div className="mt-12" style={{ marginBottom: -2 }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
          style={{ width: "100%", height: 64, display: "block" }}>
          <path d="M0,32 C480,64 960,0 1440,32 L1440,64 L0,64 Z" fill="#f0f5fa" />
        </svg>
      </div>
    </section>
  );
}