import { notFound } from "next/navigation";
import { Metadata } from "next";
import { articles } from "../../lib/articles";
import ArticleDetailClient from "./ArticleDetailClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Artigo não encontrado",
        };
    }

    return {
        title: `${article.title} | TGSITES`,
        description: article.excerpt,
        alternates: {
            canonical: `https://tgsites.com.br/artigos/${article.slug}/`,
        },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: `https://tgsites.com.br/artigos/${article.slug}/`,
            type: "article",
            publishedTime: article.date,
            images: [article.imageUrl],
        },
    };
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return <ArticleDetailClient article={article} />;
}
