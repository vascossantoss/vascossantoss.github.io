<template>
  <section>
    <h1>Contact Me</h1>

    <!-- Email -->
    <div>
      <font-awesome-icon icon="envelope" />
      <a
        href="mailto:silvavascosantos@gmail.com"
      >
        silvavascosantos@gmail.com
      </a>
    </div>

    <div>
      <font-awesome-icon :icon="['fab', 'github']"  />
      <a
        href="https://github.com/vascossantoss"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>

    <div>
      <font-awesome-icon :icon="['fab', 'instagram']"  />
      <a
        href="https://instagram.com/vascossantos"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>

    <div>
      <font-awesome-icon :icon="['fab', 'linkedin']"  />
      <a
        href="https://linkedin.com/in/vascossantos"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>


  </section>
</template>

<script setup>
// No extra JS needed
</script>

<style scoped>
ul li a {
  transition: color 0.2s;
}
</style>
