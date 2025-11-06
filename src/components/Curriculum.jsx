import React from 'react';
import { Code, Braces, Database, Cpu, Layers } from 'lucide-react';

const Tag = ({ children }) => (
  <span className="mr-2 mb-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
    {children}
  </span>
);

const Card = ({ icon: Icon, title, desc, tags }) => (
  <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 transition hover:border-emerald-400/30 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.4)]">
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
        <Icon className="h-5 w-5 text-emerald-300" />
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-white/60">{desc}</p>
    <div className="mt-4 flex flex-wrap">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  </div>
);

const Curriculum = () => {
  return (
    <section id="curriculum" className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Learn by doing, guided by an AI mentor
        </h2>
        <p className="mt-3 text-white/60">
          A broad, hands-on curriculum that scales from foundations to production.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          icon={Code}
          title="Web Foundations"
          desc="Master the building blocks of the web with interactive, project-based lessons."
          tags={["HTML", "CSS", "JavaScript"]}
        />
        <Card
          icon={Cpu}
          title="Programming Languages"
          desc="Build problem-solving skills through real-time coding challenges with instant feedback."
          tags={["Python", "C++", "Java"]}
        />
        <Card
          icon={Database}
          title="Data & Backend"
          desc="Design robust backends and query data like a pro with hands-on labs."
          tags={["SQL", "MongoDB", "PHP"]}
        />
        <Card
          icon={Layers}
          title="Full‑Stack Tracks"
          desc="Go end-to-end with modern stacks and deploy real projects."
          tags={["MERN", "React", "Node", "Express"]}
        />
        <Card
          icon={Braces}
          title="AI/ML & Analysis"
          desc="Explore intelligent systems and data workflows with practical exercises."
          tags={["AI/ML", "Pandas", "Data Viz"]}
        />
      </div>
    </section>
  );
};

export default Curriculum;
