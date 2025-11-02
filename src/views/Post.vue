<!-- <script setup>
import { usePosts } from '../composables/usePosts'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const route = useRoute()
const posts = usePosts()
const postHtml = ref('')

onMounted(() => {
  const post = posts.find(p => p.slug === route.params.slug)
  if (post) {
    postHtml.value = md.render(post.content)
  }
})
</script>

<template>
  <article v-html="postHtml"></article>
</template> -->

<script setup>
import { usePosts } from '../composables/usePosts'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const posts = usePosts()
const currentPost = ref(null)

onMounted(() => {
  const post = posts.find(p => p.slug === route.params.slug)
  if (post) currentPost.value = post.component
})
</script>

<template>
  <article v-if="currentPost">
    <component :is="currentPost" />
  </article>
  <p v-else>Post not found</p>
</template>

