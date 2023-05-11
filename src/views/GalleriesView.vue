<template>
  <div class="container-fluid height">
    <div class="row justify-content-center">
      <div class="col-12 d-flex flex-column align-items-center mt-3 mb-3">
        <h1>Flickr Galleries</h1>
        <div class="section-divider text-center"></div>
      </div>
      <div v-if="user" class="col-12 text-end">
        <button title="Create Gallery" class="btn btn-primary">
          <span class="material-symbols-outlined fs-lg">
            add
          </span>
        </button>
      </div>
    </div>
  </div>
  <!-- TODO create functionality for admin to create link cards -->
  <!-- TODO create fancy card links that take you to flickr galleries with dynamic CSS classes -->
</template>

<script>
import { addDoc, collection } from "firebase/firestore";
import { useCurrentUser, useFirestore } from "vuefire";
import { ref } from "vue";

export default {
  setup() {
    const user = useCurrentUser()
    const db = useFirestore()
    const editable = ref({})
    return {
      editable,
      user,
      async createGallery() {
        try {
          const newGallery = await addDoc(collection(db, 'galleries'), {
            ...editable.value
          });
        } catch (error) {
          console.error(error, 'Creating Gallery')
        }
      }
    };
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #45453a
}

.height {
  height: 75vh;
}

.section-divider {
  background-color: gray;
  width: 200px;
  height: 5px;
}
</style>