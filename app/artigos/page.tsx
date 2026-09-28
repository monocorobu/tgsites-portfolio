import { Metadata } from "next";
import { articles } from "../lib/articles";
import ArticlesClient from "./ArticlesClient";

export const metadata: Metadata = {
    title: "Artigos sobre Sites e Presença Digital | TGSITES",
    description: "Conteúdos sobre criação de sites, design, SEO, performance e estratégias para fortalecer a presença digital de negócios e profissionais.",
    alternates: {
        canonical: "https://tgsites.com.br/artigos/",
    },
};

const generalArticleOrder = [
    "importancia-de-um-site-profissional-para-empresas-no-vale-do-paraiba",
    "site-lento-faz-voce-perder-clientes-como-a-velocidade-impacta-as-vendas",
    "diferenca-entre-site-template-e-site-sob-medida",
    "landing-pages-de-alta-conversao",
    "performance-web-e-vendas",
    "por-que-ter-apenas-redes-sociais-nao-e-suficiente-para-profissionais-liberais",
    "quanto-custa-um-site-profissional",
    "como-site-rapido-e-otimizado-aumenta-suas-vendas",
    "o-que-e-site-responsivo-por-que-e-crucial-para-seu-negocio",
    "redesign-de-sites-como-saber-se-chegou-a-hora-de-atualizar",
    "agencia-de-criacao-de-sites-em-cacapava",
    "criacao-de-sites-em-sao-jose-dos-campos",
];

export default function ArticlesPage() {
    const priority = new Map(generalArticleOrder.map((slug, index) => [slug, index]));
    const prioritizedArticles = [...articles].sort((a, b) => {
        const aPriority = priority.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
        const bPriority = priority.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
        return aPriority - bPriority;
    });

    return <ArticlesClient articles={prioritizedArticles} />;
}
