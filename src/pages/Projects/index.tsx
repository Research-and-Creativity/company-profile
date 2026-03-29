import { m, useReducedMotion, AnimatePresence } from "framer-motion";
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

type CategoryValue = StudentProject["category"];

const CATEGORY_LABELS: Record<CategoryValue | "All", string> = {
    "All":              "All",
    "Web":              "Web",
    "Mobile":           "Mobile",
    "Desktop":          "Desktop",
    "AI/ML":            "AI/ML",
    "Game Development": "Game Dev",
    "UI/UX Design":     "UI/UX",
};

const CATEGORIES = ["All", "Web", "Mobile", "Desktop", "AI/ML", "Game Development", "UI/UX Design"] as const;

const ITEMS_PER_PAGE = 12;

export default function IndexProjects() {
    const isMobile = useIsMobile();
    const prefersReduced = useReducedMotion();
    const noAnim = isMobile || !!prefersReduced;

    const [filter, setFilter] = useState({
        query: "",
        activeCategory: "All" as string,
        page: 1,
    });

    const { query, activeCategory, page } = filter;

    const setQuery        = (q: string)   => setFilter(f => ({ ...f, query: q, page: 1 }));
    const handleCategory  = (cat: string) => setFilter(f => ({ ...f, activeCategory: cat, page: 1 }));
    const setPage         = (p: number)   => setFilter(f => ({ ...f, page: p }));

    const filtered = useMemo(() => {
        return STUDENT_PROJECTS.filter(p => {
            const matchCat = activeCategory === "All" || p.category === activeCategory;
            const q = query.toLowerCase();
            const matchQ = !q
                || p.title.toLowerCase().includes(q)
                || p.authors.join(" ").toLowerCase().includes(q)
                || p.description.toLowerCase().includes(q)
                || p.techStack.some(t => t.toLowerCase().includes(q));
            return matchCat && matchQ;
        });
    }, [query, activeCategory]);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const pagedItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

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
                        <m.div className="absolute pointer-events-none"
                            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            style={{ left: "-10%", top: "0%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.12) 0%, transparent 65%)", filter: "blur(60px)" }}
                        />
                    )}

                    <div className="container mx-auto px-6 md:px-20 relative z-10">
                        <m.div
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
                        </m.div>

                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                            <m.div
                                initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div style={{ height: 1, width: 36, background: "linear-gradient(90deg, #218ABB, transparent)" }} />
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
                            </m.div>

                            {/* Category chips — kanan atas, desktop only */}
                            {/* <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden lg:flex flex-wrap gap-2 justify-end"
                                style={{ maxWidth: 440 }}
                            >
                                {CATEGORIES.map(cat => (
                                    <button key={cat} onClick={() => handleCategory(cat)}
                                        style={{
                                            padding: "6px 14px", borderRadius: 100, cursor: "pointer",
                                            border: "1.5px solid rgba(33,138,187,0.45)",
                                            background: activeCategory === cat
                                                ? "linear-gradient(135deg, #218ABB, #1a6e96)"
                                                : "rgba(33,138,187,0.08)",
                                            color: activeCategory === cat ? "white" : "rgba(33,138,187,0.85)",
                                            fontSize: "0.78rem", fontWeight: 700,
                                            boxShadow: activeCategory === cat ? "0 4px 14px rgba(33,138,187,0.35)" : "none",
                                            transition: "all 0.2s",
                                        }}
                                    >
                                        {CATEGORY_LABELS[cat as keyof typeof CATEGORY_LABELS]}
                                    </button>
                                ))}
                            </m.div> */}
                        </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 50 }}>
                        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
                            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#f0f4f8" />
                        </svg>
                    </div>
                </div>

                <div className="container mx-auto px-6 md:px-20 py-12">

                    <m.div
                        initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                        <div className="relative w-full sm:w-1/2">
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
                                onFocus={e => {
                                    e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)";
                                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(33,138,187,0.08), 0 2px 12px rgba(4,8,80,0.06)";
                                }}
                                onBlur={e => {
                                    e.currentTarget.style.borderColor = "rgba(33,138,187,0.2)";
                                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(4,8,80,0.06)";
                                }}
                            />
                            <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#218ABB" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-end">
                            {CATEGORIES.map(cat => (
                                <button key={cat} onClick={() => handleCategory(cat)}
                                    style={{
                                        padding: "7px 14px", borderRadius: 100, cursor: "pointer",
                                        border: "1.5px solid rgba(33,138,187,0.4)",
                                        background: activeCategory === cat
                                            ? "linear-gradient(135deg, #218ABB, #1a6e96)"
                                            : "rgba(33,138,187,0.06)",
                                        color: activeCategory === cat ? "white" : "rgba(33,138,187,0.85)",
                                        fontSize: "0.78rem", fontWeight: 700,
                                        boxShadow: activeCategory === cat ? "0 4px 14px rgba(33,138,187,0.3)" : "none",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    {CATEGORY_LABELS[cat as keyof typeof CATEGORY_LABELS]}
                                </button>
                            ))}
                        </div>
                    </m.div>

                    <AnimatePresence mode="wait">
                        {pagedItems.length > 0 ? (
                            <m.div
                                key={query + activeCategory + page}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {pagedItems.map((project: StudentProject, i: number) => (
                                    <m.div
                                        key={project.id}
                                        initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: noAnim ? 0.35 : 0.6,
                                            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                                            delay: noAnim ? i * 0.03 : i * 0.06,
                                        }}
                                        style={{ width: "100%" }}
                                    >
                                        <div style={{ width: "100%" }}>
                                            <ProjectCard project={project} noAnim={noAnim} />
                                        </div>
                                    </m.div>
                                ))}
                            </m.div>
                        ) : (
                            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                                <div style={{
                                    display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 12,
                                    padding: "32px 48px", borderRadius: 20,
                                    border: "1px solid rgba(33,138,187,0.15)", background: "white",
                                    boxShadow: "0 4px 24px rgba(4,8,80,0.05)",
                                }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 14, border: "1px solid rgba(33,138,187,0.3)", background: "rgba(33,138,187,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                                        </svg>
                                    </div>
                                    <p style={{ color: "rgba(50,70,100,0.6)", fontSize: "1rem" }}>
                                        Project <span style={{ fontWeight: 700, color: "#218ABB" }}>
                                            "{query || CATEGORY_LABELS[activeCategory as keyof typeof CATEGORY_LABELS]}"
                                        </span> tidak ditemukan
                                    </p>
                                    <button onClick={() => { setQuery(""); handleCategory("All"); }}
                                        style={{ color: "#218ABB", fontSize: "0.85rem", fontWeight: 600, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                                        Reset filter
                                    </button>
                                </div>
                            </m.div>
                        )}
                    </AnimatePresence>

                    {pagedItems.length > 0 && (
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">

                            <p style={{ color: "rgba(50,70,100,0.5)", fontSize: "0.85rem" }}>
                                Menampilkan{" "}
                                <span style={{ color: "#218ABB", fontWeight: 700 }}>
                                    {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)}
                                </span>{" "}
                                dari <span style={{ fontWeight: 700 }}>{filtered.length}</span> project
                                {activeCategory !== "All" && (
                                    <> · <span style={{ color: "#218ABB", fontWeight: 700 }}>
                                        {CATEGORY_LABELS[activeCategory as keyof typeof CATEGORY_LABELS]}
                                    </span></>
                                )}
                            </p>

                            {totalPages > 1 && (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setPage(Math.max(1, page - 1))}
                                        disabled={page === 1}
                                        style={{
                                            width: 36, height: 36, borderRadius: "50%",
                                            border: "1.5px solid rgba(33,138,187,0.2)",
                                            background: "white", cursor: page === 1 ? "not-allowed" : "pointer",
                                            opacity: page === 1 ? 0.35 : 1,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            transition: "all 0.2s", color: "#218ABB",
                                            boxShadow: "0 2px 8px rgba(4,8,80,0.05)",
                                        }}
                                        onMouseEnter={e => { if (page !== 1) e.currentTarget.style.borderColor = "rgba(33,138,187,0.45)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(33,138,187,0.2)"; }}
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>

                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button key={i} onClick={() => setPage(i + 1)}
                                            style={{
                                                width: 36, height: 36, borderRadius: "50%",
                                                border: page === i + 1 ? "1.5px solid #218ABB" : "1.5px solid rgba(33,138,187,0.15)",
                                                background: page === i + 1 ? "linear-gradient(135deg, #218ABB, #1a6e96)" : "white",
                                                color: page === i + 1 ? "white" : "rgba(50,70,100,0.65)",
                                                fontSize: "0.82rem", fontWeight: 800, cursor: "pointer",
                                                boxShadow: page === i + 1 ? "0 4px 16px rgba(33,138,187,0.35)" : "0 2px 8px rgba(4,8,80,0.05)",
                                                transition: "all 0.2s",
                                            }}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setPage(Math.min(totalPages, page + 1))}
                                        disabled={page === totalPages}
                                        style={{
                                            width: 36, height: 36, borderRadius: "50%",
                                            border: "1.5px solid rgba(33,138,187,0.2)",
                                            background: "white", cursor: page === totalPages ? "not-allowed" : "pointer",
                                            opacity: page === totalPages ? 0.35 : 1,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            transition: "all 0.2s", color: "#218ABB",
                                            boxShadow: "0 2px 8px rgba(4,8,80,0.05)",
                                        }}
                                        onMouseEnter={e => { if (page !== totalPages) e.currentTarget.style.borderColor = "rgba(33,138,187,0.45)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(33,138,187,0.2)"; }}
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}