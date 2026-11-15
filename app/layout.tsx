import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const ethnocentric = localFont({
  src: "./fonts/Ethnocentric-Regular.otf",
  variable: "--font-ethnocentric",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - 3T.tech",
  description: "Portfolio de 3T.tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("h-full", geist.className, ethnocentric.variable)}>
      <body className="min-h-full bg-background text-foreground antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
