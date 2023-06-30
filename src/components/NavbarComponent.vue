<template>
  <div class="container-fluid nav-bg-top pt-2 bg-nav">
    <!-- Mobile only nav -->
    <div id="nav" class="col-12 d-flex justify-content-end">
      <div class="dropdown-center mobile-only">
        <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="fs-xl material-symbols-outlined">
            menu
          </span>
        </button>
        <nav class="dropdown-menu">
          <div class="d-flex flex-column align-items-center mobile-nav">
            <RouterLink to="/">
              <span class="fs-sm">Home</span>
            </RouterLink>
            <RouterLink to="/about">
              <span class="fs-sm">About</span>
            </RouterLink>
            <RouterLink to="/contact">
              <span class="fs-sm">Contact</span>
            </RouterLink>
            <RouterLink to="/galleries">
              <span class="fs-sm">Galleries</span>
            </RouterLink>
            <a href="" target="_blank">
              <span class="fs-sm">Shop</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 text-end">
        <span class="fs-lg no-mobile">Get</span>
      </div>
      <div class="d-flex justify-content-center col-3 pb-2">
        <RouterLink to="/">
          <img class="logo" oncontextmenu="return false" ondragstart="return false" src="../assets/logo.png" alt="">
        </RouterLink>
      </div>
      <div class="col-4 text-start">
        <span class="fs-lg no-mobile">Outside</span>
      </div>
      <div class="col-12 text-center mb-3">
        <span class="fs-lg no-mobile">Photography</span>
      </div>
    </div>
  </div>
  <!-- larger screen nav -->
  <div id="nav" class="container-fluid nav-bg-bot elevation py-2 no-mobile">
    <nav class="row">
      <div class="d-flex justify-content-center col-12">
        <RouterLink to="/">
          <span class="fs-sm">Home</span>
        </RouterLink>
        <RouterLink to="/about">
          <span class="fs-sm px-4">About</span>
        </RouterLink>
        <RouterLink to="/contact">
          <span class="fs-sm">Contact</span>
        </RouterLink>
        <RouterLink to="/galleries">
          <span class="fs-sm px-4">Galleries</span>
        </RouterLink>
        <a href="" target="_blank" rel="noopener noreferrer">
          <span class="fs-sm">Shop</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
// Vue
import { RouterLink } from "vue-router"

export default {
  setup() {
    return {};
  },
  components: { RouterLink }
}
</script>

<style scoped>
#nav .router-link-active {
  transform: scale(1.2);
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
    width: 12rem;
  }
}
</style>