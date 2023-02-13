<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <header>
    <NavbarComponent />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped>

</style>
