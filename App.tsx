
import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import ResourcesPage from './pages/Resources/index';
import ArtPicksIndex from './pages/Resources/ArtPicks/ArtPicksIndex';
import ArtPicksDetail from './pages/Resources/ArtPicks/ArtPicksDetail';
import ThemeSelector from './pages/ThemeSelector';
import ResourcesPreview from './resources-preview';

const Theme1Layout: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-proximity scroll-pt-16">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-black tracking-tighter hover:text-zinc-300 transition-colors">BANODOCO</Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/theme1" className="text-white">Theme 1</Link>
              <Link to="/theme2" className="hover:text-white transition-colors">Theme 2</Link>
            </nav>
          </div>
          <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors">
            JOIN DISCORD
          </button>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0b0b0f] border-t border-white/5 py-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-sm">
            &copy; 2025 Banodoco Community. All rights reserved.
          </div>
          <div className="flex gap-8 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ThemeSelector />} />
        <Route path="/theme1" element={<Theme1Layout />}>
          <Route index element={<ResourcesPage />} />
          <Route path="art-picks" element={<ArtPicksIndex />} />
          <Route path="art-picks/:weekId" element={<ArtPicksDetail />} />
        </Route>
        <Route path="/theme2" element={<ResourcesPreview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
