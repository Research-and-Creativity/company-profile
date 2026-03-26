import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Web: "#218ABB",
  Mobile: "#22c55e",
  Desktop: "#f59e0b",
  "AI/ML": "#a855f7",
  "Game Development": "#ef4444",
  "UI/UX Design": "#ec4899",
};

const CATEGORY_LABEL: Record<string, string> = {
  Web: "Web",
  Mobile: "Mobile",
  Desktop: "Desktop",
  "AI/ML": "AI/ML",
  "Game Development": "Game Dev",
  "UI/UX Design": "UI/UX",
};

function formatAuthors(authors: string[]): string {
  if (!authors || authors.length === 0) return "-";
  if (authors.length === 1) return authors[0];
  return `${authors[0]} & ${authors.length - 1} lainnya`;
}

export default function ProjectCard({ project, noAnim = false }: ProjectCardProps) {
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();
  const _noAnim = noAnim || isMobile || !!prefersReduced;

  const catColor = CATEGORY_COLOR[project.category] ?? "#218ABB";
  const catLabel = CATEGORY_LABEL[project.category] ?? project.category;
  const authorDisplay = formatAuthors(project.authors);

  return (
    <div style={{ width: "100%" }}>

      <Link to={`/projects/${project.id}`} style={{ textDecoration: "none", display: "block" }}>
        <motion.div
          whileHover={_noAnim ? undefined : { y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="relative overflow-hidden group"
          style={{
            borderRadius: 12,
            aspectRatio: "4/3",
            background: `linear-gradient(135deg, ${catColor}20, rgba(4,8,80,0.06))`,
            boxShadow: _noAnim
              ? "0 2px 16px rgba(4,8,80,0.08)"
              : "0 4px 20px rgba(4,8,80,0.1)",
            transition: "box-shadow 0.3s",
          }}
          onMouseEnter={_noAnim ? undefined : e => {
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(4,8,80,0.18)";
          }}
          onMouseLeave={_noAnim ? undefined : e => {
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(4,8,80,0.1)";
          }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", display: "block",
              transition: _noAnim ? "none" : "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
            }}
            onError={e => {
              e.currentTarget.style.display = "none";
            }}
          />

          {!_noAnim && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute", inset: 0,
                background: "rgba(0,0,0,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      padding: "8px 16px", borderRadius: 100,
                      background: "white",
                      color: "#040850", fontSize: "0.78rem", fontWeight: 700,
                      textDecoration: "none",
                      display: "flex", alignItems: "center", gap: 5,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      transition: "transform 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      padding: "8px 16px", borderRadius: 100,
                      background: "white",
                      color: "#040850", fontSize: "0.78rem", fontWeight: 700,
                      textDecoration: "none",
                      display: "flex", alignItems: "center", gap: 5,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      transition: "transform 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </Link>

      <div style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
            background: `linear-gradient(135deg, ${catColor}, ${catColor}88)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "10px", fontWeight: 800, color: "white",
          }}>
            {(project.authors?.[0]?.[0] ?? "?").toUpperCase()}
          </div>

          <div style={{ minWidth: 0 }}>
            <Link to={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
              <p style={{
                color: "#040850", fontWeight: 700, fontSize: "0.82rem",
                lineHeight: 1.3, letterSpacing: "-0.01em",
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#218ABB"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#040850"; }}
              >
                {project.title}
              </p>
            </Link>
            <p style={{
              color: "rgba(50,70,100,0.5)", fontSize: "0.72rem",
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>
              {authorDisplay}
            </p>
          </div>
        </div>

        <div style={{
          padding: "3px 8px", borderRadius: 100, flexShrink: 0,
          background: `${catColor}15`,
          border: `1px solid ${catColor}30`,
          fontSize: "9px", fontWeight: 700,
          color: catColor, letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          {catLabel}
        </div>
      </div>
    </div>
  );
}