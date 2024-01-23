import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import SmoothScroll from "./SmoothScroll";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ShaderContextProvider } from "./context/ShaderContext";

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
      <body className="bg-raven font-thin text-[#090908]">
        <Suspense fallback={<Loading />}>
          <SmoothScroll>
            <GlobalContextProvider>
              <ShaderContextProvider>{children}</ShaderContextProvider>
            </GlobalContextProvider>
          </SmoothScroll>
        </Suspense>
      </body>
    </html>
  );
}
