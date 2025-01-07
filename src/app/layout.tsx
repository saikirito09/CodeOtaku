import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Load Virgil font
const virgil = localFont({
  src: "../../public/Virgil.woff2",
  variable: "--font-virgil",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeOtaku - Where Anime Meets Code",
  description:
    "A tech blog combining programming tutorials with anime-inspired design",
  keywords: [
    "programming",
    "anime",
    "tech blog",
    "coding tutorials",
    "web development",
  ],
  authors: [{ name: "CodeOtaku" }],
  openGraph: {
    title: "CodeOtaku - Where Anime Meets Code",
    description:
      "A tech blog combining programming tutorials with anime-inspired design",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeOtaku - Where Anime Meets Code",
    description:
      "A tech blog combining programming tutorials with anime-inspired design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${virgil.variable} font-sans antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
