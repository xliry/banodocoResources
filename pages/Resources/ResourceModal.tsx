
import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, Heart, Share2, Calendar, Database, User, Tag } from 'lucide-react';
import { Asset } from './types';

interface ResourceModalProps {
  asset: Asset;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ asset, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-12"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl bg-[#0e0e13] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Media Side */}
        <div className="lg:w-3/5 bg-black flex items-center justify-center min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="text-center p-12 space-y-6">
            <div className="text-8xl opacity-10 font-black italic select-none">PREVIEW</div>
            <p className="text-zinc-600 text-sm max-w-xs mx-auto">
              Visual preview for {asset.name} would be rendered here.
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-2/5 p-8 lg:p-12 overflow-y-auto">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-orange-500 uppercase">
                <span>{asset.type}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span>{asset.baseModel}</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{asset.name}</h2>
            </div>

            <p className="text-zinc-400 leading-relaxed italic">
              "{asset.description}"
            </p>

            <div className="grid grid-cols-2 gap-6 py-8 border-y border-white/5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-500">
                  <User size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Creator</span>
                </div>
                <div className="font-semibold">{asset.authorName}</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Calendar size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Created</span>
                </div>
                <div className="font-semibold">{new Date(asset.createdAt).toLocaleDateString()}</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Database size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Base</span>
                </div>
                <div className="font-semibold">{asset.baseModel}</div>
              </div>
              {asset.loraType && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Tag size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Type</span>
                  </div>
                  <div className="font-semibold">{asset.loraType}</div>
                </div>
              )}
            </div>

            <div className="space-y-4 pt-4">
              <button className="w-full bg-white text-black py-4 rounded-xl font-black text-sm tracking-widest uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                Download Asset
              </button>
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-xs">
                  <Heart size={16} />
                  Like ({asset.likes})
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-xs">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>

            {asset.tags.length > 0 && (
              <div className="pt-8">
                <div className="flex flex-wrap gap-2">
                  {asset.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
