import Link from "next/link";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Contact | Jonathan Loi",
  description: "Get in touch with Jonathan Loi",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <BackButton />

      <div className="mt-10 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
          Get in touch
        </h1>

        <p className="mt-10 text-neutral-600 leading-relaxed">
          I’m currently open to new opportunities and collaborations.
          Feel free to reach out if you’d like to connect.
        </p>

        {/* Contact methods */}
        <div className="mt-12 space-y-6">
          <div className="border border-black p-6 rounded-2xl">
            <p className="text-sm text-neutral-500 mb-1">Email</p>
            <a
              href="mailto:jonathanloiwk@gmail.com"
              className="text-lg hover:underline underline-offset-4"
            >
              jonathanloiwk@gmail.com
            </a>
          </div>

          <div className="border border-black p-6 rounded-2xl">
            <p className="text-sm text-neutral-500 mb-1">LinkedIn</p>
            <a
              href="https://linkedin.com/in/jonathan-loi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline underline-offset-4"
            >
              linkedin.com/in/jonathan-loi
            </a>
          </div>

          <div className="border border-black p-6 rounded-2xl">
            <p className="text-sm text-neutral-500 mb-1">GitHub</p>
            <a
              href="https://github.com/jonathanloi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline underline-offset-4"
            >
              github.com/jonathanloi
            </a>
          </div>
        </div>

        <p className="mt-12 text-sm text-neutral-500">
          I usually reply within 1–2 days.
        </p>
      </div>
    </div>
  );
}
