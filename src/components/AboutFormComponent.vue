<template>
  <form @submit.prevent="editAbout()">
    <span class="fs-lg">Edit About</span>
    <div class="form-floating">
      <textarea v-model="editable.about" class="form-control" placeholder="Edit about section here" id="about"
        style="height: 150px"></textarea>
      <label for="floatingTextarea2">about</label>
    </div>
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
import { aboutService } from "../services/AboutService"
export default {
  props: {
    about: { type: Object, required: false }
  },
  setup(props) {
    const db = useFirestore()
    const about = doc(db, "aboutSection", "about")
    const aboutSource = useDocument(about)

    const editable = ref({})

    watch(aboutSource, (aboutSource) => {
      // @ts-ignore
      editable.value = {
        ...aboutSource,
      }
    })
    return {
      editable,
      about,
      async editAbout() {
        try {
          await aboutService.editAbout(editable, about)
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>