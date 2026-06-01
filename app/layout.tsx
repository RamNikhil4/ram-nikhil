import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ram Nikhil Teja | Frontend Developer",
  description:
    "Portfolio of Ram Nikhil Teja Budide — a frontend developer specializing in React, TypeScript, and scalable web applications.",
  keywords: [
    "Ram Nikhil Teja",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Ram Nikhil Teja Budide" }],
  openGraph: {
    title: "Ram Nikhil Teja | Frontend Developer",
    description:
      "Building high-performance, beautifully crafted web interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-bg-primary text-text-primary font-body flex min-h-full flex-col relative">
        {children}
      </body>
    </html>
  );
}
