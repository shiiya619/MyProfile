import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const sans = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const display = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.name ? `${profile.name} | ${profile.site.title}` : profile.site.title,
  description: profile.site.description || undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
