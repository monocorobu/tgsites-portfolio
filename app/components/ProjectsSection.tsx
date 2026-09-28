"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import SectionDivider from "./SectionDivider";
import Image from "next/image";

const projects = [
    {
        id: "01",
        title: "Brunna ",
        subtitle: "Landing Page para venda de mentoria",
        description: "Landing page criada para apresentar a mentoria com clareza, fortalecer a autoridade da especialista e conduzir potenciais clientes até a inscrição.",
        image: "./Port/port-brunna-2.jpg",
        stats: {
            label1: "Performance",
            value1: "98%",
            label2: "SEO Score",
            value2: "100"
        }
    },
    {
        id: "02",
        title: "Gtech Automações",
        subtitle: "Catálogo de respeito",
        description: "Site completo para traduzir a força da empresa em uma presença digital à altura, com catálogo de soluções, autoridade de marca e apresentação técnica.",
        image: "./Port/por-gtech.jpg",
        stats: {
            label1: "Leads/Mês",
            value1: "+45",
            label2: "Conversão",
            value2: "12%"
        }
    },
    {
        id: "03",
        title: "Akannie Engenharia",
        subtitle: "Site Institucional",
        description: "Site institucional para a Akannie Engenharia, empresa com atuação internacional no setor de mineração, desenvolvido para apresentar sua experiência, seus serviços e seu compromisso com a sustentabilidade.",
        image: "./Port/port-akannie.jpg",
        stats: {
            label1: "Velocidade da Página",
            value1: "0.8s",
            label2: "Acessos/Mês",
            value2: "+10.000"
        }
    },
    {
        id: "04",
        title: "Vila Encanto e Magia",
        subtitle: "Experiência e venda de ingressos",
        description: "Site para divulgar o parque temático e suas apresentações, criar uma experiência visual envolvente e facilitar a compra de ingressos online.",
        image: "./Port/port-vila.jpg",
        stats: {
            label1: "Retenção",
            value1: "5min",
            label2: "ROI Estimado",
            value2: "15x"
        }
    }
];

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 = down, -1 = up

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const sectionedProgress = latest * projects.length;
        const newIndex = Math.min(Math.floor(sectionedProgress), projects.length - 1);

        if (newIndex !== activeIndex) {
            setDirection(newIndex > activeIndex ? 1 : -1);
            setActiveIndex(newIndex);
        }
    });

    const goToIndex = (newIndex: number) => {
        if (!containerRef.current) return;
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveIndex(newIndex);
        // Sincroniza o scroll com o projeto selecionado
        const section = containerRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const targetScroll = sectionTop + (newIndex / projects.length) * sectionHeight;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
    };

    const handlePrev = () => goToIndex(Math.max(0, activeIndex - 1));
    const handleNext = () => goToIndex(Math.min(projects.length - 1, activeIndex + 1));

    return (
        <section id="projetos" ref={containerRef} className="relative h-[400vh] bg-black">
            <div
                className="sticky h-screen overflow-hidden flex flex-col transition-[top] duration-300"
                style={{ top: "var(--navbar-offset, 0px)" }}
            >
                <SectionDivider label="Projetos Recentes" />

                {/* Ocupa todo espaço restante abaixo do divider */}
                <div className="flex-1 min-h-0 w-full max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col items-center justify-center relative md:pt-[160px] lg:pt-[80px] xl:pt-[160px] md:pb-4">

                    <div className="flex flex-col md:flex-row w-full h-full md:h-auto md:items-stretch gap-0">

                        {/* TOPO: Card de Informação — PRINCIPAL no mobile */}
                        <div className="w-full flex-1 min-h-0 md:flex-none md:h-auto md:w-[350px] lg:w-[300px] xl:w-[400px] relative z-20 overflow-hidden rounded-t-[2rem] md:rounded-t-none md:rounded-l-[2rem]">
                            <AnimatePresence mode="popLayout" custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    variants={{
                                        initial: (d) => ({ y: d > 0 ? "100%" : "-100%", opacity: 0 }),
                                        animate: { y: 0, opacity: 1 },
                                        exit: (d) => ({ y: d > 0 ? "-100%" : "100%", opacity: 0 })
                                    }}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0"
                                >
                                    <ProjectInfo project={projects[activeIndex]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* BASE: Imagem pequena no mobile */}
                        <div className="w-full h-[180px] flex-shrink-0 md:flex-1 md:h-auto md:aspect-[7/5] lg:max-h-[400px] xl:max-h-none relative z-10 overflow-hidden rounded-b-[2rem] md:rounded-b-none md:rounded-r-[2rem]">
                            <AnimatePresence mode="popLayout" custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    variants={{
                                        initial: (d) => ({ y: d > 0 ? "100%" : "-100%", opacity: 0 }),
                                        animate: { y: 0, opacity: 1 },
                                        exit: (d) => ({ y: d > 0 ? "-100%" : "100%", opacity: 0 })
                                    }}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                                    className="absolute inset-0"
                                >
                                    <ProjectVisual project={projects[activeIndex]} index={activeIndex} total={projects.length} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Paginação + Botões de Navegação */}
                    <div className="flex items-center justify-center gap-4 py-3 md:py-4 flex-shrink-0 w-full">

                        {/* Botão Anterior */}
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            aria-label="Projeto anterior"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed flex-shrink-0"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goToIndex(i)}
                                    aria-label={`Projeto ${i + 1}`}
                                    className="transition-all duration-500 rounded-full focus:outline-none"
                                    style={{
                                        width: i === activeIndex ? "2rem" : "0.5rem",
                                        height: "0.5rem",
                                        backgroundColor: i === activeIndex ? "#D4AF37" : "rgba(255,255,255,0.25)"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Botão Próximo */}
                        <button
                            onClick={handleNext}
                            disabled={activeIndex === projects.length - 1}
                            aria-label="Próximo projeto"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed flex-shrink-0"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>

                    {/* Indicador de próxima seção */}
                    <div className="flex flex-col items-center gap-1 mt-8 pb-3 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-body">próxima seção</span>
                        <svg
                            className="animate-bounce text-gold/90"
                            width="20" height="20" viewBox="0 0 20 20" fill="none"
                        >
                            <path d="M4 7L10 13L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ProjectInfo({ project }: { project: any }) {
    return (
        <div
            className="h-full w-full bg-white p-8 md:p-10 lg:p-6 xl:p-10 flex flex-col justify-between shadow-2xl shadow-white/5"
        >
            <div className="space-y-4">
                <div className="w-12 h-[2px] bg-gold" />
                <h3 className="text-3xl md:text-5xl lg:text-2xl xl:text-5xl font-display font-medium text-black leading-tight uppercase break-words">
                    {project.title}
                </h3>
                <div className="flex items-center gap-2">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-gold" />
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-black/40">{project.subtitle}</span>
                </div>
            </div>

            <p className="text-black/70 font-body text-sm md:text-base lg:text-sm xl:text-base leading-relaxed">
                {project.description}
            </p>

            <motion.a
                href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Gostaria+de+um+projeto+de+site+parecido+com+os+que+vi+no+seu+portfolio."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-lg hover:bg-gold-dark transition-all flex items-center justify-center"
            >
                Quero um igual
            </motion.a>
        </div>
    );
}

