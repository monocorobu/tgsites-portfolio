"use client";

import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import SectionDivider from "./SectionDivider";

const painPoints = [
    {
        id: "01",
        title: "Invisível no Google",
        description: "Seus clientes pesquisam pelo serviço que você oferece e encontram quem tem presença digital, não necessariamente quem entrega melhor.",
    },
    {
        id: "02",
        title: "Dependente de indicação",
        description: "Indicação é valiosa, mas não traz previsibilidade. Sem um canal próprio, novas oportunidades dependem sempre de terceiros.",
    },
    {
        id: "03",
        title: "Perfil no Instagram não é site",
        description: "Rede social aluga atenção. Um site próprio é o único canal onde VOCÊ controla a mensagem e captura o contato direto.",
    },
    {
        id: "04",
        title: "Site genérico que não gera nada",
        description: "Um site pode até ser bonito, mas não gera resultado quando não apresenta seu valor nem conduz o visitante para o próximo passo.",
    },
];

function TiltCard({ point, variants }: { point: typeof painPoints[0], variants: Variants }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            variants={variants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#111] to-[#050505] p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl relative group overflow-hidden perspective-1000"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="flex flex-col gap-4 relative z-10 transition-transform duration-300"
            >
                <div className="flex justify-between items-start mb-2">
                    <span
                        className="font-display text-5xl text-transparent transition-all duration-300"
                        style={{ WebkitTextStroke: '1px #D4AF37' }}
                    >
                        {point.id}
                    </span>
                    <div className="h-px w-8 bg-gold/20 mt-6" />
                </div>
                <h4 className="text-xl font-bold text-white">
                    {point.title}
                </h4>
                <p className="text-gray-400 font-body text-base leading-relaxed">
                    {point.description}
                </p>
            </div>
            {/* Subtle hover accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
        </motion.div>
    );
}

export default function PainPoints() {
    const [isReady, setIsReady] = React.useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 400);
        return () => clearTimeout(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            ref={containerRef}
            className="bg-black py-16 md:py-20 overflow-visible relative"
        >
            <SectionDivider label="A sua empresa está invisível?" />
            {/* Background Subtle Lines/Grid with Parallax - Wrapped to contain overflow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -inset-x-40 -inset-y-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        x: backgroundX
                    }}
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

                    {/* Featured Card (Left) */}
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 bg-gray-900/40 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-between rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl"
                    >
                        <div className="relative z-10">
                            <span className="text-gold font-body text-sm font-semibold tracking-widest mb-6 block uppercase opacity-80 decoration-gold/30 underline underline-offset-8">
                                {"// O problema que ninguém te conta"}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-8 leading-tight">
                                O custo de ser <span className="text-gold">invisível</span> no mercado
                            </h2>
                            <p className="text-gray-400 text-lg font-body leading-relaxed mb-12 max-w-sm">
                                Você construiu um bom negócio. Mas, quando alguém procura exatamente o que você oferece, encontra primeiro o seu concorrente.
                            </p>
                        </div>

                        <a
                            href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Estava+no+seu+site+e+percebi+que+minha+empresa+está+invisível.+Quero+alinhar+minha+autoridade."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold text-black font-body font-bold py-5 px-8 rounded-2xl w-full md:w-fit text-center hover:bg-gold-light transition-colors duration-300 relative z-10 shadow-lg shadow-gold/10"
                        >
                            Quero Alinhar Minha Autoridade
                        </a>

                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl opacity-50" />
                    </motion.div>

                    {/* Grid Cards (Right) */}
                    <div className="flex-[1.1] flex flex-col pt-4">
                        <h3 className="text-xl md:text-2xl font-body font-semibold text-gray-500 mb-6 px-2">
                            Sinais de que o seu posicionamento digital está travando o seu crescimento:
                        </h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isReady ? "visible" : "hidden"}
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid sm:grid-cols-2 gap-5"
                        >
                            {painPoints.map((point) => (
                                <TiltCard key={point.id} point={point} variants={itemVariants} />
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Impact Phrase */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-12 md:mt-16 text-center max-w-5xl mx-auto px-6 border-y border-white/5 py-12"
                >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-display text-white italic leading-tight">
                        &quot;Quem não tem uma presença digital profissional perde oportunidades todos os dias — <span className="text-gold">muitas vezes para quem apenas aparece primeiro.</span>&quot;
                    </p>
                    <div className="h-px w-24 bg-gold mx-auto mt-10 mb-6" />
                    <p className="text-gray-400 font-body font-medium uppercase tracking-widest text-sm">
                        Autoridade de Marca // Presença Digital
                    </p>
                </motion.div>
            </div>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </section>
    );
}
