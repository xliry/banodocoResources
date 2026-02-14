
import React from 'react';
import { Link } from 'react-router-dom';
import { ArtPickWeek } from '../types';
import { ChevronRight } from 'lucide-react';

interface ArtPickCardProps {
  week: ArtPickWeek;
}

export const ArtPickCard: React.FC<ArtPickCardProps> = ({ week }) => {
  return (
    <Link 
      to={`/theme1/art-picks/${week.id}`}
      className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-zinc-900 transition-all border border-transparent hover:border-zinc-800"
    >
      <div className="shrink-0 w-20 aspect-square bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center border border-zinc-800">
         <span className="text-xl font-black text-zinc-700">#{(week.id.split('w')[1])}</span>
      </div>
      
      <div className="flex-grow space-y-1">
        <h4 className="text-base font-bold text-zinc-100 group-hover:text-orange-500 transition-colors">
          {week.title}
        </h4>
        <p className="text-xs text-zinc-500">
          {week.videos.length} videos featured
        </p>
      </div>

      <ChevronRight size={18} className="text-zinc-800 group-hover:text-zinc-500 group-hover:translate-x-1 transition-all" />
    </Link>
  );
};
