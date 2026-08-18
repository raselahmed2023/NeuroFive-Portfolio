import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
        {String(project.id).padStart(2, "0")}
      </div>

      <h2 className="text-2xl font-bold text-white">
        {project.title}
      </h2>

      <p className="mt-4 flex-1 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Live Demo
          <ExternalLink size={16} />
        </Link>

        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          GitHub
          <FaGithub size={16} />
        </Link>
      </div>
    </div>
  );
}