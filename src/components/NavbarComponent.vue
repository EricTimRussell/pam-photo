<template>
  <div class="container-fluid bg-secondary elevation-5 height pt-2">
    <nav class="row">
      <div class="d-flex col-md-6 col-6 order-sm-1 order-md-1">
        <router-link to="/">
          <h1>Pam Photo</h1>
        </router-link>
      </div>
      <div class="col-md-3 col-6 order-sm-2 order-md-3 d-flex justify-content-end">
        <router-link to="/cart" class="btn-blank">
          <span class="material-symbols-outlined fs-xl selectable cart-avatar">
            shopping_cart
          </span>
        </router-link>
      </div>
      <div class="d-flex col-md-3 col-sm-12 gap-5 order-sm-3 order-md-2">
        <router-link to="/collections">
          <h2 class="links text-2xl">Collections</h2>
        </router-link>
        <router-link to="/market">
          <h2 class="links text-2xl">Market</h2>
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
.height {
  height: 7vh;
}

@media only screen and (max-width: 770px) {
  .height {
    height: 14vh;
  }

  .cart-avatar {
    font-size: 32px;
  }
}

.cart-avatar {
  color: blue;
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