import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Josefin_Slab } from "next/font/google";

const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
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
  title: "Anurag Shrestha",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSlab.variable} antialiased bg-slate-300 relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
