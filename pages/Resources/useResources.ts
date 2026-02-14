
import { useState, useMemo } from 'react';
import { Asset, NewsItem } from './types';

const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    date: '2025-02-14',
    category: 'Update',
    title: 'Wan 2.1 Native Support',
    description: 'We have integrated the latest Wan 2.1 model directly into the generation pipeline.'
  },
  {
    id: '2',
    date: '2025-02-12',
    category: 'Milestone',
    title: '10,000 Community Workflows',
    description: 'A massive thank you to everyone sharing their generation logic. We just passed a huge milestone!'
  },
  {
    id: '3',
    date: '2025-02-10',
    category: 'Guide',
    title: 'Mastering LTXV Motion',
    description: 'A new deep-dive guide into camera controls and motion weights for LTXV models.'
  },
  {
    id: '4',
    date: '2025-02-08',
    category: 'Workflow',
    title: 'Cinematic Lighting Kit',
    description: 'New workflow release specifically tuned for dramatic cinematic lighting setups.'
  },
  {
    id: '5',
    date: '2025-02-05',
    category: 'Art Picks',
    title: 'Week 104 Recap',
    description: 'The latest curated picks are live. Check out the best from across the community.'
  }
];

const MOCK_ASSETS: Asset[] = [
  {
    id: 'a1',
    name: 'Neo-Noir Stylizer',
    description: 'Deep shadows and high contrast lighting for Wan 2.1.',
    type: 'lora',
    status: 'published',
    mediaType: 'video',
    baseModel: 'Wan 2.1',
    loraType: 'Style',
    thumbnailUrl: null,
    previewUrl: null,
    downloadUrl: '#',
    authorId: 'u1',
    authorName: 'ShadowCaster',
    createdAt: '2025-02-10',
    downloads: 1240,
    likes: 450,
    tags: ['noir', 'dark', 'cinematic']
  },
  {
    id: 'a2',
    name: 'Smooth Dolly Zoom',
    description: 'A precise camera motion workflow for LTXV.',
    type: 'workflow',
    status: 'published',
    mediaType: 'video',
    baseModel: 'LTXV',
    thumbnailUrl: null,
    previewUrl: null,
    downloadUrl: '#',
    authorId: 'u2',
    authorName: 'MotionMaster',
    createdAt: '2025-02-09',
    downloads: 890,
    likes: 210,
    tags: ['camera', 'zoom', 'pro']
  },
  {
    id: 'a3',
    name: 'Glitch Core V2',
    description: 'Aggressive motion glitches and digital artifacts.',
    type: 'lora',
    status: 'published',
    mediaType: 'video',
    baseModel: 'Hunyuan',
    loraType: 'Effect',
    thumbnailUrl: null,
    previewUrl: null,
    downloadUrl: '#',
    authorId: 'u3',
    authorName: 'DataBender',
    createdAt: '2025-02-11',
    downloads: 1560,
    likes: 670,
    tags: ['glitch', 'cyber', 'effect']
  },
  {
    id: 'a4',
    name: 'Pastel Dreamscape',
    description: 'Soft, airy colors and surreal landscapes for Wan 2.1.',
    type: 'lora',
    status: 'published',
    mediaType: 'image',
    baseModel: 'Wan 2.1',
    loraType: 'Style',
    thumbnailUrl: null,
    previewUrl: null,
    downloadUrl: '#',
    authorId: 'u4',
    authorName: 'ColorWitch',
    createdAt: '2025-02-05',
    downloads: 430,
    likes: 120,
    tags: ['pastel', 'dream', 'art']
  },
  {
    id: 'a5',
    name: 'Ultra Detail Upscaler',
    description: 'Maximum resolution workflow for final renders.',
    type: 'workflow',
    status: 'published',
    mediaType: 'image',
    baseModel: 'Hunyuan',
    thumbnailUrl: null,
    previewUrl: null,
    downloadUrl: '#',
    authorId: 'u5',
    authorName: 'RenderBoi',
    createdAt: '2025-02-12',
    downloads: 2100,
    likes: 980,
    tags: ['4k', 'detail', 'upscale']
  },
  {
    id: 'a6',
    name: 'Handheld Cam Jitter',
    description: 'Adds realistic human-like camera movement.',
    type: 'lora',
    status: 'published',
    mediaType: 'video',
    baseModel: 'LTXV',
    loraType: 'Camera Motion',
    thumbnailUrl: null,
    previewUrl: null,
    downloadUrl: '#',
    authorId: 'u2',
    authorName: 'MotionMaster',
    createdAt: '2025-02-01',
    downloads: 750,
    likes: 310,
    tags: ['camera', 'realism', 'shaky']
  }
  // Simplified for example, real implementation would have 12 items
];

export const useResources = () => {
  const [assets] = useState<Asset[]>([
    ...MOCK_ASSETS,
    ...MOCK_ASSETS.map(a => ({ ...a, id: a.id + '_copy' })) // Double to 12
  ]);
  const [news] = useState<NewsItem[]>(MOCK_NEWS);

  return { assets, news };
};
