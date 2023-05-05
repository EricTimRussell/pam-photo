<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false" :src="url3" alt="">
      </div>
      <div class="col-4 d-flex flex-column">
        <h2>{{ carousel[2]?.title }}</h2>
        <p>{{ carousel[2]?.description }}
        </p>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p> {{ carousel[2]?.gps }}</p>
        <!-- Link to geo point -->
        <p class="px-5">{{ carousel[2]?.location }}</p>
        <p>{{ carousel[2]?.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { ref as storageRef } from 'firebase/storage'

export default {
  props: {
    url3: { type: String, required: false },
    carousel: { type: Object, required: true }
  },
  setup() {
    const storage = useFirebaseStorage();
    const carouselImg3 = storageRef(storage, `carouselImg3`);
    const { url: url3 } = useStorageFile(carouselImg3);


    return {
      url3
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