import { motion, useReducedMotion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { STUDENT_PROJECTS } from "../../constants/studentProjects";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CATEGORY_COLOR: Record<string, string> = {
  Web:                "#218ABB",
  Mobile:             "#22c55e",
  Desktop:            "#f59e0b",
  "AI/ML":            "#a855f7",
  "Game Development": "#ef4444",
  "UI/UX Design":     "#ec4899",
};

const CATEGORY_LABEL: Record<string, string> = {
  Web:                "Web",
  Mobile:             "Mobile",
  Desktop:            "Desktop",
  "AI/ML":            "AI/ML",
  "Game Development": "Game Dev",
  "UI/UX Design":     "UI/UX",
};

export default function DetailProject() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const noAnim = isMobile || !!prefersReduced;

  const project = STUDENT_PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#f0f4f8" }}>
        <div style={{ textAlign: "center", padding: "48px 24px" }}>
          <p style={{ fontSize: "5rem", marginBottom: 16 }}>🔍</p>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#040850", marginBottom: 8 }}>
            Project tidak ditemukan
          </h1>
          <p style={{ color: "rgba(50,70,100,0.6)", marginBottom: 32 }}>
            Project dengan ID <code style={{ background: "rgba(33,138,187,0.1)", padding: "2px 6px", borderRadius: 4 }}>{id}</code> tidak ada.
          </p>
          <Link to="/projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px", borderRadius: 100,
              background: "linear-gradient(135deg, #218ABB, #1a6e96)",
              color: "white", fontWeight: 700, fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            ← Kembali ke Projects
          </Link>
        </div>
      </div>
    );
  }

  const catColor = CATEGORY_COLOR[project.category] ?? "#218ABB";
  const catLabel = CATEGORY_LABEL[project.category] ?? project.category;

  const related = STUDENT_PROJECTS
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{project.title} | Zetech Projects</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://zetech.vercel.app/projects/${project.id}`} />
      </Helmet>

      <div className="min-h-screen" style={{ background: "#f0f4f8" }}>

        <div className="relative overflow-hidden" style={{ background: "#020c1b" }}>

          <div className="absolute inset-0 pointer-events-none select-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dp-grid" width="72" height="72" patternUnits="userSpaceOnUse">
                  <path d="M 72 0 L 0 0 0 72" fill="none" stroke="rgba(33,138,187,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dp-grid)" />
            </svg>
          </div>

          {!noAnim && (
            <motion.div className="absolute pointer-events-none"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ right: "-10%", top: "-20%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${catColor}20 0%, transparent 65%)`, filter: "blur(60px)" }}
            />
          )}

          <div className="container mx-auto px-6 md:px-20 relative z-10 pt-20 pb-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2"
                style={{ color: "rgba(160,200,230,0.6)", fontSize: "0.85rem", fontWeight: 600, background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Kembali
              </button>
              <span style={{ color: "rgba(160,200,230,0.3)", fontSize: "0.85rem" }}>/</span>
              <Link to="/projects" style={{ color: "rgba(160,200,230,0.6)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
                Projects
              </Link>
              <span style={{ color: "rgba(160,200,230,0.3)", fontSize: "0.85rem" }}>/</span>
              <span style={{ color: "rgba(160,200,230,0.4)", fontSize: "0.85rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 200 }}>
                {project.title}
              </span>
            </motion.div>
          </div>

          <div className="container mx-auto px-6 md:px-20 pb-10"><div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <motion.div
            initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: noAnim ? 0.4 : 0.8, ease: EASE }}
            className="relative w-full"
          >
            <div style={{
              aspectRatio: "16/9", borderRadius: 14, overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
              background: `linear-gradient(135deg, ${catColor}25, #0a0f1e)`,
              position: "relative",
            }}>
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={e => { e.currentTarget.style.display = "none"; }}
              />
              <div style={{
                position: "absolute", top: 16, left: 16,
                padding: "5px 12px", borderRadius: 100,
                background: `${catColor}dd`,
                fontSize: "10px", fontWeight: 800,
                color: "white", letterSpacing: "0.12em", textTransform: "uppercase",
              }}>
                {catLabel}
              </div>
            </div>
          </motion.div>
          </div></div>

          <div style={{ marginTop: 40, marginBottom: -2 }}>
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
              <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f0f4f8" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            <div className="lg:col-span-2">
              <motion.div
                initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: noAnim ? 0.4 : 0.7, ease: EASE, delay: 0.1 }}
              >
                <h1 style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1,
                  color: "#040850", marginBottom: 20,
                }}>
                  {project.title}
                </h1>

                <div style={{
                  height: 2, width: 60, marginBottom: 28, borderRadius: 2,
                  background: `linear-gradient(90deg, ${catColor}, transparent)`,
                }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p style={{ color: "rgba(50,70,100,0.75)", lineHeight: 1.85, fontSize: "1rem" }}>
                    {project.description}
                  </p>
                  <p style={{ color: "rgba(50,70,100,0.55)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                    Project ini dikerjakan oleh mahasiswa Rekayasa Perangkat Lunak Telkom University
                    Purwokerto sebagai bagian dari program Project Tingkat yang bertujuan menghasilkan
                    karya nyata siap pakai. Proses pengembangan meliputi riset kebutuhan pengguna,
                    perancangan sistem, implementasi, hingga pengujian dan deployment.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: noAnim ? 0.4 : 0.7, ease: EASE, delay: noAnim ? 0.1 : 0.2 }}
            >
              <div style={{
                borderRadius: 20, padding: "24px",
                background: "white",
                border: "1.5px solid rgba(33,138,187,0.1)",
                boxShadow: "0 4px 24px rgba(4,8,80,0.06)",
                position: "sticky", top: 24,
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "20px 20px 0 0", background: `linear-gradient(90deg, transparent, ${catColor}, transparent)` }} />

                <div className="mb-6">
                  <p style={{ color: "rgba(50,70,100,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
                    Creator
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {project.authors.map((author, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                          background: `linear-gradient(135deg, ${catColor}, ${catColor}88)`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "11px", fontWeight: 800, color: "white",
                        }}>
                          {author[0].toUpperCase()}
                        </div>
                        <span style={{ color: "#040850", fontWeight: 600, fontSize: "0.88rem" }}>
                          {author}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ height: 1, marginBottom: 20, background: "rgba(33,138,187,0.1)" }} />

                <div className="mb-5">
                  <p style={{ color: "rgba(50,70,100,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>
                    Tahun
                  </p>
                  <p style={{ color: "#040850", fontWeight: 700, fontSize: "0.9rem" }}>{project.year}</p>
                </div>

                <div className="mb-5">
                  <p style={{ color: "rgba(50,70,100,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>
                    Kategori
                  </p>
                  <div style={{
                    display: "inline-flex", padding: "4px 12px", borderRadius: 100,
                    background: `${catColor}15`, border: `1px solid ${catColor}30`,
                    fontSize: "0.8rem", fontWeight: 700, color: catColor,
                  }}>
                    {catLabel}
                  </div>
                </div>

                <div className="mb-6">
                  <p style={{ color: "rgba(50,70,100,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>
                    Tech Stack
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.techStack.map(tech => (
                      <span key={tech} style={{
                        padding: "4px 10px", borderRadius: 8,
                        background: "rgba(33,138,187,0.07)",
                        border: "1px solid rgba(33,138,187,0.18)",
                        fontSize: "0.78rem", fontWeight: 700,
                        color: "rgba(4,8,80,0.65)",
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ height: 1, marginBottom: 16, background: "rgba(33,138,187,0.1)" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "11px 20px", borderRadius: 12,
                        background: `linear-gradient(135deg, ${catColor}, #1a6e96)`,
                        color: "white", fontWeight: 700, fontSize: "0.88rem",
                        textDecoration: "none", transition: "opacity 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
                      </svg>
                      Lihat Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "11px 20px", borderRadius: 12,
                        background: "rgba(4,8,80,0.05)",
                        border: "1.5px solid rgba(4,8,80,0.12)",
                        color: "rgba(4,8,80,0.7)", fontWeight: 700, fontSize: "0.88rem",
                        textDecoration: "none", transition: "all 0.2s",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = `${catColor}50`;
                        e.currentTarget.style.color = catColor;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "rgba(4,8,80,0.12)";
                        e.currentTarget.style.color = "rgba(4,8,80,0.7)";
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {related.length > 0 && (
            <motion.div
              initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: noAnim ? 0.4 : 0.7, ease: EASE, delay: noAnim ? 0.2 : 0.4 }}
              className="mt-20"
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <div>
                  <p style={{ color: "#218ABB", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: 4 }}>
                    Related
                  </p>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#040850", letterSpacing: "-0.03em" }}>
                    Project Serupa
                  </h2>
                </div>
                <Link to="/projects"
                  style={{ color: "#218ABB", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}
                >
                  Lihat semua →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel, i) => (
                  <motion.div
                    key={rel.id}
                    initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: noAnim ? 0 : i * 0.08 }}
                  >
                    <Link to={`/projects/${rel.id}`} style={{ textDecoration: "none", display: "block" }}>
                      <motion.div
                        whileHover={noAnim ? undefined : { y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                        style={{
                          borderRadius: 12, overflow: "hidden",
                          boxShadow: "0 4px 20px rgba(4,8,80,0.08)",
                          transition: "box-shadow 0.3s",
                        }}
                        onMouseEnter={noAnim ? undefined : e => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(4,8,80,0.15)"; }}
                        onMouseLeave={noAnim ? undefined : e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(4,8,80,0.08)"; }}
                      >
                        <div style={{
                          aspectRatio: "4/3", overflow: "hidden",
                          background: `linear-gradient(135deg, ${CATEGORY_COLOR[rel.category] ?? "#218ABB"}20, rgba(4,8,80,0.06))`,
                        }}>
                          <img
                            src={rel.thumbnail}
                            alt={rel.title}
                            style={{
                              width: "100%", height: "100%", objectFit: "cover", display: "block",
                              transition: noAnim ? "none" : "transform 0.5s ease",
                            }}
                            onMouseEnter={e => { if (!noAnim) e.currentTarget.style.transform = "scale(1.05)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                            onError={e => { e.currentTarget.style.display = "none"; }}
                          />
                        </div>
                        <div style={{ padding: "12px 14px", background: "white" }}>
                          <p style={{ color: "#040850", fontWeight: 700, fontSize: "0.85rem", marginBottom: 2, letterSpacing: "-0.01em" }}>
                            {rel.title}
                          </p>
                          <p style={{ color: "rgba(50,70,100,0.5)", fontSize: "0.75rem" }}>
                            {rel.authors[0]}{rel.authors.length > 1 ? ` & ${rel.authors.length - 1} lainnya` : ""}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}