// The topic color system. Every pill, filter chip, hashtag and tinted panel
// reads its colors from here, so adding a topic is one entry in this map.
// Keep `ink` on `bg` at 4.5:1 contrast or better.
export const topics = {
  algorithms: { label: 'Algorithms', bg: '#CFE0FF', ink: '#1D3D7A' },
  philosophy: { label: 'Philosophy', bg: '#E5DAFF', ink: '#4B2C8F' },
  food: { label: 'Food review', bg: '#FFDDBF', ink: '#7A3A0C' },
  anime: { label: 'Anime', bg: '#FFD6E8', ink: '#8A1E4F' },
  movies: { label: 'Movies', bg: '#D3EFD6', ink: '#1F5530' },
  projects: { label: 'Projects', bg: '#FFEDA3', ink: '#5E4600' },
  // The `plate` script adds new hashtags above this line. Recolor them freely.
} as const;

export type TopicSlug = keyof typeof topics;

export const topicSlugs = Object.keys(topics) as [TopicSlug, ...TopicSlug[]];

// `[data-topic="x"]` sets --t-bg / --t-ink, which components use for color.
export const topicCss = Object.entries(topics)
  .map(([slug, t]) => `[data-topic="${slug}"]{--t-bg:${t.bg};--t-ink:${t.ink}}`)
  .join('\n');
