"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useCallback, useState } from "react";
import HeroMarquee from "@/components/HeroMarquee";
import SocialLinks from "@/components/SocialLinks";
import Navbar from "@/components/Navbar";
import Image from "next/image";

// ── Lazy-load all below-fold sections (zero impact on initial render) ──
const BannerCTA = dynamic(() => import("@/components/BannerCTA"));
const PainPoints = dynamic(() => import("@/components/PainPoints"));
const SolutionSection = dynamic(() => import("@/components/SolutionSection"));
const ServicesSticky = dynamic(() => import("@/components/ServicesSticky"));
const EbookBannerCTA = dynamic(() => import("@/components/EbookBannerCTA"));
const AboutMe = dynamic(() => import("@/components/AboutMe"));
const TargetAudience = dynamic(() => import("@/components/TargetAudience"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

export default function HomePage() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Lightweight rAF-based parallax — no framer-motion on the critical path
  const handleScroll = useCallback(() => {
    if (!parallaxRef.current) return;
    const y = window.scrollY * 0.35;
    parallaxRef.current.style.transform = `translateY(${y}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <main className="min-h-screen">

      <div id="inicio" className="relative z-10 bg-white">

        {/* ── Hero Section ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-10 md:py-20 bg-white">

          {/* LCP image — opacity fixa, sem animação, para Lighthouse medir imediatamente */}
          <div
            ref={parallaxRef}
            aria-hidden="true"
            className="absolute top-1/2 bottom-0 left-0 right-0 md:inset-0 z-0 pointer-events-none select-none mix-blend-multiply"
            style={{ willChange: "transform", opacity: 0.9 }}
          >
            <Image
              src="/placeholder-user.jpg"
              alt="Especialista TGSITES"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-top md:object-contain md:object-bottom drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          {/* Marquee de fundo — CSS puro, sem JS */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] mix-blend-difference">
            <HeroMarquee className="text-white opacity-80" />
          </div>

          {/* Topo: Descrição + Título */}
          <div className="relative z-20 flex flex-col md:flex-row justify-between items-start w-full px-4 md:px-16 mb-auto pt-4 md:pt-0 gap-6 md:gap-0">
            <div className="text-left max-w-md w-full hero-slide-left">
              <p className="text-sm md:text-base lg:text-sm xl:text-lg text-gray-600 font-medium leading-relaxed">
                Eu crio sites estratégicos para empresas, marcas e profissionais que querem ser encontrados, transmitir confiança e transformar visitas em novos contatos.
              </p>
            </div>

            <div className="text-left md:text-right max-w-4xl w-full hero-slide-right">
              <h1 className="leading-[0.95] text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-7xl text-black font-body font-light uppercase tracking-tight">
                SITES EXCLUSIVOS
                <br />
                <span className="text-gold font-highlight font-bold">PARA NEGÓCIOS QUE QUEREM CRESCER</span>
              </h1>
            </div>
          </div>

          {/* Baixo: Social + Label */}
          <div className="relative z-20 flex flex-col md:flex-row justify-between items-end w-full px-4 md:px-16 mt-auto pb-10 gap-8 md:gap-0">
            <div className="w-full md:w-auto hero-slide-left" style={{ animationDelay: "0.2s" }}>
              <SocialLinks />
            </div>

            <div className="text-right w-full md:w-auto mt-4 md:mt-0 hero-slide-right" style={{ animationDelay: "0.15s" }}>
              <h2 className="font-highlight font-medium text-xl sm:text-2xl md:text-4xl lg:text-xl xl:text-6xl tracking-tighter text-gold uppercase leading-[0.85]">
                {"// ESPECIALISTA EM"}
                <br />
                <span className="text-black font-body font-bold">PRESENÇA DIGITAL</span>
              </h2>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block hero-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gold rounded-full"></div>
            </div>
          </div>
        </section>

        {/* ── Seções abaixo do fold (lazy-loaded) ── */}
        <div id="conteudo-principal">
          <BannerCTA />
          <PainPoints />
          <SolutionSection />
          <ServicesSticky />
          <EbookBannerCTA />
          <AboutMe />
          <TargetAudience />
          <ProjectsSection />
          <FAQ />
          <FinalCTA />
        </div>
      </div>

      {/* Footer fixo atrás do conteúdo */}
      <div className="fixed bottom-0 left-0 w-full h-screen z-0">
        <Footer />
      </div>
      <div className="h-screen pointer-events-none" />

      <Navbar />
      <WhatsAppButton />
    </main>
  );
}
