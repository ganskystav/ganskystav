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
  title: "GANSKY STAV s.r.o.",
  description:
    "Rekonstrukce bytů, domů a stavební práce v Českých Budějovicích.",
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