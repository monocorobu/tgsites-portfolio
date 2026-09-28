"use client";

import { useState } from "react";
import Link from "next/link";
import { Article } from "../lib/articles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import { motion, AnimatePresence } from "framer-motion";

export default function ArticlesClient({ articles }: { articles: Article[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    // Pagination logic
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="bg-black min-h-screen text-white pt-[70px]">
            <Navbar isDark={true} />

            {/* Intro Section */}
            <section className="container py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="label mb-4 block">Conhecimento & Tendências</span>
                    <h1 className="mb-8 font-display font-black text-white uppercase tracking-tight text-5xl md:text-8xl">ARTIGOS</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Conteúdos sobre criação de sites, design, SEO, performance e estratégias para fortalecer a presença digital de negócios e profissionais.
                    </p>
                </motion.div>
            </section>

            <SectionDivider label="Explorar Conteúdo" />

            {/* Articles List */}
            <section className="container py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {currentArticles.map((article, index) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="h-full flex"
                            >
                                <Link
                                    href={`/artigos/${article.slug}`}
                                    className="group flex flex-col w-full border-2 border-white/10 p-6 hover:border-gold transition-colors duration-300 bg-gray-900/50"
                                >
                                    <div className="aspect-video mb-6 overflow-hidden bg-gray-800 flex-shrink-0">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                                        <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                                            {new Date(article.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                                        </span>
                                        <span className="h-px flex-1 bg-white/10"></span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold uppercase mb-4 group-hover:text-gold transition-colors leading-tight flex-shrink-0">
                                        {article.title}
                                    </h3>
                                    <div className="flex-grow">
                                        <p className="text-gray-400 text-sm mb-8 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white group-hover:text-gold transition-colors mt-auto flex-shrink-0">
                                        Ler Artigo
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-24 flex items-center justify-center gap-4">
                        <button
                            onClick={() => paginate(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`w-12 h-12 flex items-center justify-center border-2 border-white/10 transition-colors ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:border-gold hover:text-gold cursor-pointer"}`}
                        >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                            </svg>
                        </button>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`w-12 h-12 flex items-center justify-center font-bold transition-all ${currentPage === number ? "bg-gold text-black scale-110 shadow-lg shadow-gold/20" : "border-2 border-white/10 hover:border-gold text-white"}`}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`w-12 h-12 flex items-center justify-center border-2 border-white/10 transition-colors ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:border-gold hover:text-gold cursor-pointer"}`}
                        >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
