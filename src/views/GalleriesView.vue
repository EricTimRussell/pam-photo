<template>
  <div class="container-fluid height fade-in">
    <div class="row justify-content-center">
      <div v-if="user" class="col-12 text-center mt-3">
        <button title="Create Gallery" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createGallery">
          <span class="material-symbols-outlined fs-lg">
            add
          </span>
        </button>
      </div>
      <div class="col-12 d-flex flex-column align-items-center mt-3 mb-5">
        <h1>Flickr Galleries</h1>
        <div class="section-divider text-center"></div>
      </div>
    </div>
    <div class="row d-flex justify-content-evenly">
      <div class="col-md-2 col-6" v-for="g in galleries">
        <GalleryCardComponent :galleries="g" />
      </div>
    </div>
  </div>
  <ModalComponent id="createGallery">
    <GalleryFormComponent />
  </ModalComponent>
</template>

<script>
import { useCurrentUser, useFirestore } from "vuefire";
import { appState } from "../stores/AppState"
import { computed } from "@vue/reactivity"
import { onMounted } from "vue";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import GalleryFormComponent from "../components/GalleryFormComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import GalleryCardComponent from "../components/GalleryCardComponent.vue";

export default {
  setup() {
    const db = useFirestore()
    const user = useCurrentUser()
    async function getGalleriesDocs() {
      try {
        const q = query(collection(db, "galleries"));
        const querySnapshot = await getDocs(q);
        onSnapshot(q, (querySnapshot) => {
          appState.galleries = []
          querySnapshot.docs.map((doc) => {
            // @ts-ignore
            appState.galleries.push({ ...doc.data(), id: doc.id })
          });
        })
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      getGalleriesDocs()
    })
    return {
      user,
      galleries: computed(() => appState.galleries)
    };
  },
  components: { ModalComponent, GalleryFormComponent, GalleryCardComponent }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #45453a
}

.height {
  min-height: 75vh;
}

.section-divider {
  background-color: gray;
  width: 200px;
  height: 5px;
}
</style>