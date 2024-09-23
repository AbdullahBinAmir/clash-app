import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import {cn} from '@/lib/utils'
const inter = FontSans({ subsets: ["latin"], variable:"--font-sans" });

export const metadata: Metadata = {
  title: "Clash App",
  description: "a clash app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-slate-50 font-sans antialiased",inter.variable)}>{children}</body>
    </html>
  );
}
