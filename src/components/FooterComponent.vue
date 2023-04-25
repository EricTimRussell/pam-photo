<template>
  <section class="container-fluid bg-secondary">
    <div class="row justify-content-end py-2">
      <div class="col-1 d-flex justify-content-end btn-group dropup">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Admin
        </button>
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
import { RouterLink } from "vue-router";
import { useCurrentUser } from "vuefire";
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

a {
  text-decoration: none;
  color: inherit;
}

.admin-login {
  color: blue;
  border-radius: 50%;
}
</style>