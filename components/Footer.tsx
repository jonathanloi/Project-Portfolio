export default function Footer() {
  return (
    <footer className="border-t border-black py-10">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm">
        <p>© 2026 Jonathan Loi. Built with Next.js.</p>
        <div className="mt-4 flex justify-center gap-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="mailto:you@email.com"
            className="hover:underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
