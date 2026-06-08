import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import React from "react";
import TopBar from "@/components/layout/Navbar/TopBar";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";

const geistSans = localFont({
  src: "./fonts/Geist[wght].woff2",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yahweh Run Orphanage Foundation | Hope, Love & A Brighter Future",
  description: "Yahweh Run Orphanage Foundation is a non-profit organization dedicated to rescuing, rehabilitating, and reintegrating vulnerable children in Nigeria. Join us in making a difference.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geistSans.variable)}>
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <HolyLoader color="#D4AF37" />
            <TopBar />
            <NavBar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
