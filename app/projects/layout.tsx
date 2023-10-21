import Link from "next/link";
export default function Projectslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav>
        <Link href={"/"}>Link to home</Link>
      </nav>
      {children}
      <footer>Foot</footer>
    </main>
  );
}
