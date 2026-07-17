<!-- pages/blog/tag/[tag].vue — articles filtered by tag -->
<template>
  <div class="margin-container blog-index">
    <NuxtLink to="/blog" class="back-link">← All articles</NuxtLink>
    <div class="section-eyebrow">Topic</div>
    <h1 class="section-title">#{{ tag }}</h1>
    <p class="blog-intro">
      {{ posts.length }} article{{ posts.length === 1 ? '' : 's' }} on {{ tag.replace(/-/g, ' ') }}.
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
        <time v-if="post.date" class="post-date" :datetime="post.date">{{ formatDate(post.date) }}</time>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const tag = route.params.tag

const { data: posts } = await useAsyncData(`tag-${tag}`, () =>
  queryContent('/blog')
    .where({ draft: { $ne: true }, tags: { $contains: tag } })
    .only(['title', 'description', 'date', 'image', '_path'])
    .sort({ date: -1 })
    .find()
)

if (!posts.value || posts.value.length === 0) {
  throw createError({ statusCode: 404, statusMessage: 'Topic not found', fatal: true })
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const url = `https://greedlabs.org/blog/tag/${tag}`
const label = String(tag).replace(/-/g, ' ')

useSeoMeta({
  title: `${label} — Market Making Articles | GREED Labs`,
  description: `Guides and analysis tagged ${label} from the GREED Labs crypto market making team.`,
  ogTitle: `${label} articles | GREED Labs`,
  ogDescription: `Guides and analysis tagged ${label} from the GREED Labs market making team.`,
  ogUrl: url,
  ogType: 'website',
  ogImage: 'https://greedlabs.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@GREED_Labs'
})

useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<style scoped>
.blog-index {
  padding-top: 200px;
  padding-bottom: var(--spacing-2xl);
}
@media (max-width: 640px) {
  .blog-index { padding-top: 120px; }
}
.back-link {
  color: rgba(52, 251, 255, 0.8);
  font-size: 14px;
  display: inline-block;
  margin-bottom: var(--spacing-lg);
}
.back-link:hover { color: #34fbff; }
.section-title { text-transform: capitalize; }
.blog-intro {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  max-width: 640px;
  margin-bottom: var(--spacing-xl);
  text-transform: capitalize;
}
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}
.post-card {
  display: block;
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
  height: auto;
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
  font-size: 15px;
}
.post-date {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
}
</style>
