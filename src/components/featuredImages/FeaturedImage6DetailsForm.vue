<template>
  <form @submit.prevent="editFeaturedImage6Details()">
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.title" maxlength="32" class="form-control" id="title" placeholder="Image Title"
        required>
      <label for="title">Title</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editable.description" style="height: 125px;" maxlength="325" class="form-control"
        id="description" aria-label="textarea" required>
      </textarea>
      <label for="description">Description</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.location" maxlength="32" class="form-control" id="location"
        placeholder="Photo Location" required>
      <label for="location">Loaction</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.shopUrl" maxlength="100" class="form-control" id="shopUrl"
        placeholder="shop Url" required>
      <label for="shopUrl">Product URL</label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </div>
  </form>
</template>
<script>
import { doc } from "firebase/firestore"
import { useDocument, useFirestore } from "vuefire"
// Vue
import { ref, watch } from "vue"
// Services
import { featuredPhotosService } from "../../services/FeaturedPhotosService"
export default {
  props: {
    featured: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const featured6 = doc(db, "featuredImages", "featured6");
    const featured6Source = useDocument(featured6)

    const editable = ref({})

    watch(featured6Source, (featured6Source) => {
      // @ts-ignore
      editable.value = {
        ...featured6Source,
      }
    })
    return {
      editable,
      featured6,
      async editFeaturedImage6Details() {
        try {
          await featuredPhotosService.editFeaturedImage6Details(editable, featured6)
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>