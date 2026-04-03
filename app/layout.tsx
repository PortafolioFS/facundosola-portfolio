import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facundo Sola | Desarrollo de Software, IA y Ciberseguridad",
  description:
    "Portfolio de Facundo Sola con proyectos reales, formación en desarrollo de software y certificados en IA, SQL y ciberseguridad.",
  metadataBase: new URL("https://facundosola.vercel.app"),
  openGraph: {
    title: "Facundo Sola | Desarrollo de Software, IA y Ciberseguridad",
    description:
      "Proyectos reales, formación actual y certificados verificados en software, IA, SQL y ciberseguridad.",
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
