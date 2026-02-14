
export interface Asset {
  id: string;
  name: string;
  description: string;
  type: 'lora' | 'workflow';
  status: 'published' | 'draft';
  mediaType: 'image' | 'video';
  baseModel: string;           // "Wan 2.1", "LTXV", "Hunyuan"
  loraType?: string;           // "Camera Motion", "Style", "Motion", "Effect"
  thumbnailUrl: string | null;
  previewUrl: string | null;
  downloadUrl: string | null;
  authorId: string;
  authorName: string;
  createdAt: string;
  downloads: number;
  likes: number;
  tags: string[];
}

export interface ArtPickVideo {
  title: string;
  creator: string;
  thumbnailUrl: string | null;
  videoUrl: string | null;
}

export interface ArtPickWeek {
  id: string;              // e.g. "2025-w06"
  weekOf: string;          // ISO date "2025-02-03"
  title: string;           // "Week of Feb 3, 2025"
  introText: string;       // Descriptive paragraph
  videos: ArtPickVideo[];  // 10 videos per week
}

export interface Filters {
  type: string;      // 'all' | 'lora' | 'workflow'
  status: string;
  mediaType: string;
  baseModel: string; // 'all' | specific model name
  loraType: string;  // 'all' | specific lora type
  search: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'Guide' | 'Art Picks' | 'Workflow' | 'Milestone' | 'Update';
  title: string;
  description: string;
}
