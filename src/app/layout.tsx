import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheseOn",
  description: "TheseOn app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-300 dark:bg-black text-black dark:text-white scroll-smooth md:scroll-auto" ${inter.className}`}
      >
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
