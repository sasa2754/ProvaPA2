import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Menu } from "@/components/menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DragonBall Prova",
  description: "Prova PA com DragonBall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50 overflow-x-hidden`}
      >
        <Menu op1="fetchPage" op2="axiosPage" op3="fetchServer"/>
        {children}
      </body>
    </html>
  );
}