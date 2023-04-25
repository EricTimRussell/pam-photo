<template>
  <div class="container-fluid">
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
  </div>
</template>

<script>
import CarouselImg1FormComponent from "../components/carousel/CarouselImg1FormComponent.vue";
import CarouselImg2FormComponent from "../components/carousel/CarouselImg2FormComponent.vue";
import CarouselImg3FormComponent from "../components/carousel/CarouselImg3FormComponent.vue";

export default {
  setup() {
    return {};
  },
  components: { CarouselImg1FormComponent, CarouselImg2FormComponent, CarouselImg3FormComponent }
}
</script>

<style lang="scss" scoped></style>