function ProjectVisual({ project, index, total }: { project: any, index: number, total: number }) {
    return (
        <div className="relative w-full h-full">
            {/* Main Project Image */}
            <div className="w-full h-full overflow-hidden shadow-2xl relative border border-white/5">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                {/* Number Indicator */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                    <span className="text-3xl md:text-8xl lg:text-5xl xl:text-8xl font-display font-medium text-white/10 select-none">
                        {index + 1}/{total}
                    </span>
                </div>
            </div>

            {/* Feature Cards - escondidos no mobile, visíveis no desktop */}
            <div className="hidden md:flex absolute bottom-10 -right-12 flex-col gap-4 z-20">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-24 md:w-64 lg:w-48 xl:w-64 aspect-[1.8/1] bg-gold rounded-[0.75rem] md:rounded-[1.5rem] p-2 md:p-6 lg:p-4 xl:p-6 shadow-2xl flex flex-col justify-between"
                >
                    <span className="text-[7px] md:text-xs uppercase font-bold text-black/50">{project.stats.label1}</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-base md:text-5xl lg:text-3xl xl:text-5xl font-display font-medium text-black leading-none">{project.stats.value1}</span>
                    </div>
                    <div className="flex justify-end">
                        <span className="text-black/30 text-sm md:text-xl font-bold">↗</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-24 md:w-64 lg:w-48 xl:w-64 aspect-[1.8/1] bg-white rounded-[0.75rem] md:rounded-[1.5rem] p-2 md:p-6 lg:p-4 xl:p-6 shadow-2xl flex flex-col justify-between"
                >
                    <span className="text-[7px] md:text-xs uppercase font-bold text-black/40">{project.stats.label2}</span>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <div className="w-full h-1 md:h-2 bg-black/5 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-gold" />
                        </div>
                        <span className="text-[10px] md:text-3xl lg:text-xl xl:text-3xl font-display font-medium text-black leading-none">{project.stats.value2}</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
