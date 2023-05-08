<template>
  <form @submit.prevent="editFeaturedImage2Details()">
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.title" class="form-control" id="title" placeholder="Image Title" required>
      <label for="title">Title</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editable.description" class="form-control" id="description" aria-label="textarea" required>
      </textarea>
      <label for="description">Description</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.location" class="form-control" id="location" placeholder="Photo Location"
        required>
      <label for="location">Loaction</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.date" class="form-control" id="date" placeholder="Photo date" required>
      <label for="date">Date Taken</label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </div>
  </form>
</template>
<script>
import { doc } from "firebase/firestore";
import { ref, watch } from "vue";
import { useDocument, useFirestore } from "vuefire";
import { featuredPhotosService } from "../../services/FeaturedPhotosService";
export default {
  props: {
    featured: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const featured2 = doc(db, "featuredImages", "featured2");
    const featured2Source = useDocument(featured2)

    const editable = ref({})

    watch(featured2Source, (featured2Source) => {
      // @ts-ignore
      editable.value = {
        ...featured2Source,
      }
    })
    return {
      editable,
      featured2,
      async editFeaturedImage2Details() {
        try {
          await featuredPhotosService.editFeaturedImage2Details(editable, featured2)
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>