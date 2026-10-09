import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Plate = CollectionEntry<'plates'>;

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

// Drafts show up in `astro dev` but never in a production build.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort(byDateDesc);
}

export async function getPlates(): Promise<Plate[]> {
  const plates = await getCollection('plates', ({ data }) => import.meta.env.DEV || !data.draft);
  return plates.sort(byDateDesc);
}

// 200 words per minute, same as the old Django view.
export function readingTime(body = ''): number {
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
}

// The summary, or failing that the first real paragraph, flattened to plain text.
export function summaryOf(post: Post, max = 170): string {
  if (post.data.summary) return post.data.summary;
  const para = (post.body ?? '')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !/^(#|>|[-*]\s|\d+\.\s|\*\*\[|```)/.test(p));
  if (!para) return '';
  const text = para
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ');
  return text.length <= max ? text : text.slice(0, text.lastIndexOf(' ', max)) + '…';
}

const fmt = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts });

export const formatDate = (d: Date) => fmt({ month: 'short', day: 'numeric', year: 'numeric' }).format(d);
export const formatMonthDay = (d: Date) => fmt({ month: 'short', day: '2-digit' }).format(d);
export const formatYear = (d: Date) => fmt({ year: 'numeric' }).format(d);
