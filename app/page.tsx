import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Laptop,
  Server,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-slate-800">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Rasel Ahmed
              <span className="block text-cyan-400">
                Frontend Developer
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, responsive, and user-friendly web applications
              using React, Next.js, TypeScript, Tailwind CSS, and modern web
              technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 sm:h-80 sm:w-80">
              <div className="absolute inset-5 rounded-full border border-slate-700" />

              <div className="relative text-center">
                <Code2 className="mx-auto text-cyan-400" size={80} />

                <p className="mt-4 text-xl font-semibold text-white">
                  Web Developer
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  React • Next.js • TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Building modern digital experiences
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I enjoy creating responsive websites and web applications that
              are clean, fast, and easy to use. I am continuously improving my
              frontend and full-stack development skills by building practical
              projects and learning modern technologies.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Learn more about me
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              What I Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              My Development Skills
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SkillCard
              icon={<Laptop size={30} />}
              title="Frontend"
              description="Responsive and interactive interfaces using React, Next.js and Tailwind CSS."
            />

            <SkillCard
              icon={<Code2 size={30} />}
              title="JavaScript"
              description="Modern JavaScript and TypeScript for building reusable application logic."
            />

            <SkillCard
              icon={<Server size={30} />}
              title="Backend"
              description="Building APIs and server-side applications using Node.js and Express."
            />

            <SkillCard
              icon={<Database size={30} />}
              title="Database"
              description="Working with MongoDB to store and manage application data."
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Portfolio
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Featured Projects
              </h2>

              <p className="mt-3 text-slate-400">
                Some of the projects I have built while developing my skills.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View all projects
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FeaturedProject
              number="01"
              title="TripMind"
              description="An AI-powered travel planning application with modern full-stack features."
            />

            <FeaturedProject
              number="02"
              title="Rentora"
              description="A modern rental platform designed with a responsive and user-friendly interface."
            />

            <FeaturedProject
              number="03"
              title="Life-Link"
              description="A web application focused on connecting users through a clean digital experience."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-bold text-white">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Feel free to contact me if you would like to discuss a project,
              collaboration, or development opportunity.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Let&apos;s Talk
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function FeaturedProject({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
      <p className="text-sm font-bold text-cyan-400">{number}</p>

      <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{description}</p>

      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
      >
        View Project
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}