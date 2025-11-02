<template>
  <nav>
    <div class="nav-container">
      <!-- Logo -->
      <div class="nav-logo">
        <span><router-link to="/">vascosantos</router-link></span>
      </div>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li class="nav-link"><router-link to="/writings">writings</router-link></li>
        <li class="nav-link"><router-link to="/photography">photography</router-link></li>
        <li class="nav-link"><router-link to="/about">about</router-link></li>
        <li class="nav-link"><router-link to="/contact">contact</router-link></li>
      </ul>

      <!-- Optional: Action Button / Profile / Toggle -->
      <div class="nav-actions">
        <!-- Example: -->
        <!-- <button>Login</button> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
// Add your reactive state, imports, or logic here if needed
// e.g. const isMenuOpen = ref(false)
</script>

<style scoped>
/* Basic structure placeholders */

nav {
  /* background-color, padding, border, etc. */
}

.nav-logo {
    font-size: 1.5em;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.nav-actions {
  /* styles for buttons or user menu */
}
</style>
