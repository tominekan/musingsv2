import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPlates, getPosts, summaryOf } from '../lib/content';
import { topics } from '../lib/topics';

export async function GET(context: APIContext) {
  const [posts, plates] = await Promise.all([getPosts(), getPlates()]);

  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: summaryOf(post),
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
      categories: [topics[post.data.topic].label],
    })),
    // Plates have no page of their own, so they link to the feed.
    ...plates.map((plate) => ({
      description: plate.body ?? '',
      pubDate: plate.data.date,
      link: `/plates/#${plate.id}`,
      categories: ['Small plates', ...plate.data.topics.map((t) => topics[t].label)],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'musings',
    description: "Tomi's blog: long posts when I've figured something out, small plates when I haven't.",
    site: context.site!,
    items,
  });
}
