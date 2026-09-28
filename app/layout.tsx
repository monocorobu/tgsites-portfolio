import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SecurityProvider from "./components/SecurityProvider";

// Self-hosted via next/font — zero external request at runtime
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "optional",
  variable: "--font-roboto",
  preload: true,
});



export const metadata: Metadata = {
  title: "Criação de Sites e Presença Digital | TGSITES",
  description: "Criação de sites profissionais, landing pages, portfólios e soluções de presença digital para empresas, marcas e profissionais. Caçapava e Vale do Paraíba.",
  keywords: ["criação de sites", "site profissional", "webdesigner", "landing page", "site institucional", "loja virtual", "presença digital", "SEO local", "Google Maps", "TGSITES", "Caçapava", "Vale do Paraíba"],
  authors: [{ name: "TGSITES" }],
  alternates: {
    canonical: "https://tgsites.com.br",
  },
  openGraph: {
    title: "Criação de Sites e Presença Digital | TGSITES",
    description: "Sites profissionais e soluções digitais para transformar a presença online de empresas, marcas e profissionais.",
    url: "https://tgsites.com.br",
    siteName: "TGSITES",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon (2).svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <head>
        {/* Preload do LCP image — browser busca antes de parsear JS */}
        <link
          rel="preload"
          href="/placeholder-user.jpg"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body suppressHydrationWarning>
        <SecurityProvider>
          {children}
        </SecurityProvider>
      </body>
    </html>
  );
}
