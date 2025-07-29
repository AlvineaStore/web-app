import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const siteConfig = {
  title: "AlvineaStore",
  description: `AlvineaStore est une boutique en ligne spécialisée dans la vente de logiciels tech, ainsi que le partage ou la licence d'accès à des services numériques.`,
  logo: "/images/alvinea.webp",
  mode: "light",
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: title ? `${title} | AlvineaStore` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - AlvineaStore` : siteConfig.title,
      description,
      url: "https://alvineastore.com",
      siteName: "AlvineaStore",
      images: {
        url: "/images/alvinea-og.webp",
        width: 1200,
        height: 630,
      },
      locale: "fr_FR",
      type: "website",
    },
  };
};
