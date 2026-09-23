import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freemann Firms Ecosystem | Unified Financial Gateway",
  description:
    "Explore the Freemann Firms ecosystem of performance-driven wealth management, AI quant trading engines, and institutional custody.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#18181b] antialiased selection:bg-[#a500a3]/20 selection:text-[#a500a3]">
        {children}
      </body>
    </html>
  );
}
