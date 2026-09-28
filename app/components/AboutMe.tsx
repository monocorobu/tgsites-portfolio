"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="sobre" className="bg-black py-20 relative overflow-visible">
            <SectionDivider label="Quem sou eu" />
            <div className="container mx-auto px-6 mt-16">
                <div className="flex flex-col md:flex-row gap-8 items-stretch">

                    {/* Coluna da Esquerda: Texto e Redes Sociais */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 rounded-[40px] p-10 md:p-16 flex flex-col justify-between"
                        style={{
                            background: "linear-gradient(135deg, #f9f9f9 0%, #fff9e6 50%, #e6f7f5 100%)",
                        }}
                    >
                        <div>
                            <p className="text-3xl md:text-4xl font-display font-medium text-black leading-tight mb-8">
                                Estratégia, design e tecnologia: conheça <b>Thales Gabriel</b>
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 font-body mb-12 max-w-lg text-justify">
                                À frente da TGSITES está Thales Gabriel, desenvolvedor de sites e estrategista digital com 6 anos de experiência criando soluções para a internet.<br />
                                <br />
                                Formado em Análise e Desenvolvimento de Sistemas (ADS), combina conhecimento técnico, visão de negócio e atenção ao design para atender empresas, marcas e profissionais de diferentes segmentos.<br />

                                Em cada projeto, participa diretamente da estratégia para garantir que site, automação e posicionamento no Google estejam alinhados aos objetivos reais de cada cliente.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mt-auto">
                            <a
                                href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Estava+no+seu+site+e+gostaria+de+entrar+em+contato."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-8 py-4 rounded-full font-body font-medium hover:scale-105 transition-transform"
                            >
                                Entrar em Contato
                            </a>

                            <div className="flex gap-3">
                                <a
                                    href="https://www.instagram.com/thalessgabriel._/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors shadow-sm"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://www.threads.net/@thales_pretowt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors shadow-sm"
                                    aria-label="Threads"
                                >
                                    <img
                                        src="/threads-logo.svg"
                                        alt="Threads"
                                        className="w-5 h-5"
                                    />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors shadow-sm"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors shadow-sm"
                                    aria-label="Behance"
                                >
                                    <img
                                        src="/behance-logo.svg"
                                        alt="Behance"
                                        className="w-5 h-5"
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Coluna da Direita: Foto */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 md:flex-[0.8] relative min-h-[400px] md:min-h-full rounded-[40px] overflow-hidden"
                    >
                        <Image
                            src="/Webdesigner-em-Caçapava.jpg"
                            alt="Thales Gabriel - Estrategista Digital e CEO da TGSITES"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
