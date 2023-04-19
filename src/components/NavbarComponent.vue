<template>
  <div class="container-fluid bg-primary pt-2">
    <div class="row">
      <div class="d-flex justify-content-center col-12 pb-2">
        <RouterLink to="/">
          <h1>Logo</h1>
        </RouterLink>
      </div>
    </div>
  </div>
  <div id="nav" class="container-fluid bg-info elevation py-2">
    <nav class="row">
      <div class="d-flex justify-content-center col-12 gap-5">
        <RouterLink to="/collections">
          <span class="links fs-md">Gallery</span>
        </RouterLink>
        <RouterLink to="/about">
          <span class="links fs-md">About</span>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  setup() {
    return {};
  },
  components: { RouterLink }
}
</script>

<style scoped>
#nav .router-link-active {
  transform: scale(1.3);
  color: blue;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: blue;
}
</style>