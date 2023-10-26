import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/Cursor";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Stephanie Egbuonu",
  description:
    "Stephanie Egbuonu is a Front End Software Engineer and this is her portfolio",
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        {/* <Cursor /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
