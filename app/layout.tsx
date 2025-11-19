import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facundo Sola – Portafolio Futurista",
  description:
    "Portafolio de Facundo Sola: desarrollo de software, IA aplicada y arquitectura moderna.",
  metadataBase: new URL("https://facundosola.vercel.app"),
  openGraph: {
    title: "Facundo Sola – Portafolio Futurista",
    description:
      "Desarrollo de software, IA aplicada y arquitectura moderna.",
    url: "https://facundosola.vercel.app",
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
