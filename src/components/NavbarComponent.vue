<template>
  <div class="container-fluid nav-bg-top pt-2">
    <div class="row justify-content-center">
      <div class="col-4 text-end">
        <span class="fs-lg">Get</span>
      </div>
      <div class="d-flex justify-content-center col-3 pb-2">
        <RouterLink to="/">
          <img class="logo" oncontextmenu="return false" ondragstart="return false" src="../assets/logo.png" alt="">
        </RouterLink>
      </div>
      <div class="col-4 text-start">
        <span class="fs-lg">Outside</span>
      </div>
      <div class="col-12 text-center mb-3">
        <span class="fs-lg">Photography</span>
      </div>
    </div>
  </div>
  <div id="nav" class="container-fluid nav-bg-bot elevation py-2">
    <nav class="row">
      <div class="d-flex justify-content-center col-12">
        <RouterLink to="/">
          <span class="links fs-md">Home</span>
        </RouterLink>
        <RouterLink to="/about">
          <span class="links fs-md px-4">About</span>
        </RouterLink>
        <RouterLink to="/contact">
          <span class="links fs-md">Contact</span>
        </RouterLink>
        <RouterLink to="/galleries">
          <span class="links fs-md px-4">Galleries</span>
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

.logo {
  background-size: cover;
  height: auto;
  width: 13rem;
  border: 3px solid #cecfc7;
  border-radius: 25%;
}

@media (max-width: 576px) {
  .logo {
    width: 6rem;
  }
}
</style>