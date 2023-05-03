<template>
  <!-- HERO -->
  <div>
    <HeroComponent :carousel1="carousel1" />
  </div>

  <!-- Introduction -->
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2 class="fs-xl">Welcome Introduction</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
      <div class="col-md-7 d-flex pt-3 px-4">
        <p class="fs-md">It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that
          subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a
          weary spirit. I just wish the world was twice as big and half of it was still unexplored.
        </p>
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
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { onMounted } from "vue";

export default {
  setup() {
    const db = useFirestore()

    async function getCarouselImage1Docs() {
      try {
        const q = query(collection(db, "carousel"));
        const querySnapshot = await getDocs(q);
        onSnapshot(q, (querySnapshot) => {
          appState.carousel1 = []
          querySnapshot.docs.map((doc) => {
            // console.log(doc.id, " => ", doc.data());
            appState.carousel1.push({ ...doc.data(), id: doc.id })
            console.log(appState.carousel1)
          });
        })
      } catch (error) {
        console.error(error)
      }
    }
    onMounted(() => {
      getCarouselImage1Docs()
    })
    return {
      carousel1: computed(() => appState.carousel1),
    };
  },
  components: { HeroComponent, FeaturedImagesComponent }
}
</script>

<style scoped>
.section-divider {
  background-color: gray;
  width: 200px;
  height: 5px;
}
</style>
