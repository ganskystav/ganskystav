import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "../styles/header.css";
import "../styles/hero.css";
import "../styles/about.css";
import "../styles/services.css";
import "../styles/footer.css";
import "../styles/responsive.css";
import "../styles/contact.css";
import "../styles/advantages.css";
import "../styles/gallery.css";
import "../styles/process.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ganskystav.cz"),

  title: {
    default: "GANSKY STAV s.r.o. | Stavební firma České Budějovice",
    template: "%s | GANSKY STAV",
  },

  description:
    "Profesionální stavební společnost. Rekonstrukce bytů, domů, koupelen, stavební práce a kompletní realizace projektů po celé České republice.",

  keywords: [
    "stavební firma",
    "rekonstrukce",
    "rekonstrukce bytů",
    "rekonstrukce domů",
    "rekonstrukce koupelen",
    "stavební práce",
    "České Budějovice",
    "GANSKY STAV",
    "zednické práce",
    "stavební společnost",
  ],

  authors: [{ name: "GANSKY STAV s.r.o." }],

  creator: "GANSKY STAV s.r.o.",

  publisher: "GANSKY STAV s.r.o.",

  alternates: {
    canonical: "https://ganskystav.cz",
  },

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://ganskystav.cz",
    siteName: "GANSKY STAV s.r.o.",
    title: "GANSKY STAV s.r.o.",
    description:
      "Profesionální stavební firma z Českých Budějovic. Rekonstrukce, stavební práce a kompletní realizace projektů.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}