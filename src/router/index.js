import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Writings from '../views/Writings.vue'
import Photography from '../views/Photography.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import Post from '../views/Post.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/writings', name: 'Writings', component: Writings },
  { path: '/photography', name: 'Photography', component: Photography },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/post/:slug', name: 'Post', component: Post, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
