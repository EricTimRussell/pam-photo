<template>
  <!-- Featured Images -->
  <section class="container-fluid mb-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2 class="fs-xl">Featured Photo's</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
    </div>
    <div class="row justify-content-center">
      <!-- photo row 1 -->
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url1" alt="">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url2" alt="">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url3" alt="">
      </div>
    </div>
    <!-- photo row 2 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url4" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url5" alt="">
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url6" alt="">
      </div>
    </div>
    <!-- photo row 3 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url7" alt="">
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url8" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img class="featured-img elevation" :src="url9" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { ref as storageRef } from 'firebase/storage'

export default {
  setup() {
    const storage = useFirebaseStorage()
    const featuredImg1 = storageRef(storage, `featuredImg1`)
    const featuredImg2 = storageRef(storage, `featuredImg2`)
    const featuredImg3 = storageRef(storage, `featuredImg3`)
    const featuredImg4 = storageRef(storage, `featuredImg4`)
    const featuredImg5 = storageRef(storage, `featuredImg5`)
    const featuredImg6 = storageRef(storage, `featuredImg6`)
    const featuredImg7 = storageRef(storage, `featuredImg7`)
    const featuredImg8 = storageRef(storage, `featuredImg8`)
    const featuredImg9 = storageRef(storage, `featuredImg9`)

    const {
      url: url1
    } = useStorageFile(featuredImg1)

    const {
      url: url2
    } = useStorageFile(featuredImg2)

    const {
      url: url3
    } = useStorageFile(featuredImg3)

    const {
      url: url4
    } = useStorageFile(featuredImg4)

    const {
      url: url5
    } = useStorageFile(featuredImg5)

    const {
      url: url6
    } = useStorageFile(featuredImg6)

    const {
      url: url7
    } = useStorageFile(featuredImg7)

    const {
      url: url8
    } = useStorageFile(featuredImg8)

    const {
      url: url9
    } = useStorageFile(featuredImg9)

    return {
      url1,
      url2,
      url3,
      url4,
      url5,
      url6,
      url7,
      url8,
      url9
    }
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