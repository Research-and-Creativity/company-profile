import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ui/ProjectCard";
import { STUDENT_PROJECTS } from "../../constants/studentProjects";
import type { StudentProject } from "../../types/studentProjects";
import { Helmet } from "react-helmet-async";

function useIsMobile() {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
}

const CATEGORIES = ["All", "Web", "Mobile", "UI/UX Design"] as const;

export default function IndexProjects() {
    const isMobile = useIsMobile();
    const prefersReduced = useReducedMotion();
    const noAnim = isMobile || !!prefersReduced;

    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const filtered = useMemo(() => {
        return STUDENT_PROJECTS.filter(p => {
            const matchCat = activeCategory === "All" || p.category === activeCategory;
            const q = query.toLowerCase();
            const matchQ = !q
                || p.title.toLowerCase().includes(q)
                || p.author.toLowerCase().includes(q)
                || p.description.toLowerCase().includes(q)
                || p.year.toString().includes(q)
                || p.techStack.some(t => t.toLowerCase().includes(q));
            return matchCat && matchQ;
        });
    }, [query, activeCategory]);

    return (
        <>
            <Helmet>
                <title>Projects | Zetech</title>
                <meta name="description" content="Explore our student projects and see the innovative work being done by our talented individuals." />
                <link rel="canonical" href="https://zetech.vercel.app/projects" />
            </Helmet>
            <div className="min-h-screen" style={{ background: "#f0f4f8" }}>

                <div className="relative overflow-hidden py-20" style={{ background: "#020c1b" }}>
                    <div className="absolute inset-0 pointer-events-none select-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="pg-grid" width="72" height="72" patternUnits="userSpaceOnUse">
                                    <path d="M 72 0 L 0 0 0 72" fill="none" stroke="rgba(33,138,187,0.05)" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pg-grid)" />
                        </svg>
                    </div>
                    {!noAnim && (
                        <motion.div className="absolute pointer-events-none"
                            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            style={{ left: "-10%", top: "0%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.12) 0%, transparent 65%)", filter: "blur(60px)" }}
                        />
                    )}

                    <div className="container mx-auto px-6 md:px-20 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <Link to="/"
                                className="inline-flex items-center gap-2"
                                style={{ color: "rgba(160,200,230,0.6)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                                Kembali ke beranda
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div style={{ transformOrigin: "left", height: 1, width: 36, background: "linear-gradient(90deg, #218ABB, transparent)" }} />
                                <span style={{ color: "#218ABB", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase" }}>
                                    Our Students
                                </span>
                            </div>
                            <h1 className="font-bold mb-2"
                                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "white", lineHeight: 1.05 }}>
                                Semua{" "}
                                <span style={{ color: "#218ABB" }}>Project</span>
                            </h1>
                            <p style={{ color: "rgba(160,200,230,0.6)", fontSize: "0.95rem", lineHeight: 1.75 }}>
                                Karya mahasiswa RPL Telkom University Purwokerto —{" "}
                                <span style={{ color: "#218ABB", fontWeight: 700 }}>{STUDENT_PROJECTS.length} project</span> tersedia
                            </p>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 50 }}>
                        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
                            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#f0f4f8" />
                        </svg>
                    </div>
                </div>

                <div className="container mx-auto px-6 md:px-20 py-12">
                    <motion.div
                        initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mb-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                    >
                        <div className="relative flex-1 max-w-sm">
                            <input
                                type="text"
                                placeholder="Cari project, author, tech..."
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                style={{
                                    width: "100%", padding: "11px 42px 11px 16px",
                                    borderRadius: 100,
                                    border: "1.5px solid rgba(33,138,187,0.2)",
                                    background: "white",
                                    color: "#040850", fontSize: "0.88rem", outline: "none",
                                    boxShadow: "0 2px 12px rgba(4,8,80,0.06)",
                                    transition: "border-color 0.2s, box-shadow 0.2s",
                                }}
                                onFocus={e => { e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(33,138,187,0.08), 0 2px 12px rgba(4,8,80,0.06)"; }}
                                onBlur={e => { e.currentTarget.style.borderColor = "rgba(33,138,187,0.2)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(4,8,80,0.06)"; }}
                            />
                            <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#218ABB" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map(cat => (
                                <button key={cat} onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: "8px 16px", borderRadius: 100, cursor: "pointer",
                                        border: activeCategory === cat ? "1.5px solid #218ABB" : "1.5px solid rgba(33,138,187,0.2)",
                                        background: activeCategory === cat ? "linear-gradient(135deg, #218ABB, #1a6e96)" : "white",
                                        color: activeCategory === cat ? "white" : "rgba(4,8,80,0.6)",
                                        fontSize: "0.8rem", fontWeight: 700,
                                        boxShadow: activeCategory === cat ? "0 4px 14px rgba(33,138,187,0.3)" : "0 1px 4px rgba(4,8,80,0.05)",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <div className="mb-6 flex items-center justify-between">
                        <p style={{ color: "rgba(50,70,100,0.55)", fontSize: "0.85rem" }}>
                            Menampilkan{" "}
                            <span style={{ color: "#218ABB", fontWeight: 700 }}>{filtered.length}</span>{" "}
                            dari {STUDENT_PROJECTS.length} project
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {filtered.length > 0 ? (
                            <motion.div
                                key={query + activeCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {filtered.map((project: StudentProject, i: number) => (
                                    <motion.div
                                        key={project.id}
                                        initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: noAnim ? 0.35 : 0.6, ease: [0.22, 1, 0.36, 1], delay: noAnim ? i * 0.03 : i * 0.07 }}
                                        style={{ width: "100%" }}
                                    >
                                        <div style={{ width: "100%" }}>
                                            <ProjectCard
                                                project={project}
                                                noAnim={noAnim}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <div style={{
                                    display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 12,
                                    padding: "32px 48px", borderRadius: 20,
                                    border: "1px solid rgba(33,138,187,0.15)",
                                    background: "white",
                                    boxShadow: "0 4px 24px rgba(4,8,80,0.05)",
                                }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 14, border: "1px solid rgba(33,138,187,0.3)", background: "rgba(33,138,187,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                        </svg>
                                    </div>
                                    <p style={{ color: "rgba(50,70,100,0.6)", fontSize: "1rem" }}>
                                        Project <span style={{ fontWeight: 700, color: "#218ABB" }}>"{query || activeCategory}"</span> tidak ditemukan
                                    </p>
                                    <button onClick={() => { setQuery(""); setActiveCategory("All"); }}
                                        style={{ color: "#218ABB", fontSize: "0.85rem", fontWeight: 600, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                                        Reset filter
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}