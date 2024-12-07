import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stephanie Egbuonu",
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
      <body>{children}</body>
    </html>
  );
}
