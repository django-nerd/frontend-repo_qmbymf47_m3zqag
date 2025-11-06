import React from 'react';

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 text-center shadow-xl shadow-black/20">
    <div className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
      {value}
    </div>
    <div className="mt-1 text-sm text-white/60">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-6 pb-6 sm:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Stat value="50K+" label="Active Learners" />
        <Stat value="1M+" label="Code Challenges" />
        <Stat value="95%" label="Success Rate" />
      </div>
    </section>
  );
};

export default Stats;
