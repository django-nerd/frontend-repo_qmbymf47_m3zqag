import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, BookOpen, Terminal, MessageSquare, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0a0b0d] text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle vignette and gradient overlays to enhance legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="pointer-events-none absolute inset-0" style={{
          background:
            'radial-gradient(600px 300px at 20% 20%, rgba(34,197,94,0.12), transparent 60%), radial-gradient(600px 300px at 80% 30%, rgba(59,130,246,0.12), transparent 60%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-white/80">Dark mode • 24/7 AI support • Free to start</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
          Master one language at a time with CodeWebX
        </h1>
        <p className="mt-4 max-w-3xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
          Interactive lessons, real-time coding practice, a built-in playground, and AI assistance — all in a modern, comfortable dark interface designed for focus.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#curriculum"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-emerald-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
          >
            <BookOpen className="h-4 w-4" />
            View Curriculum
            <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <Rocket className="h-4 w-4 text-emerald-300" />
            Get Started
          </a>
          <a
            href="https://discord.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/5"
          >
            <MessageSquare className="h-4 w-4 text-indigo-300" />
            Join Discord
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-left backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Terminal className="h-4 w-4 text-emerald-300" />
              Real-time playground
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-left backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Rocket className="h-4 w-4 text-sky-300" />
              Interactive lessons
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-left backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MessageSquare className="h-4 w-4 text-violet-300" />
              AI mentor assistance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
