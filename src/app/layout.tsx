import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { mikhak } from "./fonts";
import "./globals.css";
import Header from "@/components/layout/Header";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmtn",
  weight: ["400", "600", "500"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata = {
  title: "مشاوره وکالت آنلاین عدل آرا",
  description:
    "مشاوره وکالت آنلاین با وکلای پایه یک دادگستری در عدل آرا. دریافت فوری مشاوره حقوقی، کیفری، خانواده، ملکی و قراردادها به‌صورت آنلاین، سریع و محرمانه.",
  icons: {
    icon: "/images/favicon/favicon.ico",
    apple: "/images/favicon/apple-touch-icon.png",
    shortcut: "/images/favicon/favicon-96x96.png",
  },
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
