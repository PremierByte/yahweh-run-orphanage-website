import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import TopBar from "@/components/layout/Navbar/TopBar";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = localFont({
  src: [
    {
      path: "/fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${geistSans.variable} antialiased`}>
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
