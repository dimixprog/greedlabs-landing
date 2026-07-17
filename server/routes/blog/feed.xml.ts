import { serverQueryContent } from '#content/server'

const SITE = 'https://greedlabs.org'

const esc = (s: string) =>
  String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event)
    .where({ _path: { $contains: '/blog/' }, draft: { $ne: true } })
    .sort({ date: -1 })
    .find()

  const items = posts
    .filter(p => p._path && p._path !== '/blog')
    .map((p) => {
      const link = `${SITE}${p._path}`
      const date = (p.updated || p.date || '').toString()
      const pubDate = date ? new Date(date).toUTCString() : ''
      return `    <item>
      <title>${esc(p.title as string)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>${pubDate ? `\n      <pubDate>${pubDate}</pubDate>` : ''}
      <description>${esc(p.description as string)}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GREED Labs Blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Guides and analysis on crypto market making, liquidity, and token launches from GREED Labs.</description>
    <language>en</language>
${items}
  </channel>
</rss>`

  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  return xml
})
