// src/components/ui/ProjectCard.tsx
import { motion, useReducedMotion } from "framer-motion";
import type { StudentProject } from "../../types/studentProjects";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

interface ProjectCardProps {
  project: StudentProject;
  noAnim?: boolean;
}

const CATEGORY_COLOR: Record<string, string> = {
  Web:     "#218ABB",
  Mobile:  "#22c55e",
  "UI/UX": "#a855f7",
  Other:   "#f59e0b",
};

export default function ProjectCard({ project, noAnim = false }: ProjectCardProps) {
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();
  const _noAnim = noAnim || isMobile || !!prefersReduced;


  const catColor = CATEGORY_COLOR[project.category] ?? "#218ABB";

  return (
    // animasi stagger dihandle oleh parent (StudentProjects gridVariants)
    <div style={{ width: "100%", height: "100%" }}>
      <motion.div
        // ── Hover lift — desktop only ──
        whileHover={_noAnim ? undefined : { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}

        // ── Shimmer glow on hover — desktop only ──
        className="relative flex flex-col h-full"
        style={{
          borderRadius: 20,
          background: "white",
          border: "1.5px solid rgba(33,138,187,0.1)",
          boxShadow: _noAnim
            ? "0 2px 12px rgba(4,8,80,0.05)"
            : "0 4px 20px rgba(4,8,80,0.06), 0 1px 4px rgba(4,8,80,0.03)",
          overflow: "hidden",
          transition: "border-color 0.35s, box-shadow 0.35s",
          cursor: "default",
          // Pastikan card fill wrapper
          width: "100%",
          minWidth: 0,
          flexShrink: 0,
        }}
        onMouseEnter={_noAnim ? undefined : e => {
          e.currentTarget.style.borderColor = "rgba(33,138,187,0.4)";
          e.currentTarget.style.boxShadow = "0 20px 48px rgba(4,8,80,0.12), 0 0 0 1px rgba(33,138,187,0.12)";
        }}
        onMouseLeave={_noAnim ? undefined : e => {
          e.currentTarget.style.borderColor = "rgba(33,138,187,0.1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(4,8,80,0.06), 0 1px 4px rgba(4,8,80,0.03)";
        }}
      >
        {/* Shimmer top line — warna sesuai kategori */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent 10%, ${catColor}55 50%, transparent 90%)`,
        }} />

        {/* ── Thumbnail ── */}
        <div className="relative overflow-hidden"
          style={{ height: 160, background: "rgba(33,138,187,0.05)", flexShrink: 0 }}>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ transition: _noAnim ? "none" : "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
            onMouseEnter={e => { if (!_noAnim) e.currentTarget.style.transform = "scale(1.07)"; }}
            onMouseLeave={e => { if (!_noAnim) e.currentTarget.style.transform = "scale(1)"; }}
            onError={e => {
              e.currentTarget.style.display = "none";
              if (e.currentTarget.parentElement)
                e.currentTarget.parentElement.style.background =
                  "linear-gradient(135deg, rgba(33,138,187,0.12), rgba(4,8,80,0.08))";
            }}
          />

          {/* Overlay gradient bawah thumbnail — desktop subtle reveal on hover */}
          {!_noAnim && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(33,138,187,0.15) 0%, transparent 60%)",
              }}
            />
          )}

          {/* Category badge */}
          <div style={{
            position: "absolute", top: 10, left: 10,
            padding: "3px 10px", borderRadius: 100,
            background: `${catColor}22`,
            border: `1px solid ${catColor}44`,
            fontSize: "9px", fontWeight: 700,
            color: catColor, letterSpacing: "0.14em", textTransform: "uppercase",
          }}>
            {project.category}
          </div>

          {/* Year badge */}
          <div style={{
            position: "absolute", top: 10, right: 10,
            padding: "3px 10px", borderRadius: 100,
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(4,8,80,0.08)",
            fontSize: "9px", fontWeight: 700,
            color: "rgba(4,8,80,0.5)", letterSpacing: "0.08em",
          }}>
            {project.year}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 p-5">

          {/* Judul — subtle underline reveal on hover (desktop) */}
          <motion.h3
            className="font-bold mb-1 leading-tight"
            style={{ color: "#040850", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "-0.01em" }}
          >
            {project.title}
          </motion.h3>

          {/* Author */}
          <div className="flex items-center gap-1.5 mb-2">
            <div style={{
              width: 18, height: 18, borderRadius: "50%",
              background: "rgba(33,138,187,0.12)",
              border: "1px solid rgba(33,138,187,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span style={{ color: "#218ABB", fontSize: "0.78rem", fontWeight: 600 }}>{project.author}</span>
          </div>

          {/* Deskripsi */}
          <p className="mb-3 line-clamp-2 flex-1"
            style={{ color: "rgba(50,70,100,0.65)", lineHeight: 1.65, fontSize: "0.82rem" }}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.techStack.slice(0, 4).map(tech => (
              <motion.span
                key={tech}
                whileHover={_noAnim ? undefined : { scale: 1.05 }}
                style={{
                  padding: "2px 7px", borderRadius: 6,
                  background: "rgba(33,138,187,0.06)",
                  border: "1px solid rgba(33,138,187,0.15)",
                  fontSize: "9px", fontWeight: 700,
                  color: "rgba(4,8,80,0.55)", letterSpacing: "0.05em",
                  display: "inline-block",
                }}
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 4 && (
              <span style={{
                padding: "2px 7px", borderRadius: 6,
                background: "rgba(4,8,80,0.04)",
                fontSize: "9px", fontWeight: 600, color: "rgba(4,8,80,0.35)",
              }}>
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Divider */}
          <div style={{
            height: 1, marginBottom: 12,
            background: "linear-gradient(90deg, rgba(33,138,187,0.12), transparent)",
          }} />

          {/* Links */}
          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={_noAnim ? undefined : { scale: 1.03 }}
                whileTap={_noAnim ? undefined : { scale: 0.97 }}
                style={{
                  flex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                  padding: "7px 12px", borderRadius: 10,
                  background: "linear-gradient(135deg, #218ABB, #1a6e96)",
                  color: "white", fontSize: "0.78rem", fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={_noAnim ? undefined : { scale: 1.03 }}
                whileTap={_noAnim ? undefined : { scale: 0.97 }}
                style={{
                  flex: project.demoUrl ? "0 0 auto" : 1,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                  padding: "7px 12px", borderRadius: 10,
                  background: "rgba(4,8,80,0.05)",
                  border: "1px solid rgba(4,8,80,0.1)",
                  color: "rgba(4,8,80,0.65)", fontSize: "0.78rem", fontWeight: 700,
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={_noAnim ? undefined : e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(33,138,187,0.35)";
                  (e.currentTarget as HTMLElement).style.color = "#218ABB";
                }}
                onMouseLeave={_noAnim ? undefined : e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(4,8,80,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(4,8,80,0.65)";
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {!project.demoUrl && "GitHub"}
              </motion.a>
            )}
            {!project.demoUrl && !project.githubUrl && (
              <span style={{ color: "rgba(4,8,80,0.3)", fontSize: "0.75rem", fontStyle: "italic" }}>
                Private project
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}