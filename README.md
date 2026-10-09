# Musings v3

My blog, as a static site built with [Astro](https://astro.build). No server and no database: posts are markdown files in this repo, and pushing to `main` publishes them.

(v2 was Django + Bootstrap + Postgres. That's all gone now; it's in the git history if I ever miss it.)

## Running it

Needs Node 18 or newer.

```
npm install
npm run dev      # http://localhost:4321, live reload
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
npm run check    # type-check .astro/.ts files and content frontmatter
```

## Writing

### A post

Add `src/content/posts/<slug>.md`. The file name becomes the URL (`/posts/<slug>`).

```markdown
---
title: "Dijkstra, explained with a subway map"
date: 2026-10-03
topic: algorithms        # must be a key in src/lib/topics.ts
summary: "Shortest paths, priority queues, and why being greedy works out."   # optional
series: "Solutions in Search of a Problem"   # optional
tags: [graphs]           # optional
rating: 9                # optional, shows a 9/10 badge (food reviews)
hero: ./dijkstra.png     # optional image, path relative to this file
heroAlt: "A subway map"  # describe the hero image
draft: true              # optional; drafts only show in `npm run dev`
---

The post, in markdown.
```

Without a `summary`, the first paragraph is used on cards and in RSS.

### A small plate

Small plates are short posts with no title. Each is a file in `src/content/plates/`:

```markdown
---
date: 2026-10-05T19:30:00-04:00
topics: [food, cooking]   # optional, shown as #hashtags
---

Made shakshuka for the first time. Too much cumin, zero regrets.
```

The quickest way to add one is my local `plate` script (gitignored, aliased in `~/.zshrc`). It writes the plate, commits only that file (plus `topics.ts` if a topic is new) and pushes, so the plate goes live right away:

```
plate "Made shakshuka. Too much cumin, zero regrets." food cooking
plate "Made shakshuka. Too much cumin, zero regrets. #food #cooking"
```

Hashtags can be bare words after the quote, or `#tags` at the end of the quote. (zsh treats an unquoted `#word` as a comment, so `plate "..." #food` loses the tag.) A hashtag that isn't a topic yet gets added to `src/lib/topics.ts` with a color; recolor it there if you like.

### A new topic

Topics and their colors live in one place, `src/lib/topics.ts`. Add an entry with a label, a background color and an ink color (keep ink-on-background contrast at 4.5:1 or better). It then works everywhere: pills, filter chips, `#hashtags`, tinted panels, and `/topics/<topic>`.

## Deploying

Any static host works. Connect this repo to Cloudflare Pages, Netlify or Vercel with:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `SITE_URL` = the site's public URL, e.g. `https://musings.example.com` (RSS and the sitemap need it)

## Planned features
- [x] Markdown article content support
- [x] Syntax highlighting for code snippets
- [ ] Word Cloud (Fun Feature)
- [ ] Email notifications (RSS is there; a newsletter service could send from it)
