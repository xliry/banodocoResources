
import React from 'react';
import { motion } from 'framer-motion';
import { Asset } from './types';
import { Download, Heart, ChevronLeft, ChevronRight, User } from 'lucide-react';

interface ResourceGridProps {
  assets: Asset[];
  onSelect: (asset: Asset) => void;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export const ResourceGrid: React.FC<ResourceGridProps> = ({ assets, onSelect, page, setPage, totalPages }) => {
  if (assets.length === 0) {
    return (
      <div className="py-32 text-center">
        <p className="text-zinc-500 text-lg">No resources match your current selection.</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 text-zinc-100 underline underline-offset-4 hover:text-orange-500 transition-colors"
        >
          Reset all filters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {assets.map((asset, idx) => (
          <motion.div
            key={asset.id + idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 4) * 0.1 }}
            className="group cursor-pointer flex flex-col"
            onClick={() => onSelect(asset)}
          >
            {/* Thumbnail Placeholder */}
            <div className="relative aspect-[16/10] bg-zinc-900 rounded-sm overflow-hidden mb-6 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-8xl font-black text-white italic tracking-tighter">
                  {asset.baseModel.split(' ')[0]}
                </span>
              </div>
              
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-sm">
                  {asset.type}
                </span>
              </div>
            </div>

            <div className="flex-grow space-y-2">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-lg font-bold group-hover:text-orange-400 transition-colors leading-tight">
                  {asset.name}
                </h3>
                <span className="text-[10px] text-zinc-600 font-mono mt-1 shrink-0">
                  {asset.baseModel}
                </span>
              </div>
              <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                {asset.description}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-4 text-zinc-500">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center">
                  <User size={10} className="text-zinc-400" />
                </div>
                <span className="text-xs font-medium">{asset.authorName}</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest">
                <div className="flex items-center gap-1">
                  <Download size={12} className="text-zinc-600" />
                  <span>{asset.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={12} className="text-zinc-600" />
                  <span>{asset.likes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-8 pt-12">
          <button 
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="p-3 rounded-full border border-zinc-800 disabled:opacity-30 hover:border-zinc-500 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="text-zinc-100">{page}</span>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-500">{totalPages}</span>
          </div>
          <button 
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="p-3 rounded-full border border-zinc-800 disabled:opacity-30 hover:border-zinc-500 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
