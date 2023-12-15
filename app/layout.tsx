import "./globals.css";
import "./animations.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "./components/cursor/Cursor";

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
      {/* text-[#474747] */}
      <body className="bg-[#0f0f0f] text-[#94948f] ">{children}</body>
    </html>
  );
}
