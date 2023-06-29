
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

<script setup>
// Vue
import { RouterView } from 'vue-router'
// Components
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";


</script>

<style scoped>
footer {
  box-shadow: 0 2px 5px -1px #00000033, 0 5px 6px 0 #00000024, 0 1px 12px 10px #0000001f;
}
</style>
