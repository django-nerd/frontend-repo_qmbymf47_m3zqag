import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Curriculum from './components/Curriculum';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0b0d]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-emerald-400" />
            <span className="font-semibold tracking-tight">CodeWebX</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#curriculum" className="transition hover:text-white">Curriculum</a>
            <a href="#get-started" className="transition hover:text-white">Get Started</a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Discord</a>
          </nav>
          <a href="#get-started" className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition hover:bg-white/15">
            Sign In
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Stats />
        <Curriculum />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0b0d] py-10 text-center text-xs text-white/50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <p>
            © {new Date().getFullYear()} CodeWebX — Learn by building. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
