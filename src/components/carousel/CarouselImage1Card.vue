<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false" :src="url1" alt="">
      </div>
      <div class="col-4 d-flex flex-column">
        <h2>{{ carousel[0]?.title }}</h2>
        <p>{{ carousel[0]?.description }}
        </p>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p> {{ carousel[0]?.gps }}</p>
        <!-- Link to geo point -->
        <p class="px-5">{{ carousel[0]?.location }}</p>
        <p>{{ carousel[0]?.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { ref as storageRef } from 'firebase/storage'

export default {
  props: {
    url1: { type: String },
    carousel: { type: Object, required: true }
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