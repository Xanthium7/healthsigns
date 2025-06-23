import type React from "react";
import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";

import "./globals.css";

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
        {" "}
        <div className="hidden lg:block">{/* <SmoothCursor /> */}</div>
        <ReactLenis root>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReactLenis>{" "}
        {/* Sticky Footer */}
        <Link href="/contact">
          <div className="fixed bottom-6 right-6 z-50 group cursor-pointer">
            <div className="bg-accent hover:bg-accent/90 text-primary-foreground p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 w-12 h-12 group-hover:w-44 overflow-hidden">
              <MessagesSquare className="w-6 h-6 flex-shrink-0" />
              <span className="text-sm text-right font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100 transform translate-x-2 group-hover:translate-x-2">
                Get in Touch
              </span>
            </div>
          </div>
        </Link>
      </body>
    </html>
  );
}
