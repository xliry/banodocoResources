
import { useState, useMemo } from 'react';
import { Asset, Filters } from './types';

export const useResourceFilters = (assets: Asset[]) => {
  const [filters, setFilters] = useState<Filters>({
    type: 'all',
    status: 'published',
    mediaType: 'all',
    baseModel: 'all',
    loraType: 'all',
    search: ''
  });

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const filteredAssets = useMemo(() => {
    return assets.filter(asset => {
      const matchType = filters.type === 'all' || asset.type === filters.type;
      const matchModel = filters.baseModel === 'all' || asset.baseModel === filters.baseModel;
      const matchLoraType = filters.loraType === 'all' || asset.loraType === filters.loraType;
      const matchSearch = asset.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                          asset.description.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchType && matchModel && matchLoraType && matchSearch;
    });
  }, [assets, filters]);

  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
  const paginatedAssets = filteredAssets.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return {
    filters,
    updateFilter,
    paginatedAssets,
    page,
    setPage,
    totalPages,
    totalCount: filteredAssets.length
  };
};
