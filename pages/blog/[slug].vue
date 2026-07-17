<!-- pages/blog/[slug].vue — single article -->
<template>
  <article v-if="doc" class="margin-container blog-post">
    <NuxtLink to="/blog" class="back-link">← Back to blog</NuxtLink>

    <header class="post-header">
      <h1 class="post-title">{{ doc.title }}</h1>
      <div class="post-meta">
        <span v-if="doc.author">{{ doc.author }}</span>
        <time v-if="doc.date" :datetime="doc.date">{{ formatDate(doc.date) }}</time>
      </div>
    </header>

    <img
      v-if="doc.image"
      :src="doc.image"
      :alt="doc.title"
      class="post-cover"
      width="1200"
      height="630"
    >

    <div class="post-body">
      <ContentRenderer :value="doc" />
    </div>

    <section v-if="doc.faq && doc.faq.length" class="post-faq">
      <h2>Frequently asked questions</h2>
      <div v-for="(item, i) in doc.faq" :key="i" class="faq-entry">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </div>
    </section>
  </article>
</template>

<script setup>
const route = useRoute()

const { data: doc } = await useAsyncData(`post-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const url = `https://greedlabs.org${route.path}`

// Social/OG previews need a raster image — SVG covers don't render on
// Twitter/Telegram/LinkedIn. Each .svg cover has a matching .png sibling.
const ogImage = doc.value?.image
  ? `https://greedlabs.org${doc.value.image.replace(/\.svg$/, '.png')}`
  : 'https://greedlabs.org/og-image.png'

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}

useSeoMeta({
  title: `${doc.value.title} | GREED Labs`,
  description: doc.value.description,
  ogTitle: doc.value.title,
  ogDescription: doc.value.description,
  ogUrl: url,
  ogType: 'article',
  ogImage,
  articlePublishedTime: doc.value.date,
  articleModifiedTime: doc.value.updated || doc.value.date,
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs',
  twitterImage: ogImage,
  robots: doc.value.draft ? 'noindex, nofollow' : 'index, follow'
})

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: doc.value.title,
    description: doc.value.description,
    image: ogImage,
    datePublished: doc.value.date,
    dateModified: doc.value.updated || doc.value.date,
    author: { '@type': 'Organization', name: doc.value.author || 'GREED Labs' },
    publisher: {
      '@type': 'Organization',
      name: 'GREED Labs',
      logo: { '@type': 'ImageObject', url: 'https://greedlabs.org/greed-logo.svg' }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greedlabs.org/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://greedlabs.org/blog' },
      { '@type': 'ListItem', position: 3, name: doc.value.title, item: url }
    ]
  }
]

if (doc.value.faq && doc.value.faq.length) {
  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: doc.value.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  })
}

useHead({
  link: [{ rel: 'canonical', href: url }],
  script: jsonLd.map(schema => ({
    type: 'application/ld+json',
    innerHTML: JSON.stringify(schema)
  }))
})
</script>

<style scoped>
.blog-post {
  padding-top: 200px;
  padding-bottom: var(--spacing-2xl);
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 640px) {
  .blog-post { padding-top: 120px; }
}
.back-link {
  color: rgba(52, 251, 255, 0.8);
  font-size: 14px;
  display: inline-block;
  margin-bottom: var(--spacing-lg);
}
.back-link:hover { color: #34fbff; }
.post-header { margin-bottom: var(--spacing-xl); }
.post-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: var(--spacing-sm);
}
.post-meta {
  display: flex;
  gap: var(--spacing-md);
  color: rgba(255, 255, 255, 0.45);
  font-size: 14px;
}
.post-cover {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 16px;
  border: 1px solid rgba(52, 251, 255, 0.14);
  margin-bottom: var(--spacing-xl);
}
.post-body {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  font-size: 17px;
}
.post-body :deep(img) {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin: var(--spacing-lg) 0;
}
.post-body :deep(h2) {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin: var(--spacing-xl) 0 var(--spacing-sm);
}
.post-body :deep(h3) {
  font-size: 21px;
  font-weight: 600;
  color: #ffffff;
  margin: var(--spacing-lg) 0 var(--spacing-xs);
}
.post-body :deep(p) { margin-bottom: var(--spacing-md); }
.post-body :deep(ul),
.post-body :deep(ol) {
  margin: 0 0 var(--spacing-md) 1.2em;
  list-style: revert;
}
.post-body :deep(li) { margin-bottom: var(--spacing-xs); }
.post-body :deep(a) { color: #34fbff; text-decoration: underline; }
.post-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-md) 0 var(--spacing-lg);
  font-size: 15px;
}
.post-body :deep(th),
.post-body :deep(td) {
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: var(--spacing-xs) var(--spacing-sm);
  text-align: left;
}
.post-body :deep(th) { background: rgba(52, 251, 255, 0.06); color: #fff; }
.post-body :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}
.post-body :deep(pre) {
  background: #0d1117;
  padding: var(--spacing-md);
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: var(--spacing-md);
}
.post-faq {
  margin-top: var(--spacing-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-xl);
}
.post-faq h2 {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: var(--spacing-lg);
}
.faq-entry { margin-bottom: var(--spacing-lg); }
.faq-entry h3 {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: var(--spacing-xs);
}
.faq-entry p { color: rgba(255, 255, 255, 0.75); line-height: 1.6; }
@media (max-width: 640px) {
  .post-title { font-size: 30px; }
}
</style>
