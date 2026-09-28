import type { MetadataRoute } from "next";
import { articles } from "./lib/articles";

const siteUrl = "https://tgsites.com.br";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
            images: [
                `${siteUrl}/placeholder-user.jpg`,
                `${siteUrl}/Webdesigner-em-Caçapava.jpg`,
            ],
        },
        {
            url: `${siteUrl}/artigos/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/mapa-do-site/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.3,
        },
    ];

    const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${siteUrl}/artigos/${article.slug}/`,
        lastModified: new Date(`${article.date}T12:00:00-03:00`),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticPages, ...articlePages];
}
