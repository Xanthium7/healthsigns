import type React from "react";
import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react";

import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

// Font definitions with fallbacks
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HealthSigns - AI-Powered Healthcare Solutions",
  description:
    "Transforming healthcare with AI-powered remote patient monitoring solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${jakarta.variable} font-sans`}
      >
        <div className="hidden lg:block">
          <SmoothCursor />
        </div>
        <ReactLenis root>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
