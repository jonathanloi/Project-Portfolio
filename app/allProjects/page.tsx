import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
    title: "Projects | Jonathan Loi",
    description: "View my projects",
};

export default function AllProjectsPage() {
    const allProjects = getAllProjects();
    return (
        <div className="mx-auto max-w-5xl px-6 py-16">
            <BackButton />

            <div className="mt-10">
                <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
                    Projects
                </h1>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {allProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
