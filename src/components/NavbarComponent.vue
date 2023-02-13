<template>
  <div class="container-fluid bg-secondary elevation-5 height pt-2">
    <nav class="row">
      <div class="d-flex col-md-6 col-6 order-sm-1 order-md-1">
        <router-link to="/">
          <h1>Pam Photo</h1>
        </router-link>
      </div>
      <div class="col-md-3 col-6 order-sm-2 order-md-3 d-flex justify-content-end">
        <button class="btn-blank">
          <span class="material-symbols-outlined fs-xl selectable prof-avatar">
            account_circle
          </span>
        </button>
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
  height: 9vh;
}

@media only screen and (max-width: 770px) {
  .height {
    height: 14vh;
  }

  .prof-avatar {
    font-size: 32px;
  }
}

.prof-avatar {
  color: blue;
  background-color: beige;
  border-radius: 50%;
}

.prof-avatar:hover {
  background-color: greenyellow;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>