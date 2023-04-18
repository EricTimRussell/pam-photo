<template>
  <section class="container-fluid bg-secondary">
    <div class="row justify-content-center py-2">
      <!-- section title -->
      <div class="col-12 d-flex justify-content-center">
        <h2 class="text-4xl col-start-2">Contact</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
    </div>
    <!-- section contact and policies -->
    <div class="row justify-content-center">
      <div class="d-flex justify-content-center col-12 col-md-2 pt-3">
        <a class="gap-3" href="" target="_blank">
          <span class="d-flex justify-content-center fs-lg material-symbols-outlined">
            thumb_up
          </span>
          <p>Photo Social Media Site Link</p>
        </a>
      </div>
      <div class="d-flex justify-content-center col-12 col-md-2 pt-3">
        <a class="gap-3" href="mailto:">
          <span class="d-flex justify-content-center fs-lg material-symbols-outlined">
            mail
          </span>
          <p>Email Address</p>
        </a>
      </div>
      <div class="d-flex justify-content-center col-12 col-md-2 pt-3">
        <span class="d-flex justify-content-center fs-lg material-symbols-outlined selectable" data-bs-toggle="modal"
          data-bs-target="#policies">
          policy
        </span>
        <p>Policies</p>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <router-link to="/sign-in" class="btn-blank">
          <span class="material-symbols-outlined fs-lg selectable cart-avatar">
            person
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
.section-divider {
  background-color: gray;
  width: 100px;
  height: 5px;
}

a {
  text-decoration: none;
  color: inherit;
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
</style>