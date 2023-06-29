<template>
  <section class="container-fluid footer-bg">
    <!-- large screen navigation -->
    <div class="row no-mobile">
      <div class="d-flex justify-content-center col-12 mt-3">
        <RouterLink to="/">
          <span class="text-light">Home</span>
        </RouterLink>
        <RouterLink to="/about">
          <span class="text-light px-4">About</span>
        </RouterLink>
        <RouterLink to="/contact">
          <span class="text-light">Contact</span>
        </RouterLink>
        <RouterLink to="/galleries">
          <span class="text-light px-4">Galleries</span>
        </RouterLink>
      </div>
    </div>
    <!-- Admin controls -->
    <div class="row justify-content-end py-4">
      <div class="col-1 d-flex justify-content-end btn-group dropup">
        <i class="selectable text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="material-symbols-outlined fs-sm">
            admin_panel_settings
          </span>
        </i>
        <ul class="dropdown-menu">
          <li class="d-flex justify-content-center">
            <RouterLink to="/sign-in" class="btn-blank">
              <span class="material-symbols-outlined fs-md selectable admin-login">
                person
              </span>
            </RouterLink>
          </li>
          <li class="text-center">
            <RouterLink v-if="user" :to="{ name: 'Admin', params: { id: user?.uid } }">
              <span v-if="user.uid === '1B6XbfRQ8nOsoqNO2dYAJ6heoVF2'">Admin</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
// Firebase
import { useCurrentUser } from "vuefire";
// Vue
import { RouterLink } from "vue-router";
export default {
  setup() {
    const user = useCurrentUser()

    return {
      user
    }

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

.admin-login {
  color: blue;
  border-radius: 50%;
}

li:hover {
  text-decoration: underline;
  transform: scale(1.1);
}

a {
  color: inherit;
  font-family: 'Courier New', Courier, monospace;
}

a:hover {
  color: blue;
}

.router-link-active {
  color: blue;
}
</style>