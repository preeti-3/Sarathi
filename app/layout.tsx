import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Serif_Devanagari, Noto_Serif } from "next/font/google";
import "./globals.css";
import { BackgroundLayers } from "@/components/BackgroundLayers";
import { AmbientSoundToggle } from "@/components/AmbientSoundToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sarathi - The Battle Is Within",
  description: "An immersive spiritual experience inspired by the Bhagavad Gita. Ancient wisdom for modern warriors standing at their own Kurukshetra.",
  keywords: ["Bhagavad Gita", "spiritual growth", "Kurukshetra", "Krishna", "devotional", "wisdom", "meditation"],
  authors: [{ name: "Sarathi" }],
  openGraph: {
    title: "Sarathi - The Battle Is Within",
    description: "Ancient wisdom for modern warriors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifDevanagari.variable} ${notoSerif.variable} antialiased min-h-screen bg-background overflow-x-hidden`}
      >
        {/* Layered background system - GPU accelerated */}
        <BackgroundLayers />

        {/* Main content - scrolls over fixed background */}
        <div className="relative z-10 min-h-screen scroll-optimized">
          {children}
        </div>

        {/* Ambient sound toggle */}
        <AmbientSoundToggle />
      </body>
    </html>
  );
}
