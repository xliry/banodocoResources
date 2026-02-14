import React from 'react';
import { Link } from 'react-router-dom';

const ThemeSelector: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">BANODOCO</h1>
        <p className="text-zinc-500 text-lg max-w-md mx-auto leading-relaxed">
          Choose a theme to explore the community resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {/* Theme 1 Card */}
        <Link
          to="/theme1"
          className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <span className="text-orange-500 text-lg font-black">1</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight group-hover:text-orange-400 transition-colors">
              Editorial Magazine
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Bold editorial layout with Framer Motion animations, art picks archive, and a magazine-style reading experience.
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-orange-500 transition-colors">
              Enter Theme 1 <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </span>
          </div>
        </Link>

        {/* Theme 2 Card */}
        <Link
          to="/theme2"
          className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative space-y-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <span className="text-violet-400 text-lg font-black">2</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight group-hover:text-violet-400 transition-colors">
              Minimal Preview
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Clean, minimal single-page layout with inline styles. A compact overview of news, resources, and community art.
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-violet-400 transition-colors">
              Enter Theme 2 <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThemeSelector;
