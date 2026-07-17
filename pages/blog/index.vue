<!-- pages/blog/index.vue — blog listing -->
<template>
  <div class="margin-container blog-index">
    <div class="section-eyebrow">Blog</div>
    <h1 class="section-title">Insights on Crypto Market Making</h1>
    <p class="blog-intro">
      Guides and analysis on liquidity, token launches, and market structure from the GREED Labs team.
    </p>

    <div class="post-list">
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="post-card"
      >
        <img v-if="post.image" :src="post.image" :alt="post.title" class="post-thumb" loading="lazy">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-desc">{{ post.description }}</p>
        <time v-if="post.date" class="post-date" :datetime="post.date">
          {{ formatDate(post.date) }}
        </time>
      </NuxtLink>
    </div>

    <p v-if="!posts || posts.length === 0" class="blog-empty">
      New articles are on the way.
    </p>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-list', () =>
  queryContent('/blog')
    .where({ draft: { $ne: true } })
    .only(['title', 'description', 'date', 'image', '_path'])
    .sort({ date: -1 })
    .find()
)

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}

useSeoMeta({
  title: 'Blog — Crypto Market Making Insights | GREED Labs',
  description: 'Guides and analysis on crypto liquidity, token launches, and market structure from the GREED Labs market making team.',
  ogTitle: 'Blog — Crypto Market Making Insights | GREED Labs',
  ogDescription: 'Guides and analysis on crypto liquidity, token launches, and market structure from the GREED Labs market making team.',
  ogUrl: 'https://greedlabs.org/blog',
  ogType: 'website',
  ogImage: 'https://greedlabs.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://greedlabs.org/blog' }]
})
</script>

<style scoped>
.blog-index {
  padding-top: 200px;
  padding-bottom: var(--spacing-2xl);
}
@media (max-width: 640px) {
  .blog-index { padding-top: 120px; }
}
.blog-intro {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  max-width: 640px;
  margin-bottom: var(--spacing-xl);
}
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}
.post-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
  border: 1px solid rgba(52, 251, 255, 0.14);
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(52,251,255,0.04) 0%, rgba(21,134,244,0.04) 100%);
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.post-card:hover {
  border-color: rgba(52, 251, 255, 0.4);
  transform: translateY(-2px);
}
.post-thumb {
  display: block;
  width: 100%;
  aspect-ratio: 1200 / 630;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: var(--spacing-md);
}
.post-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  color: #ffffff;
}
.post-desc {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-sm);
  line-height: 1.5;
}
.post-date {
  margin-top: auto;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
}
.blog-empty {
  color: rgba(255, 255, 255, 0.6);
}
@media (max-width: 640px) {
  .post-list { grid-template-columns: 1fr; }
}
</style>
