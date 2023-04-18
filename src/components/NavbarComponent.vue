<template>
  <div class="container-fluid bg-primary elevation nav-height pt-2">
    <nav class="row">
      <div class="d-flex justify-content-center col-12">
        <router-link to="/">
          <h1>Pam Logo</h1>
        </router-link>
      </div>
      <div class="d-flex justify-content-center col-12 gap-3 bg-info">
        <router-link to="/collections">
          <h4 class="links text-2xl">Gallery</h4>
        </router-link>
        <router-link to="/about">
          <h4 class="links text-2xl">About</h4>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
.nav-height {
  height: 14vh;
}

@media only screen and (max-width: 770px) {
  .nav-height {
    height: 14vh;
  }

  .cart-avatar {
    font-size: 32px;
  }
}

.cart-avatar {
  color: blue;
  border-radius: 50%;
  background-color: white;
}

.cart-avatar:hover {
  background-color: greenyellow;
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>