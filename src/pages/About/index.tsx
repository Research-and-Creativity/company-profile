"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Teams } from "../../constants/teams";
import { MisiItem } from "../../components/about/MisiItem";
import { RevealHeading } from "../../components/ui/RevealHeading";
import { RevealLine } from "../../components/ui/RevealLine";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { AboutBodyText } from "../../components/about/AbuotBodyText";
import { GlassCard } from "../../components/about/GlassCard";
import { IconBadge } from "../../components/ui/IconBadge";
import { ParallaxBlob } from "../../components/ui/ParallaxBlob";
import { TeamHeadingBlock } from "../../components/about/TeamHeadingBlock";
import { AnimatedTeamCard } from "../../components/teams/AnimatedTeamCard";
import { MISI_ITEMS, VISI } from "../../constants/visiMisi";
import { Helmet } from "react-helmet-async";

function useIsMobile() {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
}

export default function IndexAbout() {
    const isMobile = useIsMobile();
    const prefersReduced = useReducedMotion();
    const noAnim = isMobile || !!prefersReduced;

    return (
        <>
            <Helmet>
                <title>About Zetech | Mengenal Zetra Tech & Kabinet Zenith</title>
                <meta name="description" content="Pelajari lebih dalam tentang visi Zetech dan kontribusi Kabinet Zenith HMSE Telkom University Purwokerto dalam dunia rekayasa perangkat lunak." />
                <link rel="canonical" href="https://zetech.vercel.app/about" />
            </Helmet>

            <div className="flex flex-col w-full">
                <section className="relative overflow-hidden py-28 lg:py-40" style={{ background: "#020c1b" }}>

                    <div className="absolute inset-0 pointer-events-none select-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="ag" width="72" height="72" patternUnits="userSpaceOnUse">
                                    <path d="M 72 0 L 0 0 0 72" fill="none" stroke="rgba(33,138,187,0.055)" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#ag)" />
                        </svg>
                    </div>

                    {!noAnim && (
                        <>
                            <motion.div className="absolute pointer-events-none"
                                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                style={{ left: "-15%", top: "10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.14) 0%, transparent 65%)", filter: "blur(60px)" }}
                            />
                            <motion.div className="absolute pointer-events-none"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                                style={{ right: "-10%", bottom: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(4,8,80,0.7) 0%, transparent 70%)", filter: "blur(80px)" }}
                            />
                        </>
                    )}

                    {noAnim && (
                        <div className="absolute pointer-events-none"
                            style={{ left: "-15%", top: "10%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.06) 0%, transparent 65%)" }}
                        />
                    )}

                    {!noAnim && [
                        { x: "12%", y: "25%", size: 3, delay: 0, dur: 5.2 },
                        { x: "85%", y: "18%", size: 4, delay: 1.2, dur: 6.5 },
                        { x: "75%", y: "60%", size: 2, delay: 0.7, dur: 5.8 },
                        { x: "30%", y: "80%", size: 3, delay: 2.0, dur: 7.0 },
                        { x: "92%", y: "72%", size: 2, delay: 1.5, dur: 4.9 },
                        { x: "55%", y: "10%", size: 3, delay: 3.0, dur: 6.1 },
                    ].map((p, i) => (
                        <motion.div key={i} className="absolute pointer-events-none rounded-full"
                            style={{ left: p.x, top: p.y, width: p.size, height: p.size, background: "#218ABB", boxShadow: "0 0 8px rgba(33,138,187,0.8)" }}
                            animate={{ y: [0, -28, 0], opacity: [0.3, 0.9, 0.3] }}
                            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                        />
                    ))}

                    <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.4), transparent)" }} />

                    <div className="container mx-auto px-6 md:px-16 xl:px-24 relative z-10">
                        <SectionLabel text="Who We Are" />
                        <div className="mb-10 max-w-2xl">
                            <RevealHeading words={["About", "Us"]} accent="Us" dark />
                            <RevealLine delay={0.35} />
                        </div>
                        <AboutBodyText />

                        <div className="grid lg:grid-cols-2 gap-6">
                            <GlassCard index={0}
                                gradient="linear-gradient(140deg, rgba(33,138,187,0.1) 0%, rgba(2,13,40,0.65) 100%)"
                                blobPos={{ top: -40, right: -40 }}
                            >
                                <IconBadge>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="3" stroke="#218ABB" strokeWidth="2" />
                                        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M16.24 7.76l2.12-2.12M5.64 18.36l2.12-2.12" stroke="#218ABB" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </IconBadge>
                                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "white", letterSpacing: "-0.025em", marginBottom: 14 }}>Visi</h3>
                                <p style={{ color: "rgba(175,210,235,0.72)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                                    {VISI}
                                </p>
                            </GlassCard>

                            <GlassCard index={1}
                                gradient="linear-gradient(140deg, rgba(2,13,40,0.65) 0%, rgba(33,138,187,0.09) 100%)"
                                blobPos={{ bottom: -40, left: -40 }}
                            >
                                <IconBadge>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 11l3 3L22 4" stroke="#218ABB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </IconBadge>
                                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "white", letterSpacing: "-0.025em", marginBottom: 20 }}>Misi</h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                                    {MISI_ITEMS.map((text, i) => <MisiItem key={i} text={text} index={i} />)}
                                </ul>
                            </GlassCard>
                        </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 90 }}>
                        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
                            <path d="M0,45 C360,90 1080,0 1440,45 L1440,90 L0,90 Z" fill="#f0f4f8" />
                        </svg>
                    </div>
                </section>

                <section className="relative overflow-hidden py-28 lg:py-40" style={{ background: "#f0f4f8" }}>

                    <div className="absolute inset-0 pointer-events-none select-none" style={{ opacity: noAnim ? 0.3 : 0.7 }}>
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
                                    <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(33,138,187,0.15)" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dots)" />
                        </svg>
                    </div>

                    {!noAnim && (
                        <>
                            <ParallaxBlob style={{ right: "3%", top: "0%" }} color="rgba(33,138,187,0.09)" />
                            <ParallaxBlob style={{ left: "-5%", bottom: "5%" }} color="rgba(4,8,80,0.04)" />
                        </>
                    )}

                    <div className="absolute pointer-events-none" style={{
                        right: "8%", top: "15%",
                        width: 300, height: 300, borderRadius: "50%",
                        border: "1px solid rgba(33,138,187,0.1)",
                    }} />
                    <div className="absolute pointer-events-none" style={{
                        right: "11%", top: "12%",
                        width: 200, height: 200, borderRadius: "50%",
                        border: "1px solid rgba(33,138,187,0.08)",
                    }} />

                    <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)" }} />

                    <div className="container mx-auto px-6 md:px-16 xl:px-24 relative z-10">
                        <SectionLabel text="The People" />
                        <TeamHeadingBlock />

                        <div className="flex flex-wrap justify-center gap-0 gap-y-10">
                            {Teams.map((team, i) => (
                                <AnimatedTeamCard
                                    key={team.id}
                                    team={team}
                                    index={i}
                                    {...(noAnim ? { noAnim: true } : {})}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)" }} />
                </section>
            </div>
        </>
    );
}