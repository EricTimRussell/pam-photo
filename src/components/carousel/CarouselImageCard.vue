<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false" :src="url1" alt="">
      </div>
      <div class="col-4 d-flex flex-column">
        <h2>{{ carousel?.title }}</h2>
        <p>{{ carousel?.description }}
        </p>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p>{{ carousel?.location }}</p>
        <p class="px-5">{{ carousel?.date }}</p>
        <a href=""><span class="material-symbols-outlined">
            shopping_bag
          </span>Link to store</a>
      </div>
    </div>
  </div>
</template>

<script>
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { ref as storageRef } from 'firebase/storage'

export default {
  props: {
    url1: { type: String, required: false },
    carousel: { type: Object, required: false }
  },
  setup() {
    const storage = useFirebaseStorage();
    const carouselImg1 = storageRef(storage, `carouselImg1`);
    const { url: url1 } = useStorageFile(carouselImg1);

    return {
      url1
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-img {
  object-fit: cover;
  display: block;
  width: 90%;
  height: auto;
}
</style>