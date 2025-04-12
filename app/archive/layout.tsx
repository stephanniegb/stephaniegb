import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | Stephanie Egbuonu",
  description:
    "Stephanie Egbuonu projects archive. A collection of projects that I have worked on in the past.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
