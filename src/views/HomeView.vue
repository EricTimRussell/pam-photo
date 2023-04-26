<template>
  <!-- HERO -->
  <div>
    <HeroComponent :carousel="carousel" />
  </div>

  <!-- Introduction -->
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2>Welcome Introduction</h2>
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
  <div>
    <FeaturedImagesComponent />
  </div>
</template>

<script>
import FeaturedImagesComponent from "../components/FeaturedImagesComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import { appState } from "../stores/AppState"
import { computed } from "@vue/reactivity"
export default {
  setup() {
    return {
      carousel: computed(() => appState.carousel),
    };
  },
  components: { HeroComponent, FeaturedImagesComponent }
}
</script>

<style scoped>
.section-divider {
  background-color: gray;
  width: 100px;
  height: 5px;
}
</style>
