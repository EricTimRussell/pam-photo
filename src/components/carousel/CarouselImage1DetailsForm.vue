<template>
  <form @submit.prevent="editCarouselDetails()">
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.title" maxlength="32" class="form-control" id="title" placeholder="Image Title"
        required>
      <label for="title">Title</label>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editable.description" class="form-control" style="height: 125px;" maxlength="325"
        id="description" aria-label="textarea" required>
      </textarea>
      <label for="description">Description</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.location" maxlength="32" class="form-control" id="location"
        placeholder="Photo Location" required>
      <label for="location">Loaction</label>
    </div>
    <!-- <div class="form-floating mb-3">
      <input type="text" v-model="editable.shopUrl" maxlength="100" class="form-control" id="shopUrl"
        placeholder="shop Url" required>
      <label for="shopUrl">Product URL</label>
    </div> -->
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </div>
  </form>
</template>

<script>
// Firebase
import { doc } from "firebase/firestore"
import { useDocument, useFirestore } from "vuefire"
// Vue
import { ref, watch } from "vue"
// Services
import { carouselDetailsService } from "../../services/CarouselDetailsService"
export default {
  props: {
    carousel: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const carousel1 = doc(db, "carousel", "carousel1");
    const carousel1Source = useDocument(carousel1)

    const editable = ref({})

    watch(carousel1Source, (carousel1Source) => {
      editable.value = {
        ...carousel1Source,
      }
    })
    return {
      editable,
      carousel1,
      async editCarouselDetails() {
        try {
          await carouselDetailsService.editCarouselImage1Details(editable, carousel1)
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>