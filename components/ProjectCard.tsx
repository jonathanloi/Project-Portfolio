import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

type Project = ReturnType<typeof getAllProjects>[number];

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col border border-black rounded-2xl overflow-hidden hover:bg-black hover:text-white transition-colors duration-300"
        >
            {/* Project Image */}
            <div className="relative aspect-16/10 border-b border-black bg-neutral-100 overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`${project.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 motion-safe:group-hover:scale-105`}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">
                        No Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-400">
                        {project.displayDate}
                    </span>
                </div>

                <h3 className="text-lg font-medium group-hover:text-white">
                    {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 line-clamp-3">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="border border-current px-2.5 py-0.5 text-xs rounded-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* View Project link */}
                <div className="mt-6 pt-4 border-t border-current/20 text-sm font-medium flex items-center gap-1">
                    View Project
                    <span className="transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </div>
        </Link>
    );
}
