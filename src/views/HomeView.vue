<template>
  <!-- HERO -->
  <div>
    <HeroComponent :carousel="carousel" />
  </div>

  <!-- Introduction -->
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2 class="">Welcome Introduction</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
      <div class="col-md-7 d-flex pt-3 px-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, odit
          quos
          ea,
          temporibus quas obcaecati
          expedita recusandae perspiciatis dolorem, doloremque vitae sequi. Voluptas quibusdam eveniet odio laudantium
          nobis in est!
          Voluptates iure, reprehenderit aspernatur expedita facilis consectetur, commodi molestias facere optio velit
          tenetur porro sequi ipsam. Error cum rem laborum illum dolore, veniam, delectus iure ea ipsam nesciunt sunt
          quaerat.</p>
      </div>
    </div>
  </section>

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
      <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
        <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
      </div>
      <!-- photo row 2 -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
        </div>
      </div>
      <!-- photo row 3 -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img elevation" src="../assets/placeholder.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import { appState } from "../stores/AppState"
import { computed } from "@vue/reactivity"
export default {
  setup() {
    return {
      carousel: computed(() => appState.carousel),
    };
  },
  components: { HeroComponent }
}
</script>

<style scoped>
.section-divider {
  background-color: gray;
  width: 100px;
  height: 5px;
}

.carousel-img {
  object-fit: cover;
  display: block;
  width: auto;
  min-width: 100%;
  height: 55vh;
}

.featured-img {
  object-fit: cover;
  display: block;
  width: 100%;
  height: 35vh;
  max-width: fit-content;
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
