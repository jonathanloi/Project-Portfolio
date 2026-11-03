import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-medium tracking-tight">
          JL
        </Link>

        <nav className="flex gap-8 text-sm">
          <Link href="/allProjects" className="hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
