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
      <div class="d-flex justify-content-center col-12 gap-3">
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
.nav-background {
  background: linear-gradient(#51a151 10%, #daffda);
}

@media only screen and (max-width: 770px) {
  .nav-height {
    height: 14vh;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>