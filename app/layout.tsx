// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://facundosola.vercel.app";
const title = "Facundo Sola | Desarrollo de Software, Ciberseguridad e IA";
const description =
  "Portafolio de Facundo Sola: desarrollo de software junior, ciberseguridad e IA aplicada con foco en proyectos reales, formación técnica y contacto profesional.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Facundo Sola",
  },
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    title,
    description,
    url: siteUrl,
    siteName: "Facundo Sola",
    images: [
      {
        url: "/facundo-hero.jpg",
        width: 1920,
        height: 1080,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/facundo-hero.jpg"],
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
