"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
    { name: "Início", href: "/#inicio" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Artigos", href: "/artigos" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Projetos", href: "/#projetos" },
    { name: "FAQ", href: "/#faq" },
];

export default function Navbar({ isDark = false }: { isDark?: boolean }) {
    const [hidden, setHidden] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const previous = lastScrollY.current;

            if (currentY < previous || currentY < 50) {
                setHidden(false);
            } else if (currentY > previous && currentY > 150) {
                setHidden(true);
                setIsOpen(false);
            }

            setAtTop(currentY < 50);
            lastScrollY.current = currentY;

            // Update CSS variable for SectionDivider coordination
            document.documentElement.style.setProperty(
                "--navbar-offset",
                currentY < 150 ? "70px" : "0px"
            );
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar — CSS transitions only, no framer-motion */}
            <nav
                style={{
                    transform: hidden ? "translateY(-100%)" : "translateY(0)",
                    transition: "transform 0.35s ease-in-out",
                }}
                className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${atTop ? "bg-transparent" : (isDark ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-white/80 backdrop-blur-md border-b border-black/5")
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[70px] flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <img
                                src="/Icon-tgsites-Black.svg"
                                alt="TGSITES Logo"
                                className={`w-full h-full object-contain ${isDark ? "brightness-0 invert" : ""}`}
                            />
                        </div>
                        <span className={`font-display font-bold tracking-tighter text-xl ${(isDark || !atTop) ? "text-white" : "text-black"}`}>
                            TGSITES
                        </span>
                    </a>

                    {/* Links - Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${isDark ? "text-white/60 hover:text-gold" : "text-black/60 hover:text-gold"}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Estava+no+seu+site+e+gostaria+de+solicitar+um+orçamento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
                        >
                            Orçamento
                        </a>
                    </div>

                    {/* Mobile Menu Button — CSS transitions */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col items-end gap-1.5 focus:outline-none p-2"
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        <span
                            style={{
                                transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
                                transition: "transform 0.25s ease",
                                display: "block",
                            }}
                            className={`w-6 h-px ${isDark ? "bg-white" : "bg-black"}`}
                        />
                        <span
                            style={{
                                opacity: isOpen ? 0 : 1,
                                transition: "opacity 0.2s ease",
                                display: "block",
                            }}
                            className={`w-4 h-px ${isDark ? "bg-white" : "bg-black"}`}
                        />
                        <span
                            style={{
                                transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                                transition: "transform 0.25s ease",
                                display: "block",
                            }}
                            className={`w-6 h-px ${isDark ? "bg-white" : "bg-black"}`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay — CSS transitions */}
            <div
                style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: isOpen ? "auto" : "none",
                }}
                className="fixed inset-0 bg-white z-[90] md:hidden flex flex-col items-center justify-center gap-8"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-display font-light uppercase tracking-[0.2em] text-black hover:text-gold transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Estava+no+seu+site+e+gostaria+de+falar+no+WhatsApp."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-gold text-black font-body font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-xl"
                >
                    Falar no WhatsApp
                </a>
            </div>
        </>
    );
}
