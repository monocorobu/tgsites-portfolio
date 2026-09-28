import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import { articles } from "../lib/articles";

export const metadata: Metadata = {
    title: "Mapa do Site | TGSITES",
    description: "Encontre todas as páginas, serviços, projetos e artigos publicados pela TGSITES.",
    alternates: {
        canonical: "https://tgsites.com.br/mapa-do-site/",
    },
};

const mainLinks = [
    { label: "Página inicial", href: "/" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Sobre a TGSITES", href: "/#sobre" },
    { label: "Para quem criamos", href: "/#publico" },
    { label: "Projetos recentes", href: "/#projetos" },
    { label: "Perguntas frequentes", href: "/#faq" },
    { label: "Todos os artigos", href: "/artigos" },
];

export default function SiteMapPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-[70px]">
            <Navbar isDark />

            <section className="container py-20 md:py-28">
                <span className="label mb-4 block">Navegação completa</span>
                <h1 className="max-w-5xl font-display text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.95]">
                    Mapa do <span className="text-gold">site</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
                    Acesse rapidamente todas as áreas e conteúdos publicados pela TGSITES.
                </p>
            </section>

            <SectionDivider label="Páginas principais" />

            <section className="container py-20 md:py-24">
                <nav aria-label="Páginas principais" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {mainLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group flex min-h-24 items-center justify-between border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold"
                        >
                            <span className="font-display text-xl uppercase tracking-tight group-hover:text-gold">
                                {link.label}
                            </span>
                            <span className="text-xs text-gold/60">{String(index + 1).padStart(2, "0")}</span>
                        </Link>
                    ))}
                </nav>
            </section>

            <SectionDivider label="Todos os artigos" />

            <section className="container py-20 md:py-24">
                <nav aria-label="Artigos publicados">
                    <ol className="grid gap-x-12 md:grid-cols-2">
                        {articles.map((article, index) => (
                            <li key={article.slug} className="border-b border-white/10">
                                <Link
                                    href={`/artigos/${article.slug}`}
                                    className="group flex items-start gap-5 py-5 text-gray-300 transition-colors hover:text-gold"
                                >
                                    <span className="mt-1 text-[10px] font-bold tracking-widest text-gold/50">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="leading-snug group-hover:translate-x-1 transition-transform">
                                        {article.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>
            </section>

            <Footer />
        </main>
    );
}
