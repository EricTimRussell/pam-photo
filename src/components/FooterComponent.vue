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
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-3 d-flex justify-content-center text-light">
        <a href="mailto:getoutsidephotography@outlook.com">
          <span class="material-symbols-outlined fs-sm" title="Email">
            mail
          </span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61551677375568" target="_blank">
          <span class="text-primary material-symbols-outlined fs-sm px-4" title="Facebook">
            thumb_up
          </span>
        </a>
        <a href="https://www.flickr.com/photos/197012563@N05/" target="_blank">
          <span class="flickr-color material-symbols-outlined fs-sm" title="flickr">
            camera
          </span>
        </a>
        <!-- <a href="" target="_blank">
          <span class="instagram-color material-symbols-outlined fs-sm" title="Instagram">
            photo_camera
          </span>
        </a> -->
      </div>
    </div>
    <!-- Admin controls -->
    <div class="row justify-content-end">
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
              <span v-if="user">Admin</span>
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
  text-decoration: none;
}

a:hover{
  transform: scale(1.1);
}

span:hover{
  transform: scale(1.1);
}

.router-link-active {
  color: blue;
}

.instagram-color{
 color: lightcoral;
}

.flickr-color{
 color: hotpink;
}
</style>