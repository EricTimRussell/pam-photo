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
          <img oncontextmenu="return false" ondragstart="return false" :src="imageUrl1" class="carousel-img selectable"
            data-bs-toggle="modal" data-bs-target="#carousel-Img1-modal" alt="...">
        </div>
        <div class="carousel-item">
          <img oncontextmenu="return false" ondragstart="return false" :src="imageUrl2" class="carousel-img selectable"
            data-bs-toggle="modal" data-bs-target="#carousel-Img2-modal" alt="...">
        </div>
        <div class="carousel-item">
          <img oncontextmenu="return false" ondragstart="return false" :src="imageUrl3" class="carousel-img selectable"
            data-bs-toggle="modal" data-bs-target="#carousel-Img3-modal" alt="...">
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
  </div>


  <!-- Carousel Image Modals -->
  <div class="modal fade" id="carousel-Img1-modal" tabindex="-1" aria-labelledby="carousel image" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-center">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <CarouselImageCard :imageUrl1="imageUrl1" :carousel="carousel[0]" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="carousel-Img2-modal" tabindex="-1" aria-labelledby="carousel image" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-center">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <CarouselImageCard :imageUrl2="imageUrl2" :carousel="carousel[1]" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="carousel-Img3-modal" tabindex="-1" aria-labelledby="carousel image" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-center">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <CarouselImageCard :imageUrl3="imageUrl3" :carousel="carousel[2]" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Firebase
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'
// Components
import CarouselImageCard from "../components/carousel/CarouselImageCard.vue"
export default {
  props: {
    carousel: { type: Object, required: true }
  },
  setup() {
    const storage = useFirebaseStorage();

    // get images from firebase storage
    const carouselImg1 = storageRef(storage, `carouselImg1`);
    const carouselImg2 = storageRef(storage, `carouselImg2`);
    const carouselImg3 = storageRef(storage, `carouselImg3`);

    // set and rename image urls
    const { url: imageUrl1 } = useStorageFile(carouselImg1);
    const { url: imageUrl2 } = useStorageFile(carouselImg2);
    const { url: imageUrl3 } = useStorageFile(carouselImg3);
    return {
      imageUrl1,
      imageUrl2,
      imageUrl3
    };
  },
  components: { CarouselImageCard }
}
</script>

<style scoped>
.carousel-img {
  object-fit: fill;
  display: block;
  min-width: 100%;
  height: 60vh;
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
    height: 15rem;
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