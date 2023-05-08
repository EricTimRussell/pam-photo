<template>
  <!-- HERO -->
  <div>
    <HeroComponent :carousel="carousel" />
  </div>

  <!-- Introduction -->
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2 class="fs-xl">Welcome to Get Oustide Photography</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
      <SummaryCardComponent :summary="summary[0]" />
    </div>
  </section>

  <!-- Featured Images -->
  <div>
    <FeaturedImagesComponent :featured="featured" />
  </div>
</template>

<script>
import FeaturedImagesComponent from "../components/FeaturedImagesComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import SummaryCardComponent from "../components/SummaryCardComponent.vue";
import { appState } from "../stores/AppState"
import { computed } from "@vue/reactivity"
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { onMounted } from "vue";

export default {
  setup() {
    const db = useFirestore()

    async function getCarouselImagesDetails() {
      try {
        const q = query(collection(db, "carousel"));
        const querySnapshot = await getDocs(q);
        onSnapshot(q, (querySnapshot) => {
          appState.carousel = []
          querySnapshot.docs.map((doc) => {
            // @ts-ignore
            appState.carousel.push({ ...doc.data(), id: doc.id })
            // console.log(appState.carousel)
          });
        })
      } catch (error) {
        console.error(error)
      }
    }

    async function getFeaturedImagesDetails() {
      try {
        const q = query(collection(db, "featuredImages"));
        const querySnapshot = await getDocs(q);
        onSnapshot(q, (querySnapshot) => {
          appState.featuredImages = []
          querySnapshot.docs.map((doc) => {
            // console.log(doc.id, " => ", doc.data());
            // @ts-ignore
            appState.featuredImages.push({ ...doc.data(), id: doc.id })
            // console.log(appState.carousel)
          });
        })
      } catch (error) {
        console.error(error)
      }
    }

    async function getSummary() {
      try {
        const q = query(collection(db, "summarySection"));
        const querySnapshot = await getDocs(q);
        onSnapshot(q, (querySnapshot) => {
          appState.summary = []
          querySnapshot.docs.map((doc) => {
            // @ts-ignore
            appState.summary.push({ ...doc.data(), id: doc.id })
          });
        })
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      getCarouselImagesDetails()
      getFeaturedImagesDetails()
      getSummary()
    })
    return {
      carousel: computed(() => appState.carousel),
      featured: computed(() => appState.featuredImages),
      summary: computed(() => appState.summary)
    };
  },
  components: { HeroComponent, FeaturedImagesComponent, SummaryCardComponent }
}
</script>

<style scoped>
.section-divider {
  background-color: gray;
  width: 200px;
  height: 5px;
}
</style>
