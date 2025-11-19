// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://facundosola.vercel.app";
const title = "Facundo Sola – Portafolio Futurista";
const description =
  "Portafolio de Facundo Sola: desarrollo de software, IA aplicada y arquitectura moderna.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
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
