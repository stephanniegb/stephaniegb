import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Stephanie Egbuonu",
  description: "Stephanie Egbuonu's Resume",
};
export default function Resumelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
