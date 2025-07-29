import type { Metadata } from "next";
// import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { metaObject } from "@/config/site.config";
import localFont from "next/font/local";

export const bricolage = localFont ({
  src: [
    {
      path: './../../public/fonts/Bricolage_Grotesque/static/BricolageGrotesque-Light.ttf',
      weight: '400',
      style: 'Light',
    },
    {
      path: './../../public/fonts/Bricolage_Grotesque/static/BricolageGrotesque-Bold.ttf',
      weight: '700',
      style: 'Bold',
    },
  ],
  variable: '--font-bricolage',
});
export const metadata: Metadata = metaObject(
  "Accueil",
  undefined,
  "Bienvenue sur AlvineaStore, votre boutique en ligne pour les logiciels tech et services numériques."
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
