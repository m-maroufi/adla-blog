import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { mikhak } from "./fonts";
import "./globals.css";
import Header from "@/components/layout/Header";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmtn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazirmatn.variable} ${mikhak.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
