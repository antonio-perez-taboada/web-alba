import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web de Alba - Personajes Animados",
  description: "Sitio web dedicado a personajes de series animadas y superhéroes: Bob Esponja, Doctora Juguetes, Superman, Mario Bros y Mickey Mouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
