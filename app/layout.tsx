import "./globals.css";
import type { Metadata } from "next";
import { portfolioProfile } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Facundo Sola | Perfil junior en formación",
  description:
    "Portfolio de Facundo Sola con perfil junior en formación, proyectos reales de GitHub y certificados verificados en desarrollo de software, IA, SQL y ciberseguridad.",
  metadataBase: new URL(portfolioProfile.siteUrl),
  openGraph: {
    title: "Facundo Sola | Perfil junior en formación",
    description:
      "Proyectos reales, formación actual y certificados verificados en software, IA, SQL y ciberseguridad.",
    url: portfolioProfile.siteUrl,
    siteName: "Facundo Sola",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-[#05060a] text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
