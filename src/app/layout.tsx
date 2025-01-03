import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "./navbar";
import Footer from "./footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>senera</title>
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* <Navbar /> */}

        <main className="flex-grow">{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
