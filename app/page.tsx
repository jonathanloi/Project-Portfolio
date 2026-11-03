import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";


export default function Home() {
  const featuredProjects = getFeaturedProjects();
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28">
        <p className="mb-3 text-sm tracking-wide">Hello, I’m</p>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          Jonathan Loi
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Engineering Product Development graduate from SUTD. I like turning
          ideas into working products, and I'm now teaching myself web
          development with Next.js. This site is where I practise in public.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="border border-black px-6 py-3 text-sm bg-black text-white hover:bg-white hover:text-black transition-colors rounded-full duration-300"
          >
            Get in touch
          </Link>
          <Link
            href="/about"
            className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors rounded-full duration-300"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-10 text-2xl font-medium tracking-tight">
          Featured Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/allProjects"
            className="text-sm hover:underline underline-offset-4"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-12 text-2xl font-medium tracking-tight">
          Skills
        </h2>

        <div className="space-y-10">
          {/* Background */}
          <div>
            <h3 className="text-sm tracking-wide text-neutral-600 mb-4">
              Background
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Design Thinking",
                "Product Design",
                "3D Printing",
                "Fusion360",
                "Arduino",
                "Team Collaboration",
                "Problem Solving",
                "Semiconductors",
              ].map((skill) => (
                <span
                  key={skill}
                  className="border border-black px-3 py-1.5 text-sm rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-sm tracking-wide text-neutral-600 my-4">
              Currently learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "MDX",
                "Frontend Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="border border-black px-3 py-1.5 text-sm rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
