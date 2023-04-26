<template>
  <!-- Featured Images -->
  <section class="container-fluid mb-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2>Featured Photo's</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
    </div>
    <div class="row justify-content-center">
      <!-- photo row 1 -->
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
    </div>
    <!-- photo row 2 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
    </div>
    <!-- photo row 3 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.featured-img {
  object-fit: cover;
  display: block;
  width: 100%;
  height: 35vh;
}
</style>