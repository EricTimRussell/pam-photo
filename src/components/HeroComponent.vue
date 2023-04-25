<template>
  <div id="carouselButton" class="carousel slide pt-5" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselButton" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselButton" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselButton" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-container">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="url" class="carousel-img" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="carousel.img2" class="carousel-img" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="carousel.img3" class="carousel-img" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev ml" type="button" data-bs-target="#carouselButton" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next mr" type="button" data-bs-target="#carouselButton" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <span class="material-symbols-outlined d-flex justify-content-center fs-sm selectable">
      edit
    </span>
  </div>
</template>

<script>
import { useFileDialog } from '@vueuse/core'
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'
export default {
  props: {
    carousel: { type: Object, required: true }
  },
  setup() {
    const { files, open } = useFileDialog()
    const storage = useFirebaseStorage()
    const carouselImg1 = storageRef(storage, `carouselImg1`)

    const {
      url,
      // gives you a percentage between 0 and 1 of the upload progress
      uploadProgress,
      uploadError,
      // firebase upload task
      uploadTask,
      upload,
    } = useStorageFile(carouselImg1)

    function uploadPicture() {
      const data = files.value?.item(0)
      if (data) {
        upload(data)
      }
    }

    return {
      uploadPicture,
      url,
      uploadTask,
      open,
    }
  }
}
</script>

<style scoped>
.carousel-img {
  object-fit: cover;
  display: block;
  width: auto;
  min-width: 100%;
  height: 55vh;
}

.carousel-container {
  margin-left: 20%;
  margin-right: 20%;
}

.ml {
  margin-left: 20%;
}

.mr {
  margin-right: 20%;
}

@media only screen and (max-width: 770px) {
  .carousel-img {
    object-fit: cover;
    display: block;
    width: auto;
    height: 25vh;
  }

  .ml {
    margin-left: 15%;
  }

  .mr {
    margin-right: 15%;
  }

  .carousel-container {
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>