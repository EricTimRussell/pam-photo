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
          <img oncontextmenu="return false" ondragstart="return false" :src="url1" class="carousel-img selectable"
            data-bs-toggle="modal" data-bs-target="#carousel-Img1-modal" alt="...">
        </div>
        <div class="carousel-item">
          <img oncontextmenu="return false" ondragstart="return false" :src="url2" class="carousel-img selectable"
            data-bs-toggle="modal" data-bs-target="#carousel-Img2-modal" alt="...">
        </div>
        <div class="carousel-item">
          <img oncontextmenu="return false" ondragstart="return false" :src="url3" class="carousel-img selectable"
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


  <!-- Carousel Modals -->
  <div class="modal fade" id="carousel-Img1-modal" tabindex="-1" aria-labelledby="carousel image" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-center">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <CarouselImage1Card :url1="url1" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
          <CarouselImage2Card :url2="url2" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
          <CarouselImage3Card :url3="url3" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'
import CarouselImage1Card from "../components/carousel/CarouselImage1Card.vue";
import CarouselImage2Card from "./carousel/CarouselImage2Card.vue";
import CarouselImage3Card from "./carousel/CarouselImage3Card.vue";
export default {
  props: {
    carousel: { type: Object, required: true }
  },
  setup() {
    const storage = useFirebaseStorage();
    const carouselImg1 = storageRef(storage, `carouselImg1`);
    const carouselImg2 = storageRef(storage, `carouselImg2`);
    const carouselImg3 = storageRef(storage, `carouselImg3`);
    const { url: url1 } = useStorageFile(carouselImg1);
    const { url: url2 } = useStorageFile(carouselImg2);
    const { url: url3 } = useStorageFile(carouselImg3);
    return {
      url1,
      url2,
      url3
    };
  },
  components: { CarouselImage1Card, CarouselImage2Card, CarouselImage3Card }
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