import { m, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../../components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "../../../constants/studentProjects";

const CARDS_PER_PAGE = 4;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const AUTO_INTERVAL = 4000;

const totalPages = Math.ceil(FEATURED_PROJECTS.length / CARDS_PER_PAGE);

export default function StudentProjects() {
  const prefersReduced = useReducedMotion();

  const [page, setPage]           = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const isPausedRef    = useRef(false);
  const intervalRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedRef = useRef(prefersReduced);
  const isHoveredRef      = useRef(isHovered);

  useEffect(() => { prefersReducedRef.current = prefersReduced; }, [prefersReduced]);
  useEffect(() => { isHoveredRef.current = isHovered; }, [isHovered]);

  const tick = useCallback(() => {
    if (prefersReducedRef.current) return;
    if (isPausedRef.current) return;
    if (isHoveredRef.current) return;
    if (totalPages <= 1) return;
    setDirection(1);
    setPage(prev => (prev + 1) % totalPages);
  }, []);

  const stopInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startInterval = useCallback(() => {
    stopInterval();
    if (prefersReducedRef.current) return;
    if (totalPages <= 1) return;
    intervalRef.current = setInterval(tick, AUTO_INTERVAL);
  }, [stopInterval, tick]);

  useEffect(() => {
    startInterval();
    return stopInterval;
  }, [startInterval, stopInterval, prefersReduced]);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
    setIsHovered(true);
    stopInterval();
  }, [stopInterval]);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
    setIsHovered(false);
    startInterval();
  }, [startInterval]);

  const handleManualNav = useCallback((next: number, currentPage: number) => {
    if (next === currentPage) return;
    setDirection(next > currentPage ? 1 : -1);
    setPage(next);
    startInterval();
  }, [startInterval]);

  const pageVariants = useMemo(() => ({
    enter:  (dir: number) => ({
      opacity: 0,
      x: prefersReduced ? 0 : dir * 48,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: prefersReduced ? 0.2 : 0.4, ease: EASE },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: prefersReduced ? 0 : dir * -48,
      transition: { duration: prefersReduced ? 0.12 : 0.22, ease: EASE },
    }),
  }), [prefersReduced]);

  const gridVariants = useMemo(() => ({
    hidden:  {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.06,
        delayChildren: 0,
      },
    },
  }), [prefersReduced]);

  const cardVariants = useMemo(() => ({
    hidden:  { opacity: 0, y: prefersReduced ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0.2 : 0.38, ease: EASE },
    },
  }), [prefersReduced]);

  const visibleCards = useMemo(
    () => FEATURED_PROJECTS.slice(
      page * CARDS_PER_PAGE,
      page * CARDS_PER_PAGE + CARDS_PER_PAGE
    ),
    [page]
  );

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#eef3f8" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(33,138,187,0.13) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      {!prefersReduced && (
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute"
            style={{
              left: "-8%", top: "10%",
              width: "min(380px, 55vw)", height: "min(380px, 55vw)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(33,138,187,0.07) 0%, transparent 65%)",
              filter: "blur(48px)",
              opacity: 0.6,
            }}
          />
          <div
            className="absolute"
            style={{
              right: "-6%", bottom: "5%",
              width: "min(320px, 48vw)", height: "min(320px, 48vw)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(33,138,187,0.06) 0%, transparent 70%)",
              filter: "blur(44px)",
              opacity: 0.5,
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 relative z-10 pt-14">

        <m.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: prefersReduced ? 0.25 : 0.55, ease: EASE }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0.25 : 0.65,
                ease: EASE,
                delay: prefersReduced ? 0 : 0.25,
              }}
              style={{
                transformOrigin: "left", height: 1, width: 36,
                background: "linear-gradient(90deg, #218ABB, transparent)",
              }}
            />
            <span
              style={{
                color: "#218ABB", fontSize: "10.5px", fontWeight: 700,
                letterSpacing: "0.26em", textTransform: "uppercase",
              }}
            >
              Our Students
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                className="font-black mb-2"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "#040850",
                }}
              >
                Student{" "}
                <span style={{ color: "#218ABB" }}>Showcase</span>
              </h2>
              <m.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReduced ? 0.25 : 0.75,
                  ease: EASE,
                  delay: prefersReduced ? 0 : 0.35,
                }}
                style={{
                  transformOrigin: "left", height: 1, width: 72,
                  marginBottom: 12,
                  background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))",
                }}
              />
              <p
                style={{
                  color: "rgba(50,70,100,0.6)", lineHeight: 1.75,
                  fontSize: "0.95rem", maxWidth: 480,
                }}
              >
                Karya nyata mahasiswa RPL Telkom University Purwokerto — dari ide menjadi produk digital.
              </p>
            </div>

            <Link
              to="/projects"
              className="hidden sm:flex items-center gap-2"
              style={{
                color: "#218ABB", fontWeight: 700, fontSize: "0.875rem",
                textDecoration: "none", flexShrink: 0,
              }}
            >
              Lihat semua project
              <span
                style={{ display: "inline-block", transition: "transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)"; }}
              >→</span>
            </Link>
          </div>
        </m.div>

        <div style={{ position: "relative", overflow: "hidden", minHeight: 260 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
              style={{ position: "relative" }}
            >
              <m.div
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
              >
                {visibleCards.map(project => (
                  <m.div
                    key={project.id}
                    variants={cardVariants}
                    style={{ width: "100%", minWidth: 0 }}
                  >
                    <ProjectCard project={project} noAnim={!!prefersReduced} />
                  </m.div>
                ))}
              </m.div>
            </m.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between pb-2">

          <div className="flex items-center gap-2" role="tablist" aria-label="Navigasi halaman">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={page === i}
                onClick={() => handleManualNav(i, page)}
                aria-label={`Halaman ${i + 1}`}
                style={{
                  width: page === i ? 24 : 7,
                  height: 7,
                  borderRadius: 100,
                  background: page === i ? "#218ABB" : "rgba(33,138,187,0.25)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NavButton
              direction="prev"
              disabled={page === 0}
              onClick={() => handleManualNav(Math.max(0, page - 1), page)}
              aria-label="Halaman sebelumnya"
            />
            <NavButton
              direction="next"
              disabled={page === totalPages - 1}
              onClick={() => handleManualNav(Math.min(totalPages - 1, page + 1), page)}
              aria-label="Halaman selanjutnya"
            />
          </div>
        </div>

        <div className="sm:hidden mt-6 mb-4">
          <Link
            to="/projects"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 8, padding: "12px 24px", borderRadius: 12,
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
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          style={{ width: "100%", height: 64, display: "block" }}
          aria-hidden="true"
        >
          <path d="M0,32 C480,64 960,0 1440,32 L1440,64 L0,64 Z" fill="#f0f5fa" />
        </svg>
      </div>
    </section>
  );
}

function NavButton({
  direction,
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
  "aria-label": string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseEnter={e => {
        if (!disabled) {
          e.currentTarget.style.background = "rgba(33,138,187,0.15)";
          e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)";
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(33,138,187,0.08)";
        e.currentTarget.style.borderColor = "rgba(33,138,187,0.25)";
      }}
      style={{
        width: 36, height: 36, borderRadius: "50%",
        border: "1.5px solid rgba(33,138,187,0.25)",
        background: "rgba(33,138,187,0.08)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.2s, border-color 0.2s",
        color: "#218ABB",
      }}
    >
      <svg
        width="15" height="15"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      >
        {direction === "prev"
          ? <path d="m15 18-6-6 6-6" />
          : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}