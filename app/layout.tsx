import Cursor from "./components/Cursor";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stephanie Egbuonu",
  description:
    "Stephanie Egbuonu is a Frontend Software Engineer and this is her portfolio",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
