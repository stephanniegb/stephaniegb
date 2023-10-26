import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Stephanie Egbuonu",
  description: "About Stephanie Egbuonu",
};
export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
