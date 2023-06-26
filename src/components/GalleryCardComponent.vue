<template>
  <div class="container-fluid">
    <div class="row">
      <div v-if="galleries.theme == 'birds'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'animals'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'flowers'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'water'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'landscapes'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'rural'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'still life'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'sunsets'" class="col-sm-12 col-md-4 col-lg-3 flickr-card mb-3">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { deleteDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useCurrentUser, useFirestore } from "vuefire";

export default {
  props: {
    galleries: { type: Object, required: true }
  },
  setup(props) {
    const user = useCurrentUser()
    const db = useFirestore()
    return {
      user,
      async deleteGallery() {
        try {

          await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes delete'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteDoc(doc(db, 'galleries', props.galleries.id))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        } catch (error) {
          console.error(error, 'Deleting Gallery');
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: none;
}

.flickr-card {
  background-image: url(../assets/placeholder.jpg);
  background-size: cover;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-card:hover {
  transform: scale(1.2);
}

.flickr-title {
  color: #140096;
  text-shadow: 3px 2px #d9d9d9;
  font-weight: bolder;
  letter-spacing: 7px;
}

.delete-icon:hover {
  transform: scale(1.2);
}
</style>