"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionDivider from "./SectionDivider";

const faqData = [
    {
        question: "Já tenho Instagram, preciso mesmo de um site?",
        answer: "Instagram é uma vitrine em terreno alugado — o algoritmo decide quem vê. O site é um canal próprio: pode aparecer no Google, apresentar sua oferta com profundidade e receber contatos 24 horas por dia. Um complementa o outro."
    },
    {
        question: "Quanto tempo leva para o site ficar pronto?",
        answer: "Entre 15 e 25 dias úteis, dependendo da complexidade. Você participa de cada etapa e aprova antes do lançamento."
    },
    {
        question: "E se eu ainda não tiver boas fotos ou muito conteúdo?",
        answer: "Eu oriento a produção do material, seleciono bancos de imagem profissionais quando fizer sentido e crio uma estrutura que valoriza o que o seu negócio já tem hoje."
    },
    {
        question: "Vou precisar ficar atualizando o site?",
        answer: "O site já sai otimizado e funcionando. Se quiser atualizar portfólio ou serviços, o painel é simples — ou posso fazer por você com um plano de manutenção."
    },
    {
        question: "Em quanto tempo vou ver resultados?",
        answer: "O site já nasce pronto para receber e converter visitas. O prazo para gerar novos contatos varia conforme mercado, divulgação e concorrência; no SEO, a visibilidade cresce de forma progressiva e consistente."
    },
    {
        question: "Por que escolher um site sob medida?",
        answer: "Porque o site precisa refletir a personalidade, o público e os objetivos do seu negócio. Cada seção é pensada para comunicar seu valor e conduzir o visitante ao contato — não apenas para preencher um template."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-black py-24 relative overflow-visible">
            <SectionDivider label="FAQ" />

            <div className="container mx-auto px-6 mt-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-white mb-16 leading-tight uppercase text-center md:text-left"
                    >
                        Dúvidas antes de dar <br />
                        <span className="text-gold italic italic-serif-style">o próximo passo?</span>
                    </motion.h2>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-b border-white/10"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                                >
                                    <h3 className={`text-lg md:text-xl font-body transition-colors duration-300 ${activeIndex === index ? 'text-gold' : 'text-white group-hover:text-gold/80'}`}>
                                        {item.question}
                                    </h3>
                                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        {activeIndex === index ? (
                                            <Minus className="text-gold w-6 h-6" />
                                        ) : (
                                            <Plus className="text-white/40 group-hover:text-gold w-6 h-6" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 font-body text-base md:text-lg leading-relaxed pb-8 max-w-3xl">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
