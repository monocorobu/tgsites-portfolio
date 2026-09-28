"use client";

import HeroMarquee from "./HeroMarquee";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-20 bg-white">
            {/* Marquee Infinito de Fundo (Efeito Invertido) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] mix-blend-difference">
                <HeroMarquee className="text-white opacity-80" />
            </div>

            {/* Imagem do Especialista (No fundo) */}
            <div className="absolute top-1/2 bottom-0 left-0 right-0 md:inset-0 z-0 pointer-events-none select-none opacity-90 mix-blend-multiply">
                <Image
                    src="/placeholder-user-2.png"
                    alt="Thales Gabriel - Especialista em sites e presença digital"
                    fill
                    className="object-cover object-top md:object-contain md:object-bottom drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Container para o conteúdo do topo */}
            <div className="relative z-20 flex flex-col md:flex-row justify-between items-start w-full px-4 md:px-16 mb-auto pt-4 md:pt-0 gap-6 md:gap-0">
                <div className="text-left max-w-md w-full">
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
                        Desenvolvedor de sites e estrategista de presença digital. Cada projeto é criado para comunicar o valor da sua marca, gerar oportunidades e apoiar o crescimento do seu negócio.
                    </p>
                </div>

                <div className="text-left md:text-right max-w-4xl w-full">
                    <h2 className="leading-[0.95] text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-8xl text-black font-body font-light uppercase tracking-tight ">
                        SITES EXCLUSIVOS
                        <br />
                        <span className="text-gold font-highlight font-bold">PARA QUEM QUER MUDAR O JOGO</span>
                    </h2>
                </div>
            </div>

            {/* Container para o conteúdo de baixo */}
            <div className="relative z-20 flex flex-col md:flex-row justify-between items-end w-full px-4 md:px-16 mt-auto pb-10 gap-8 md:gap-0">
                <div className="w-full md:w-auto">
                    <SocialLinks />
                </div>

                <div className="text-right w-full md:w-auto mt-4 md:mt-0">
                    <h2 className="font-highlight font-medium text-xl sm:text-2xl md:text-4xl lg:text-xl xl:text-6xl tracking-tighter text-gold uppercase leading-[0.85]">
                        {"// ESPECIALISTA EM"}
                        <br />
                        <span className="text-black font-body font-bold">SITES DE VERDADE</span>
                    </h2>
                </div>
            </div>

            <Link
                href="/mapa-do-site"
                className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-black/30 transition-colors hover:text-black/70 focus:text-black/70"
            >
                Mapa do site
            </Link>
        </footer>
    );
}
