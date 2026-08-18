import {
  BookOpen,
  Code2,
  GraduationCap,
  Target,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-slate-800 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Get To Know Me
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            About Me
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I am passionate about learning modern web technologies and building
            responsive, practical, and user-friendly applications.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Who I Am
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              A developer focused on creating useful digital experiences
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I am Rasel, a web development enthusiast who enjoys creating
              modern and responsive websites. I work with technologies such as
              React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js,
              and MongoDB.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              My goal is to continuously improve my development skills by
              working on real-world projects, solving problems, and learning
              modern tools and best practices.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <InfoCard
              icon={<GraduationCap size={28} />}
              title="Education"
              text="Continuing my academic journey while developing practical web development skills."
            />

            <InfoCard
              icon={<Code2 size={28} />}
              title="Development"
              text="Building responsive frontend and full-stack web applications."
            />

            <InfoCard
              icon={<BookOpen size={28} />}
              title="Learning"
              text="Continuously learning modern frameworks, tools, and development practices."
            />

            <InfoCard
              icon={<Target size={28} />}
              title="Goal"
              text="To become a skilled developer and contribute to meaningful software projects."
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Technologies
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Skills & Tools
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-950 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              My Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Learning Through Projects
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            <JourneyItem
              number="01"
              title="Frontend Fundamentals"
              text="Started by learning HTML, CSS, JavaScript, responsive design, and modern UI development."
            />

            <JourneyItem
              number="02"
              title="React & Next.js"
              text="Moved into component-based development, routing, state management, and modern React applications."
            />

            <JourneyItem
              number="03"
              title="Full-Stack Development"
              text="Expanded into Node.js, Express.js, MongoDB, authentication, APIs, and full-stack project development."
            />

            <JourneyItem
              number="04"
              title="Real Projects"
              text="Applied these skills by building portfolio projects and continuously improving through practice."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function JourneyItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-400">
        {number}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-2 leading-7 text-slate-400">{text}</p>
      </div>
    </div>
  );
}