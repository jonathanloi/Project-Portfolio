import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Read the MDX files from the "content/projects" directory and parse their metadata and content.

const projectsDirectory = path.join(process.cwd(), "/content/projects");

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  displayDate: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  imageFit?: "contain" | "cover";
};

  export function getAllProjects(): ProjectMeta[] {
    const files = fs.readdirSync(projectsDirectory);

    const projects = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file): ProjectMeta => {
        const slug = file.replace(/\.mdx$/, "");
        const fullPath = path.join(projectsDirectory, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          displayDate: data.displayDate,
          tags: data.tags || [],
          image: data.image || "",
          github: data.github,
          live: data.live,
          featured: data.featured === true,
          imageFit: data.imageFit === "contain" ? "contain" : "cover",
        };
      });

    return projects.sort(
      (a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0)
    );
  }

export function getFeaturedProjects(): ProjectMeta[] {
  return getAllProjects().filter((project) => project.featured === true);
}

export function getProject(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      displayDate: data.displayDate,
      tags: data.tags || [],
      image: data.image || "",
      github: data.github,
      live: data.live,
      featured: data.featured === true,
    },
    content,
  };
}
