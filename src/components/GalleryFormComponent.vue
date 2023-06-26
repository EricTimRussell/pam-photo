<template>
  <form @submit.prevent="createGallery()">
    <h1>Create Gallery</h1>
    <div class="form-floating mb-3">
      <input v-model="editable.title" type="text" class="form-control" id="galleryTitle" placeholder="title of gallery">
      <label for="galleryTitle">Title</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.url" type="text" class="form-control" id="galleryUrl" placeholder="www.gallery.com">
      <label for="galleryUrl">URL</label>
    </div>
    <div class="form-floating">
      <select v-model="editable.theme" class="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option value="nature">Birds</option>
        <option value="animals">Animals</option>
        <option value="water">Lakes & Streams</option>
        <option value="buildings">Rural</option>
        <option value="buildings">Still Life</option>
        <option value="buildings">Sunsets</option>
        <option value="buildings">Landscapes</option>
        <option value="buildings">Flowers</option>
      </select>
      <label for="floatingSelect">Select Theme</label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
    </div>
  </form>
</template>

<script>
import { addDoc, collection } from "firebase/firestore";
import { useCurrentUser, useFirestore } from "vuefire";
import { ref } from "vue";

export default {
  setup() {
    const user = useCurrentUser()
    const db = useFirestore()
    const editable = ref({ title: '', url: '', theme: '' })

    return {
      editable,
      user,
      async createGallery() {
        try {
          const newGallery = await addDoc(collection(db, 'galleries'), {
            ...editable.value
          });
          editable.value = { title: '', url: '', theme: '' }
        } catch (error) {
          console.error(error, 'Creating Gallery')
        }
      }
    };
  },
}
</script>

<style lang="scss" scoped></style>