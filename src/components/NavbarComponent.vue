<template>
  <div class="container-fluid bg-secondary elevation-5 height pt-2">
    <nav class="row">
      <div class="d-flex justify-content-center col-md-6 col-6 order-sm-1 order-md-1">
        <router-link to="/">
          <h1>Pam Photo</h1>
        </router-link>
      </div>
      <div class="col-md-3 col-6 order-sm-2 order-md-3 d-flex justify-content-end align-content-center flex-wrap">
        <router-link to="/account" class="btn-blank">
          <span class="material-symbols-outlined fs-lg selectable cart-avatar">
            person
          </span>
        </router-link>
      </div>
      <div class="d-flex align-content-center flex-wrap col-md-3 col-sm-12 gap-5 order-sm-3 order-md-2">
        <router-link to="/collections">
          <h4 class="links text-2xl">COLLECTIONS</h4>
        </router-link>
        <router-link to="/market">
          <h4 class="links text-2xl">MARKET</h4>
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
  height: 70px;
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