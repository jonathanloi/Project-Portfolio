import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProject } from "@/lib/projects";
import BackButton from "@/components/BackButton";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-medium tracking-tight mt-12 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-medium tracking-tight mt-12 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-medium mt-10 mb-3" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-medium mt-8 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="leading-relaxed text-neutral-700 mb-5" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-5 mb-5 space-y-1.5" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-5 mb-5 space-y-1.5" {...props} />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  a: (props: any) => (<a className="underline underline-offset-4 hover:text-neutral-600" {...props} />
  ),
  img: (props: any) => (<img className="my-4 w-full rounded" {...props}/>
  ),
  blockquote: (props: any) => (<blockquote className="border-l-2 border-black pl-5 italic my-8 text-neutral-700" {...props}/>
  ),
  ImageGallery: ImageGallery,
};

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  let project;
  try {
    project = getProject(slug);
  } catch {
    notFound();
  }

  const { meta, content } = project;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">

      {/* Back Button */}
      <BackButton />

      {/* Header */}
      <header className="mt-10 border-b border-black pb-10">
        <p className="text-sm text-neutral-500 mb-3">{meta.displayDate}</p>

        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
          {meta.title}
        </h1>

        <p className="mt-5 text-neutral-600 max-w-2xl leading-relaxed text-lg">
          {meta.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {meta.tags.map((tag: string) => (
            <span
              key={tag}
              className="border border-black px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Links */}
      {(meta.github || meta.live) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {meta.github && (
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-5 py-2.5 text-sm hover:bg-black hover:text-white transition-colors"
            >
              View Code
            </a>
          )}
          {meta.live && (
            <a
              href={meta.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-5 py-2.5 text-sm hover:bg-black hover:text-white transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      )}

      {/* Cover Image */}
      {meta.image && (
        <div className="mt-10 flex justify-center">
          <Image 
            src={meta.image}
            alt={meta.title}
            width={1920}
            height={1080}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto max-h-160 w-auto max-w-full object-contain"
          />
        </div>
      )}

      {/* MDX Content */}
      <article className="mt-14 max-w-none">
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>
    </div>
  );
}
