"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { TeamsType } from "../../types/teams";
import { SocialBtn } from "../ui/SocialBtn";

export default function TeamsCard({ name, role, image, socials }: TeamsType) {
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const sX = useSpring(mouseX, { stiffness: 100, damping: 22 });
    const sY = useSpring(mouseY, { stiffness: 100, damping: 22 });
    const rotateX = useTransform(sY, [-0.5, 0.5], [6, -6]);
    const rotateY = useTransform(sX, [-0.5, 0.5], [-6, 6]);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mouseX.set((e.clientX - r.left - r.width / 2) / r.width);
        mouseY.set((e.clientY - r.top - r.height / 2) / r.height);
    };

    const hasSocials = socials.linkedin || socials.github || socials.instagram;

    return (
        <div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            style={{ perspective: 900, width: "100%" }}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    style={{
                        position: "absolute", inset: -4, borderRadius: 26, zIndex: 0,
                        background: "linear-gradient(160deg, rgba(255,255,255,0.4) 0%, rgba(33,138,187,0.35) 50%, rgba(4,8,80,0.3) 100%)",
                        filter: "blur(16px)",
                    }}
                />

                <div style={{
                    position: "relative", zIndex: 1,
                    borderRadius: 20,
                    background: "linear-gradient(175deg, #ffffff 0%, #e8f2fa 28%, #1a3a5c 62%, #050f1e 100%)",
                    border: "1px solid rgba(200,220,240,0.6)",
                    boxShadow: "0 8px 32px rgba(4,8,80,0.12), 0 24px 64px rgba(4,8,80,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
                    overflow: "visible",
                }}>

                    <div style={{ borderRadius: "18px 18px 0 0", overflow: "hidden", position: "relative" }}>

                        <div style={{
                            position: "absolute", inset: 0, zIndex: 2,
                            background: "linear-gradient(to bottom, rgba(255,255,255,0.0) 30%, rgba(26,58,92,0.55) 75%, rgba(5,15,30,0.9) 100%)",
                            pointerEvents: "none",
                        }} />

                        <div style={{
                            position: "absolute", top: 13, right: 13, zIndex: 3,
                            width: 30, height: 30, borderRadius: 9,
                            border: "1px solid rgba(255,255,255,0.7)",
                            background: "rgba(255,255,255,0.85)",
                            backdropFilter: "blur(8px)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}>
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    width: 7, height: 7, borderRadius: "50%",
                                    background: "#218ABB",
                                    boxShadow: "0 0 8px rgba(33,138,187,0.9)",
                                }}
                            />
                        </div>

                        <motion.img
                            src={image}
                            alt={name}
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                width: "100%",
                                aspectRatio: "3/4",
                                objectFit: "cover",
                                objectPosition: "top",
                                display: "block",
                            }}
                        />
                    </div>

                    <div style={{ padding: "14px 20px 20px" }}>

                        <span style={{
                            display: "inline-block",
                            padding: "3px 10px", borderRadius: 100,
                            border: "1px solid rgba(33,138,187,0.4)",
                            background: "rgba(33,138,187,0.14)",
                            fontSize: "9px", fontWeight: 700,
                            color: "#7ecfed",
                            letterSpacing: "0.14em", textTransform: "uppercase",
                            marginBottom: 8,
                        }}>
                            {role}
                        </span>

                        <h3 style={{
                            fontSize: "1.05rem", fontWeight: 800,
                            color: "white",
                            letterSpacing: "-0.02em", lineHeight: 1.25,
                            marginBottom: hasSocials ? 12 : 0,
                            textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                        }}>
                            {name}
                        </h3>

                        {hasSocials && (
                            <>
                                <div style={{
                                    height: 1, marginBottom: 12,
                                    background: "linear-gradient(90deg, rgba(33,138,187,0.5), transparent)",
                                }} />
                                <div style={{ display: "flex", gap: 8 }}>
                                    {socials.linkedin && (
                                        <SocialBtn href={socials.linkedin}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect width="4" height="12" x="2" y="9" rx="1" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                        </SocialBtn>
                                    )}
                                    {socials.github && (
                                        <SocialBtn href={socials.github}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                        </SocialBtn>
                                    )}
                                    {socials.instagram && (
                                        <SocialBtn href={socials.instagram}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="20" height="20" x="2" y="2" rx="5" />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                            </svg>
                                        </SocialBtn>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}