
import React from 'react';
import { motion } from 'framer-motion';
import { NewsItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface CommunityNewsSectionProps {
  news: NewsItem[];
}

export const CommunityNewsSection: React.FC<CommunityNewsSectionProps> = ({ news }) => {
  return (
    <div className="space-y-1">
      {news.map((item, idx) => (
        <motion.div 
          key={item.id}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="group relative flex items-center gap-8 py-8 px-6 hover:bg-white/[0.02] transition-colors rounded-xl cursor-pointer"
        >
          <div className="hidden sm:block shrink-0 w-24 text-[10px] font-black text-zinc-600 font-mono tracking-tighter">
            {item.date}
          </div>
          
          <div className="flex-grow space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
                {item.category}
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight group-hover:translate-x-1 transition-transform">
              {item.title}
            </h3>
            <p className="text-zinc-500 text-sm max-w-2xl">
              {item.description}
            </p>
          </div>

          <div className="shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
            <ArrowRight size={20} className="text-white" />
          </div>

          {idx !== news.length - 1 && (
            <div className="absolute bottom-0 left-6 right-6 h-px bg-zinc-900" />
          )}
        </motion.div>
      ))}
    </div>
  );
};
