
import { ArtPickWeek, ArtPickVideo } from '../types';

const creators = ["Aether", "Lumina", "Zephyr", "Kael", "Nyx", "Oberon", "Silas", "Vesper", "Cyrus", "Elysia"];
const adjectives = ["Ethereal", "Cinematic", "Surreal", "Gothic", "Noir", "Vibrant", "Liminal", "Hyper-realistic"];
const subjects = ["Portraits", "Cityscapes", "Anomalies", "Visions", "Dreams", "Realms", "Echoes", "Frequencies"];

const generateVideos = (weekNum: number): ArtPickVideo[] => {
  return Array.from({ length: 10 }).map((_, i) => ({
    title: `${adjectives[i % adjectives.length]} ${subjects[i % subjects.length]} #${weekNum}-${i + 1}`,
    creator: creators[i % creators.length],
    thumbnailUrl: null, // UI will handle placeholders
    videoUrl: null
  }));
};

export const getWeeks = (): ArtPickWeek[] => {
  const weeks: ArtPickWeek[] = [];
  const startDate = new Date('2025-02-03');
  
  for (let i = 0; i < 104; i++) {
    const currentWeekDate = new Date(startDate);
    currentWeekDate.setDate(startDate.getDate() - (i * 7));
    
    const isoDate = currentWeekDate.toISOString().split('T')[0];
    const weekYear = currentWeekDate.getFullYear();
    const weekNum = Math.ceil((((currentWeekDate.getTime() - new Date(weekYear, 0, 1).getTime()) / 86400000) + 1) / 7);
    const id = `${weekYear}-w${weekNum.toString().padStart(2, '0')}`;
    
    const options: any = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateStr = currentWeekDate.toLocaleDateString('en-US', options);

    weeks.push({
      id,
      weekOf: isoDate,
      title: `Week of ${dateStr}`,
      introText: `A collection of the most stunning AI-generated visuals from our community members for this week. Featuring explorations into ${adjectives[i % 8].toLowerCase()} textures and ${subjects[i % 8].toLowerCase()} that push the boundaries of current generation models.`,
      videos: generateVideos(104 - i)
    });
  }
  return weeks;
};
