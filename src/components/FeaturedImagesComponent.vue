<template>
  <!-- Featured Images -->
  <section class="container-fluid mb-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
      <div class="col-12 d-flex justify-content-center pt-3">
        <span class="fs-sm mobile-only">Tap photos for more details</span>
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <!-- photo row 1 -->
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-bottom>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl1" alt="" data-bs-toggle="modal" data-bs-target="#featured1">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-bottom>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl2" alt="" data-bs-toggle="modal" data-bs-target="#featured2">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-bottom>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl3" alt="" data-bs-toggle="modal" data-bs-target="#featured3">
      </div>
    </div>
    <!-- photo row 2 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-top>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl4" alt="" data-bs-toggle="modal" data-bs-target="#featured4">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-top>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl5" alt="" data-bs-toggle="modal" data-bs-target="#featured5">
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-top>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl6" alt="" data-bs-toggle="modal" data-bs-target="#featured6">
      </div>
    </div>
    <!-- photo row 3 -->
    <div class="row justify-content-center">
      <div class="col-1 footer-bg mt-2">
      </div>
      <div class="col-12 col-md-8 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-bottom>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl8" alt="" data-bs-toggle="modal" data-bs-target="#featured8">
      </div>
      <div class="col-1 footer-bg mt-2">
      </div>
    </div>
    <!-- photo row 4 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-bottom>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl7" alt="" data-bs-toggle="modal" data-bs-target="#featured7">
      </div>
      <div class="col-12 col-md-5 d-flex justify-content-center pt-2 small-pad-x" v-motion-slide-visible-once-bottom>
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable"
          :src="imageUrl9" alt="" data-bs-toggle="modal" data-bs-target="#featured9">
      </div>
    </div>
  </section>

  <!-- featured images modals -->
  <ModalComponent id="featured1">
    <FeaturedImageCard :imageUrl1="imageUrl1" :featured="featured[0]" />
  </ModalComponent>
  <ModalComponent id="featured2">
    <FeaturedImageCard :imageUrl2="imageUrl2" :featured="featured[1]" />
  </ModalComponent>
  <ModalComponent id="featured3">
    <FeaturedImageCard :imageUrl3="imageUrl3" :featured="featured[2]" />
  </ModalComponent>
  <ModalComponent id="featured4">
    <FeaturedImageCard :imageUrl4="imageUrl4" :featured="featured[3]" />
  </ModalComponent>
  <ModalComponent id="featured5">
    <FeaturedImageCard :imageUrl5="imageUrl5" :featured="featured[4]" />
  </ModalComponent>
  <ModalComponent id="featured6">
    <FeaturedImageCard :imageUrl6="imageUrl6" :featured="featured[5]" />
  </ModalComponent>
  <ModalComponent id="featured7">
    <FeaturedImageCard :imageUrl7="imageUrl7" :featured="featured[6]" />
  </ModalComponent>
  <ModalComponent id="featured8">
    <FeaturedImageCard :imageUrl8="imageUrl8" :featured="featured[7]" />
  </ModalComponent>
  <ModalComponent id="featured9">
    <FeaturedImageCard :imageUrl9="imageUrl9" :featured="featured[8]" />
  </ModalComponent>
</template>

<script>
// Firebase
import { useFirebaseStorage, useStorageFile } from "vuefire"
import { ref as storageRef } from "firebase/storage"
// Components
import ModalComponent from "./ModalComponent.vue"
import FeaturedImageCard from "./featuredImages/FeaturedImageCard.vue"

export default {
  props: {
    featured: { type: Object, required: true }
  },
  setup() {
    const storage = useFirebaseStorage();

    // get images from firebase storage
    const featuredImg1 = storageRef(storage, `featuredImg1`);
    const featuredImg2 = storageRef(storage, `featuredImg2`);
    const featuredImg3 = storageRef(storage, `featuredImg3`);
    const featuredImg4 = storageRef(storage, `featuredImg4`);
    const featuredImg5 = storageRef(storage, `featuredImg5`);
    const featuredImg6 = storageRef(storage, `featuredImg6`);
    const featuredImg7 = storageRef(storage, `featuredImg7`);
    const featuredImg8 = storageRef(storage, `featuredImg8`);
    const featuredImg9 = storageRef(storage, `featuredImg9`);

    // set and rename image urls
    const { url: imageUrl1 } = useStorageFile(featuredImg1);
    const { url: imageUrl2 } = useStorageFile(featuredImg2);
    const { url: imageUrl3 } = useStorageFile(featuredImg3);
    const { url: imageUrl4 } = useStorageFile(featuredImg4);
    const { url: imageUrl5 } = useStorageFile(featuredImg5);
    const { url: imageUrl6 } = useStorageFile(featuredImg6);
    const { url: imageUrl7 } = useStorageFile(featuredImg7);
    const { url: imageUrl8 } = useStorageFile(featuredImg8);
    const { url: imageUrl9 } = useStorageFile(featuredImg9);

    return {
      imageUrl1,
      imageUrl2,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
      imageUrl7,
      imageUrl8,
      imageUrl9
    };
  },
  components: { ModalComponent, FeaturedImageCard }
}
</script>

<style lang="scss" scoped></style>