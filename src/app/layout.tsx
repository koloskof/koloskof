import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Колосков | Блог о финтехе",
  description: "Размышления о финтехе, банкинге и цифровых технологиях",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background flex flex-col`}
      >
        <div className="flex-1">
          {children}
        </div>
        
        <footer className="border-t border-border mt-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="text-center text-sm text-muted-foreground">
              <p>КОЛОСКОВ™</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
