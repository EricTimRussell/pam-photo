<template>
  <div>
    <!-- About Me Section -->
    <section class="container-fluid height fade-in">
      <div class="row justify-content-center mb-5">
        <div class="col-12 d-flex justify-content-center pt-4">
          <h2>About Pamela Russell</h2>
        </div>
        <div class="col-12 d-flex justify-content-center pb-5">
          <span class="section-divider"></span>
        </div>
        <div class="col-sm-12 col-md-4">
          <img class="personal-img" :src="personalImg || undefined" alt="">
        </div>
        <div class="col-sm-12 col-md-7 d-flex px-4 fs-md">
          <p>{{ about?.about }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Firebase
import { collection, getDocs, onSnapshot, query } from "firebase/firestore"
import { useFirebaseStorage, useFirestore, useStorageFile } from "vuefire"
import { ref as storageRef } from 'firebase/storage'
// Stores
import { appState } from "../stores/AppState"
// Vue
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
export default {
  setup() {
    const db = useFirestore()
    const storage = useFirebaseStorage();
    const aboutImg = storageRef(storage, 'aboutImg');
    const { url: personalImg } = useStorageFile(aboutImg);


    async function getAbout() {
      try {
        const q = query(collection(db, "aboutSection"));
        const querySnapshot = await getDocs(q);
        onSnapshot(q, (querySnapshot) => {
          appState.about = []
          querySnapshot.docs.map((doc) => {
            appState.about.push({ ...doc.data(), id: doc.id })
          });
        })
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      getAbout()
    })

    return {
      personalImg,
      about: computed(() => appState.about[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.height {
  min-height: 90vh;
}
</style>
