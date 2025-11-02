<script setup>
import { usePosts } from '../composables/usePosts'
import { useRouter } from 'vue-router'

const posts = usePosts()
const router = useRouter()

function openPost(slug) {
  router.push({ name: 'Post', params: { slug } })
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

</script>

<template>
  <div class="posts-list">
    <div 
      v-for="post in posts" 
      :key="post.slug" 
      class="post-card"
      @click="openPost(post.slug)"
    >
      <span>
        <span class="post-card-date" style="margin-right: 1rem;">{{ formatDate(post.frontmatter.date) }}</span>
        <span class="post-card-tag" v-for="tag in post.frontmatter.tags" :key="tag">{{ tag }}</span>
      </span>
      <div class="post-card-title">{{ post.frontmatter.title }}</div>
    </div>
  </div>
</template>
