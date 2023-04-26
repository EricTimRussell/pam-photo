<template>
  <div v-if="user" class="container-fluid">
    <div class="row">
      <h1 class="text-center mt-5">Admin Page</h1>
      <div class="col-12 text-center mt-3">
        <h2>Carousel Images</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <CarouselImg1FormComponent />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <CarouselImg2FormComponent />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <CarouselImg3FormComponent />
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2>Featured Images Row 1</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <FeaturedImage1FormComponent />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <FeaturedImage2FormComponent />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <FeaturedImage3FormComponent />
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2>Featured Images Row 2</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <FeaturedImage4FormComponet />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <FeaturedImage5FormComponent />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <FeaturedImage6FormComponent />
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2>Featured Images Row 3</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <FeaturedImage7FormComponent />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <FeaturedImage8FormComponent />
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <FeaturedImage9FormComponent />
      </div>
    </div>
  </div>
  <div v-else>
    <span class="fs-xl d-flex justify-content-center">
      Admin Credentials Required
    </span>
  </div>
</template>

<script>
import { useCurrentUser } from "vuefire";
import CarouselImg1FormComponent from "../components/carousel/CarouselImg1FormComponent.vue";
import CarouselImg2FormComponent from "../components/carousel/CarouselImg2FormComponent.vue";
import CarouselImg3FormComponent from "../components/carousel/CarouselImg3FormComponent.vue";
import FeaturedImage1FormComponent from "../components/featuredImages/FeaturedImage1FormComponent.vue";
import FeaturedImage2FormComponent from "../components/featuredImages/FeaturedImage2FormComponent.vue";
import FeaturedImage3FormComponent from "../components/featuredImages/FeaturedImage3FormComponent.vue";
import FeaturedImage4FormComponet from "../components/featuredImages/FeaturedImage4FormComponet.vue";
import FeaturedImage5FormComponent from "../components/featuredImages/FeaturedImage5FormComponent.vue";
import FeaturedImage6FormComponent from "../components/featuredImages/FeaturedImage6FormComponent.vue";
import FeaturedImage7FormComponent from "../components/featuredImages/FeaturedImage7FormComponent.vue";
import FeaturedImage8FormComponent from "../components/featuredImages/FeaturedImage8FormComponent.vue";
import FeaturedImage9FormComponent from "../components/featuredImages/FeaturedImage9FormComponent.vue";

export default {
  setup() {
    const user = useCurrentUser()
    return { user };
  },
  components: { CarouselImg1FormComponent, CarouselImg2FormComponent, CarouselImg3FormComponent, FeaturedImage1FormComponent, FeaturedImage2FormComponent, FeaturedImage3FormComponent, FeaturedImage4FormComponet, FeaturedImage5FormComponent, FeaturedImage6FormComponent, FeaturedImage7FormComponent, FeaturedImage8FormComponent, FeaturedImage9FormComponent }
}
</script>

<style lang="scss" scoped></style>