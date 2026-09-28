"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";

const pillars = [
    {
        number: "01",
        title: "Posicionamento como autoridade",
        description: <>Seu site comunica em 5 segundos: o que você faz, para quem faz e por que você é a <span className="font-semibold italic">melhor escolha</span>. Nada de texto genérico.</>,
        tag: "Foco em Lead Qualificado",
        style: "light" // Light background, dark text
    },
    {
        number: "02",
        title: "Velocidade e performance",
        description: <>Site lento perde cliente. Seu site <span className="text-gold/80 italic font-medium">carrega em menos de 3 segundos</span>, e passa em todos os testes do Google.</>,
        tag: "Core Web Vitals",
        style: "dark" // Dark background, light text
    },
    {
        number: "03",
        title: "Páginas que valorizam seus serviços",
        description: <>Cada solução ganha uma <span className="text-gold/80 italic font-medium">apresentação clara e persuasiva</span>, que educa, elimina objeções e facilita o contato.</>,
        tag: "Copywriting de Elite",
        style: "dark"
    },
    {
        number: "04",
        title: "Portfólio que gera confiança",
        description: <>Seus trabalhos, produtos ou cases apresentados com contexto e resultados. O visitante entende o seu valor e sente segurança para escolher você.</>,
        tag: "Prova de Valor",
        style: "light"
    },
    {
        number: "05",
        title: "SEO local que coloca você no topo do mapa",
        description: <>Apareça quando pesquisam <span className="text-gold font-medium italic">&apos;seu serviço em [sua cidade]&apos;</span>. Pessoas interessadas encontram seu negócio sem depender apenas de anúncios.</>,
        tag: "Visibilidade Orgânica",
        style: "highlight" // High contrast, large card
    }
];

export default function SolutionSection() {
    const [canAnimate, setCanAnimate] = React.useState(false);

    React.useEffect(() => {
        // Delay animations to prioritize text rendering
        const timer = setTimeout(() => setCanAnimate(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-[#050505] pb-24 md:pb-32 pt-0 relative overflow-visible">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}
            />

            <SectionDivider label="O QUE EU CONSTRUO PARA VOCÊ" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-20 relative z-10 text-center md:text-left">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-display font-light text-white mb-8 leading-[1.1] uppercase tracking-tight"
                        >
                            Não é "só um site". <br />É a sua <span className="text-gold italic font-light italic-serif-style">presença digital</span> trabalhando todos os dias.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-md text-gray-400 text-lg md:text-xl font-body leading-relaxed font-light"
                    >
                        Cada projeto nasce do seu negócio, do seu público e dos seus objetivos. Design, conteúdo e tecnologia trabalham juntos para transformar atenção em oportunidade.
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    animate={canAnimate ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5"
                >
                    {/* Card 01 - Light */}
                    <div className="md:col-span-3 lg:col-span-4 h-full">
                        <BentoCard pillar={pillars[0]} />
                    </div>

                    {/* Card 02 - Dark */}
                    <div className="md:col-span-3 lg:col-span-4 h-full">
                        <BentoCard pillar={pillars[1]} />
                    </div>

                    {/* Card 05 - Highlight (Spans 2 rows on desktop) */}
                    <div className="md:col-span-6 lg:col-span-4 lg:row-span-2 h-full">
                        <BentoCard pillar={pillars[4]} isHighlight />
                    </div>

                    {/* Card 03 - Dark */}
                    <div className="md:col-span-3 lg:col-span-4 h-full">
                        <BentoCard pillar={pillars[2]} />
                    </div>

                    {/* Card 04 - Light (Rectangular/Wide) */}
                    <div className="md:col-span-3 lg:col-span-4 h-full">
                        <BentoCard pillar={pillars[3]} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function BentoCard({ pillar, isHighlight = false }: { pillar: any, isHighlight?: boolean }) {
    const isLight = pillar.style === "light";
    const isDark = pillar.style === "dark";

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className={`group relative h-full flex flex-col p-10 lg:p-12 rounded-[1rem] overflow-hidden transition-all duration-500 hover:-translate-y-1 ${isLight ? "bg-[#E2E8F0] shadow-inner" :
                isDark ? "bg-[#121212] border border-white/5" :
                    "bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#121212] border border-gold/20"
                }`}
        >
            {/* Glossy Overlay for Highlight */}
            {isHighlight && (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/10" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                </div>
            )}

            {/* Pattern for Light Cards (01 & 04) - similar to the image */}
            {isLight && (
                <div className="absolute right-0 top-0 w-32 h-32 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    <div className="absolute right-6 top-6 w-12 h-12 bg-black/20 rounded-full blur-xl" />
                    <div className="absolute right-10 top-10 w-4 h-4 bg-black/40 rounded-full" />
                </div>
            )}

            <div className="mb-12">
                <span className={`text-4xl font-display font-medium leading-none ${isLight ? "text-black/80" : "text-white/80"}`}>
                    {pillar.number}
                </span>
            </div>

            <div className="mt-auto">
                <div className={`text-xs uppercase tracking-[0.2em] font-medium mb-4 ${isLight ? "text-black/40" : "text-gold/60"}`}>
                    {pillar.tag}
                </div>
                <h3 className={`text-2xl md:text-3xl font-display leading-[1.1] mb-6 tracking-tight ${isLight ? "text-black" : "text-white group-hover:text-gold transition-colors"}`}>
                    {pillar.title}
                </h3>
                <div className={`text-lg font-light leading-relaxed ${isLight ? "text-black/60" : "text-gray-400"}`}>
                    {pillar.description}
                </div>
            </div>

            {/* Visual Decorative Element for Dark Cards like Card 02/03 in image */}
            {isDark && (
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700">
                    <div className="w-48 h-48 border-[20px] border-white rounded-full" />
                </div>
            )}
        </motion.div>
    );
}
