"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-24 md:py-32 bg-black text-center relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Título de impacto */}
                    <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-7xl font-display font-light mb-12 leading-tight uppercase text-white">
                        Cada dia sem um site profissional é um <br className="hidden md:block" />
                        <span className="text-gold font-bold italic italic-serif-style">cliente que pode encontrar o seu concorrente.</span>
                    </h2>

                    {/* Texto persuasivo */}
                    <div className="space-y-6 mb-16 max-w-3xl mx-auto">
                        <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-body">
                            Sua presença digital precisa mostrar com clareza quem você é, o que oferece e por que escolher o seu negócio. Um bom site faz isso 24 horas por dia e transforma interesse em conversa.
                        </p>

                    </div>

                    {/* Botão de CTA Central */}
                    <div className="flex flex-col items-center gap-6">
                        <motion.a
                            href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Gostaria+de+uma+análise+gratuita+do+meu+posicionamento+digital."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gold text-black font-body font-bold py-6 px-10 rounded-2xl text-lg md:text-xl hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 inline-flex items-center gap-3 uppercase tracking-wider"
                        >
                            Quero minha análise gratuita agora <span>→</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
