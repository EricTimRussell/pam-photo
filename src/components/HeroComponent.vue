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
          <img :src="carousel.img1" class="carousel-img" alt="...">
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
import { onMounted } from "vue";
import { carouselService } from "../services/CarouselService";

export default {
  props: {
    carousel: { type: Object, required: true }
  },
  setup() {
    async function getCarouselImages() {
      try {
        await carouselService.getCarouselImages()
      } catch (error) {
        console.error(error, "get carousel img's");
      }
    }

    onMounted(() => {
      getCarouselImages()
    })

    return {}
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