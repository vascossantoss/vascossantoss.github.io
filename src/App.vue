<template>

  <header>
    <Navbar />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <p>&copy; 2025 Vasco Santos. All rights reserved.</p>
  </footer>

</template>

<script setup>
// Your script (Composition API)
  import Navbar from './components/Navbar.vue';
</script>

<style scoped>

</style>
