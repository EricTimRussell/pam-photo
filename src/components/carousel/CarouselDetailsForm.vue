<template>
  <form @submit.prevent="editCarouselDetails()">
    <div class="form-floating mb-3">
      <input type="text" v-model="editable.title" class="form-control" id="title" placeholder="Snowy Fox">
      <label for="title">Title</label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </div>
  </form>
</template>

<script>
import { doc, updateDoc } from "firebase/firestore";
import { ref } from "vue";
import { useFirestore } from "vuefire";
export default {
  setup() {
    const db = useFirestore()
    const carousel1 = doc(db, "carousel", "carousel1");
    const editable = ref({ title: '' })
    return {
      editable,
      async editCarouselDetails() {
        try {
          await updateDoc(carousel1, {
            title: editable.value.title
          });
        } catch (error) {

        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>