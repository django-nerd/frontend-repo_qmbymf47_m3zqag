import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative overflow-hidden bg-[#0a0b0d] py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -inset-x-20 -top-20 h-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -inset-x-32 bottom-0 h-64 rounded-full bg-sky-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0c0d10]/80 p-8 text-center shadow-xl backdrop-blur">
        <div className="mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" /> 100% free to start
          </div>
          <h3 className="mt-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Start your first lesson in minutes
          </h3>
          <p className="mt-2 text-white/60">
            No credit card required. Cancel anytime. 24/7 AI mentor support.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#curriculum"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-emerald-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              Get Started Free <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Trusted by 50K+ learners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
