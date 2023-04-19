<template>
  <section class="container-fluid bg-secondary">
    <div class="row py-2">
      <div class="d-flex justify-content-end col-12 pt-3">
        <RouterLink to="/sign-in" class="btn-blank">
          <span class="material-symbols-outlined fs-md selectable admin-login">
            person
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  setup() {


    return {}

  },
  components: { RouterLink }
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

.admin-login {
  color: blue;
  border-radius: 50%;
}
</style>