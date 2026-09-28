"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import { Article } from "@/lib/articles";

export default function ArticleDetailClient({ article }: { article: Article }) {
    return (
        <main className="bg-black min-h-screen text-white pt-[70px]">
            <Navbar isDark={true} />

            <article>
                {/* Header */}
                <header className="container py-20 border-b border-white/5">
                    <Link
                        href="/artigos"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-gold mb-12 hover:-translate-x-1 transition-transform"
                    >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                        </svg>
                        Voltar para Artigos
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="label mb-4 block">
                            {new Date(article.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                        </span>
                        <h1 className="mb-12 max-w-5xl font-display font-black text-white uppercase tracking-tight text-4xl md:text-7xl leading-[0.9]">{article.title}</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="aspect-[21/9] w-full mt-12 overflow-hidden bg-gray-900 border-2 border-white/10"
                    >
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover grayscale"
                        />
                    </motion.div>
                </header>

                {/* Content Section */}
                <section className="container py-24 flex flex-col lg:flex-row gap-20">
                    {/* Main Body */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 max-w-3xl"
                    >
                        <div
                            className="prose prose-invert prose-gold max-w-none 
                prose-h3:font-display prose-h3:uppercase prose-h3:text-3xl prose-h3:font-black prose-h3:mt-16 prose-h3:mb-8
                prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
                prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-8 prose-li:mb-4
                prose-li:before:content-['//'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-gold prose-li:before:font-display prose-li:before:font-bold
                prose-strong:text-white prose-strong:font-bold"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </motion.div>

                    {/* Sidebar / Info */}
                    <aside className="lg:w-80 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border-t-2 border-gold pt-8"
                        >
                            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-6">Compartilhar</h4>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-gold transition-colors">
                                    <span className="text-xs font-bold font-display">TW</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-gold transition-colors">
                                    <span className="text-xs font-bold font-display">LN</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-gold transition-colors">
                                    <span className="text-xs font-bold font-display">FB</span>
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-gray-900/50 p-8 border border-white/5"
                        >
                            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-4">Destaque</h4>
                            <p className="text-sm text-gray-400">Este conteúdo faz parte da nossa série sobre sites, marketing e presença digital para negócios.</p>
                        </motion.div>
                    </aside>
                </section>

                <SectionDivider label="Sobre o Autor" />

                {/* Author Section */}
                <section className="container py-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white text-black p-12 md:p-20 relative overflow-hidden group"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-black flex-shrink-0">
                                <img
                                    src="/perfil-thales.webp"
                                    alt="Thales Webdesigner"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-xs uppercase tracking-[0.3em] font-black text-gold-dark mb-4 block">Autor do Artigo</span>
                                <h2 className="text-black mb-6 !text-4xl md:!text-5xl font-display font-black uppercase">Thales Webdesigner</h2>
                                <p className="text-lg font-medium leading-relaxed mb-8 text-black/80">
                                    Especialista em criar sites e presença digital para empresas, marcas e profissionais. Uno estratégia, design e alta performance para transformar negócios em referências online.
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=5512991015387"
                                    className="btn bg-black text-white hover:bg-gold hover:text-black hover:border-gold transition-all"
                                >
                                    Trabalhar comigo
                                </a>
                            </div>
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 p-8 opacity-5 select-none pointer-events-none">
                            <span className="text-9xl font-display font-black">TGSITES</span>
                        </div>
                    </motion.div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
