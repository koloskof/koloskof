import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased h-full bg-background flex flex-col`}
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
