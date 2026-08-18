import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-slate-800 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            My Work
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Here are some projects I have built while learning and applying
            modern frontend and full-stack development technologies.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}