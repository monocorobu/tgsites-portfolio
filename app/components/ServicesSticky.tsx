"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SectionDivider from "./SectionDivider";

const services = [
    {
        id: "01",
        title: "Branding & Marketing",
        description: "Criamos marcas fortes e estratégias de marketing que posicionam seu negócio, aumentam sua visibilidade e geram novas oportunidades.",
        items: [
            "Estratégia de Marca e Mensagem",
            "Design de Logo ",
            "Identidade Visual",
            "Diretrizes e Estruturas da Marca",
            "Cartões de Visita",
            "Artes Digitais"
        ]
    },
    {
        id: "02",
        title: "Sites e Webdesign",
        description: "Desenvolvemos sites modernos, rápidos e estratégicos para empresas, marcas e profissionais que querem transformar visitantes em clientes.",
        items: [
            "Landing Pages",
            "Sites de Portfólio",
            "Sites Corporativos",
            "E-commerce",
            "Otimização de Performance",
            "UX/UI Design"
        ]
    },
    {
        id: "03",
        title: "SEO & Google Maps",
        description: "Posicionamos sua empresa no topo do Google para atrair clientes certos todos os dias.",
        items: [
            "Setup do Perfil Google Business ",
            "Estratégia de Palavras-chave",
            "Gerenciamento de Reviews",
            "Auditoria SEO Técnica",
            "Perfil de Backlink",
            "Otimização de Maps"
        ]
    },
    {
        id: "04",
        title: "LinkedIn B2B",
        description: "Construímos sua autoridade no LinkedIn e geramos conexões B2B que viram oportunidades reais.",
        items: [
            "Otimização do Perfil",
            "Engenharia de Conteúdo",
            "Estratégia de Networking B2B",
            "Geração de Leads",
            "Construção de Autoridade",
            "Conteúdo Inbound"
        ]
    }
];

export default function ServicesSticky() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to index (0-3) with snapping behavior
    // 0.9 threshold for the last card as requested
    const activeIndex = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9, 1], [0, 1, 2, 3, 3]);

    useEffect(() => {
        return activeIndex.on("change", (latest) => {
            // Using floor with a small tolerance for more reactive transitions
            const snapped = Math.floor(latest + 0.05);
            const finalIndex = Math.min(Math.max(snapped, 0), services.length - 1);

            if (finalIndex !== activeStep) {
                setActiveStep(finalIndex);
            }
        });
    }, [activeIndex, activeStep]);

    return (
        <section ref={containerRef} id="servicos" className="relative bg-black text-white overflow-visible">
            <SectionDivider label="Serviços" className="top-0" />
            <div className="relative flex flex-col lg:flex-row max-w-[1440px] mx-auto px-6 md:px-12">

                <div className="absolute lg:relative inset-x-0 bottom-[70vh] md:bottom-[45vh] top-0 lg:h-auto lg:w-1/2 z-20 pointer-events-none lg:self-stretch">
                    <div
                        className="sticky flex items-start lg:items-center justify-end lg:justify-start h-[25vh] lg:h-screen transition-[top] duration-300"
                        style={{ top: "calc(var(--navbar-offset, 0px) + 60px)" }}
                    >
                        <div className="relative w-full flex items-center justify-end lg:justify-start overflow-hidden h-[15rem] md:h-[25rem] lg:h-[30rem]">
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -200, position: 'absolute' }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for a "planet-like" smooth glide
                                    }}
                                    className="w-full flex items-center justify-end lg:justify-start"
                                >
                                    {/* Mobile background mask - solid black at top, deep fade at bottom */}
                                    <div className="absolute inset-x-0 -top-10 -bottom-32 bg-gradient-to-b from-black via-black to-transparent lg:hidden pointer-events-none z-0" />

                                    <span
                                        className="relative z-10 font-display text-[6rem] md:text-[20rem] lg:text-[25rem] leading-none text-transparent select-none block"
                                        style={{ WebkitTextStroke: '4px rgba(255,255,255,1)' }}
                                    >
                                        {services[activeStep].id}
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Right Column - Service Details */}
                <div className="lg:w-1/2 flex flex-col pt-[18vh] lg:pt-0 relative z-10 font-body">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className={`min-h-[70vh] lg:min-h-[100vh] flex flex-col justify-center py-20 lg:py-24 ${idx === services.length - 1 ? 'pb-80 md:pb-96' : ''}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.15 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="max-w-xl"
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-display mb-8 leading-tight">
                                    {service.title}
                                </h2>
                                <p className="text-gray-400 text-lg md:text-xl font-body leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="space-y-4 border-t border-white/10 pt-6">
                                    {service.items.map((item, itemIdx) => (
                                        <div
                                            key={itemIdx}
                                            className="flex justify-between items-center group py-2"
                                        >
                                            <span className="text-lg md:text-xl font-body text-gray-300 group-hover:text-gold transition-colors duration-300">
                                                {item}
                                            </span>
                                            <span className="font-display text-sm text-gray-700 select-none">
                                                {`0${itemIdx + 1}`.slice(-2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Parallax Lines - Wrapped to contain overflow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>
        </section>
    );
}
