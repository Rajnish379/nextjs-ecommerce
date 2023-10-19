import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider"

const inter = Inter({ subsets: ["latin"] });
// This file is wrapped around all of our pages , Our pages are inside the main tag of this file. All of our pages have Inter as their text font thanks to this layout
export const metadata: Metadata = {
  title: "Konespo",
  description: "We make your wallet cry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        <Navbar/>
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
        <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
