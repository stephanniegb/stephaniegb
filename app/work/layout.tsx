import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Stephanie Egbuonu",
  description: "Stephanie Egbuonu's works",
};
export default function Worklayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
