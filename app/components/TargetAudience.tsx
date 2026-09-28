"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";

const audiences = [
    {
        id: "01",
        title: "Profissionais liberais",
        image: "/images/engenheiros.jpg", // Engineering with white helmet
        video: "/videos/engenheiros.mp4",
        tag: "Autoridade Pessoal"
    },
    {
        id: "02",
        title: "Marcas autorais",
        image: "/images/arquitetos.jpg", // Architecture sketch/office
        video: "/videos/arquitetos.mp4",
        tag: "Identidade & Portfólio"
    },
    {
        id: "03",
        title: "Empresas e prestadores",
        image: "/images/empresas.jpg", // Large scale infra
        video: "/videos/empresas.mp4",
        tag: "Soluções Corporativas"
    },
    {
        id: "04",
        title: "Negócios em crescimento",
        image: "/images/construtoras.jpg", // Construction site
        video: "/videos/construtoras.mp4",
        tag: "Visibilidade & Escala"
    }
];

export default function TargetAudience() {
    return (
        <section id="publico" className="bg-black py-24 md:py-32 relative overflow-visible">
            <SectionDivider label="Feito sob medida para" />
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-20 relative z-10 text-center">

                <div className="mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-white leading-[1.1] uppercase tracking-tight"
                    >
                        Se você tem algo valioso para oferecer, existe um site certo para apresentar o seu negócio.
                    </motion.h2>
                </div>

                {/* Grid of Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {audiences.map((audience, index) => (
                        <AudienceCard key={audience.id} audience={audience} index={index} />
                    ))}
                </motion.div>

                {/* Reinforcement Phrase */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 max-w-4xl mx-auto border-t border-white/10 pt-16"
                >
                    <p className="text-gray-400 text-lg md:text-2xl font-body leading-relaxed font-light italic">
                        "Cada negócio tem sua voz, seu público e seu jeito de vender. <span className="text-white font-medium not-italic">Por isso eu não faço site genérico</span> — eu crio uma presença digital alinhada ao que torna a sua marca única."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function AudienceCard({ audience, index }: { audience: any, index: number }) {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const [loadMedia, setLoadMedia] = React.useState(false);
    const [loadVideo, setLoadVideo] = React.useState(false);

    useEffect(() => {
        if (isVisible) {
            // Stage 1: Load images/animations after a short delay to prioritize texts
            const mediaTimer = setTimeout(() => setLoadMedia(true), 200);
            // Stage 2: Enable video loading even later
            const videoTimer = setTimeout(() => setLoadVideo(true), 1000);
            return () => {
                clearTimeout(mediaTimer);
                clearTimeout(videoTimer);
            };
        }
    }, [isVisible]);

    useEffect(() => {
        if (isHovered && videoRef.current && loadVideo) {
            videoRef.current.play().catch(err => console.warn("Video play failed:", err));
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered, loadVideo]);

    return (
        <motion.div
            onViewportEnter={() => setIsVisible(true)}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative aspect-[3/4] rounded-[1rem] overflow-hidden cursor-crosshair shadow-2xl bg-[#0a0a0a]"
        >
            {/* Background Image - Loaded after Text */}
            <div className={`absolute inset-0 transition-all duration-1000 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
                {loadMedia && (
                    <img
                        src={audience.image}
                        alt={audience.title}
                        loading="lazy"
                        className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] transition-all duration-700"
                    />
                )}
            </div>

            {/* Video on Hover - Only assign src when loadVideo is true */}
            {loadVideo && (
                <video
                    ref={videoRef}
                    src={audience.video}
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'} brightness-[0.6]`}
                />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none" />

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 border border-white/5 group-hover:border-gold/30 rounded-[1rem] transition-colors duration-500 pointer-events-none" />

            {/* Content at bottom - Always visible first */}
            <div className="absolute inset-x-0 bottom-0 p-8 text-left z-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-display font-medium text-white/20 group-hover:text-gold/40 transition-colors duration-500 leading-none">
                        {audience.id}
                    </span>
                    <div className="h-px w-8 bg-white/10 group-hover:bg-gold/30 transition-all duration-500" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/60 mb-2 block">
                    {audience.tag}
                </span>

                <h3 className="text-2xl font-display text-white leading-tight group-hover:text-gold transition-colors duration-500 uppercase tracking-tight">
                    {audience.title}
                </h3>
            </div>
        </motion.div>
    );
}
