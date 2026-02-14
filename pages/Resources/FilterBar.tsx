
import React from 'react';
import { Search } from 'lucide-react';
import { Filters } from './types';

interface FilterBarProps {
  filters: Filters;
  updateFilter: (key: keyof Filters, value: string) => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, updateFilter, totalCount }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
      <div className="relative group flex-grow md:flex-grow-0">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-zinc-300 transition-colors" size={18} />
        <input 
          type="text"
          placeholder="Search tools..."
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
          className="bg-zinc-900/50 border border-zinc-800 rounded-full pl-12 pr-6 py-2.5 w-full md:w-64 focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-all text-sm"
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
        <select 
          value={filters.type}
          onChange={(e) => updateFilter('type', e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-xs font-semibold focus:outline-none focus:border-zinc-600 cursor-pointer appearance-none min-w-[100px]"
        >
          <option value="all">TYPE: ALL</option>
          <option value="lora">LORA</option>
          <option value="workflow">WORKFLOW</option>
        </select>

        <select 
          value={filters.baseModel}
          onChange={(e) => updateFilter('baseModel', e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-xs font-semibold focus:outline-none focus:border-zinc-600 cursor-pointer appearance-none min-w-[120px]"
        >
          <option value="all">MODEL: ALL</option>
          <option value="Wan 2.1">WAN 2.1</option>
          <option value="LTXV">LTXV</option>
          <option value="Hunyuan">HUNYUAN</option>
        </select>

        <div className="px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest whitespace-nowrap">
          {totalCount} Results
        </div>
      </div>
    </div>
  );
};
