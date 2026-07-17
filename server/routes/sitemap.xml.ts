import { serverQueryContent } from '#content/server'

const SITE = 'https://greedlabs.org'

export default defineEventHandler(async (event) => {
  // Static routes
  const staticUrls = [
    { loc: `${SITE}/`, changefreq: 'monthly', priority: '1.0' },
    { loc: `${SITE}/dex-market-making`, changefreq: 'monthly', priority: '0.9' },
    { loc: `${SITE}/cex-market-making`, changefreq: 'monthly', priority: '0.9' },
    { loc: `${SITE}/token-launch`, changefreq: 'monthly', priority: '0.9' },
    { loc: `${SITE}/faq`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${SITE}/blog`, changefreq: 'weekly', priority: '0.7' }
  ]

  // Blog articles from @nuxt/content
  const posts = await serverQueryContent(event)
    .where({ _path: { $contains: '/blog/' }, draft: { $ne: true } })
    .find()

  const postUrls = posts.map(post => ({
    loc: `${SITE}${post._path}`,
    lastmod: (post.updated || post.date || '').toString().slice(0, 10) || undefined,
    changefreq: 'monthly',
    priority: '0.8'
  }))

  // Tag/topic hub pages
  const tags = [...new Set(posts.flatMap(p => (p.tags as string[]) || []))].sort()
  const tagUrls = tags.map(tag => ({
    loc: `${SITE}/blog/tag/${tag}`,
    changefreq: 'weekly',
    priority: '0.6'
  }))

  const urls = [...staticUrls, ...postUrls, ...tagUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})
