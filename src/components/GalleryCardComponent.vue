<template>
  <div class="container-fluid">
    <div class="row">
      <div v-if="galleries.theme == 'birds'" class="col-sm-12 col-md-4 col-lg-3 col-4 flickr-birds mb-5">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'animals'" class="col-sm-12 col-md-4 col-lg-3 flickr-animals mb-5">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'flowers'" class="col-sm-12 col-md-4 col-lg-3 flickr-flowers mb-5">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'water'" class="col-sm-12 col-md-4 col-lg-3 flickr-water mb-5">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'landscapes'" class="col-sm-12 col-md-4 col-lg-3 flickr-landscapes mb-5">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'rural'" class="col-sm-12 col-md-4 col-lg-3 flickr-rural mb-5">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'still life'" class="col-sm-12 col-md-4 col-lg-3 flickr-still-life mb-5">
        <span v-if="user" @click="deleteGallery()" title="delete"
          class="material-symbols-outlined fs-sm text-danger selectable delete-icon p-2">
          delete_forever
        </span>
        <a :href="galleries.url" target="_blank">
          <span class="flickr-title d-flex flex-column align-items-center fs-lg mt-5">{{ galleries.title }}</span>
        </a>
      </div>
      <div v-if="galleries.theme == 'sunsets'" class="col-sm-12 col-md-4 col-lg-3 flickr-sunsets mb-5">
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

.flickr-birds {
  background-image: url(../assets/galleries/birds.jpg);
  background-size: cover;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-birds:hover {
  transform: scale(1.1);
}

.flickr-animals {
  background-image: url(../assets/galleries/animals.jpg);
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-animals:hover {
  transform: scale(1.1);
}

.flickr-flowers {
  background-image: url(../assets/galleries/flowers.jpg);
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-flowers:hover {
  transform: scale(1.1);
}

.flickr-water {
  background-image: url(../assets/galleries/water.jpg);
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-water:hover {
  transform: scale(1.1);
}

.flickr-landscapes {
  background-image: url(../assets/galleries/landscapes.jpg);
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-landscapes:hover {
  transform: scale(1.1);
}

.flickr-rural {
  background-image: url(../assets/galleries/rural.jpg);
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-rural:hover {
  transform: scale(1.1);
}

.flickr-still-life {
  background-image: url(../assets/galleries/still-life.jpg);
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-still-life:hover {
  transform: scale(1.1);
}

.flickr-sunsets {
  background-image: url(../assets/galleries/sunsets.jpg);
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-sunsets:hover {
  transform: scale(1.1);
}

.flickr-title {
  color: #140096;
  text-shadow: 3px 2px #d9d9d9;
  font-weight: bolder;
  letter-spacing: 7px;
}

.delete-icon:hover {
  transform: scale(1.1);
}
</style>