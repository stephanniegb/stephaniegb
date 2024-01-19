import "./globals.css";
import "./animations.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import SmoothScroll from "./SmoothScroll";

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
      <body className="bg-[#0f0f0f] text-[#090908]">
        <Suspense fallback={<Loading />}>
          <SmoothScroll>{children}</SmoothScroll>
        </Suspense>
      </body>
    </html>
  );
}
