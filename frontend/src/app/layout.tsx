import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./scrapbook.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scrapbook Studio · Platform Album Kenangan & Pernikahan",
  description: "Platform pembuatan album scrapbook kenangan pernikahan, milad, dan momen spesial dengan kertas linen artisan, polaroid, stiker, dan kit cetak terpisah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${caveat.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#f7f4ed] text-[#42382f]">
        {children}
      </body>
    </html>
  );
}
