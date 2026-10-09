import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="classic-project-card">
      <Link
        href={`/projects/${project.slug}/`}
        aria-label={`View ${project.title} project`}
      >
        <div className="aspect-[4/3] overflow-hidden border-b border-line bg-[#e7e7e7]">
          <Image
            className="h-full w-full object-scale-down"
            src={project.image}
            alt={project.imageAlt}
            width={900}
            height={675}
          />
        </div>
        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[.1em] text-muted">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-2 text-xl font-bold text-ink">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-forest">
            {project.summary}
          </p>
          <span className="mt-5 inline-block text-sm font-bold text-[#315c8c]">
            View project →
          </span>
        </div>
      </Link>
    </article>
  );
}
