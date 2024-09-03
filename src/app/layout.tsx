import type { Metadata } from "next";
import { Inder } from "next/font/google";
import "./globals.css";

const inder = Inder({ subsets: ["latin"], weight: '400'});

export const metadata: Metadata = {
  title: "I've Watched App",
  description: "Track your Animes, TV Series and Movies progress!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inder.className}>{children}</body>
    </html>
  );
}
