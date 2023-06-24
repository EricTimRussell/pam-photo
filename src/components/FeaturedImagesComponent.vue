<template>
  <!-- Featured Images -->
  <section class="container-fluid mb-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <!-- photo row 1 -->
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url1"
          alt="" data-bs-toggle="modal" data-bs-target="#featured1">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url2"
          alt="" data-bs-toggle="modal" data-bs-target="#featured2">
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url3"
          alt="" data-bs-toggle="modal" data-bs-target="#featured3">
      </div>
    </div>
    <!-- photo row 2 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url4"
          alt="" data-bs-toggle="modal" data-bs-target="#featured4">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url5"
          alt="" data-bs-toggle="modal" data-bs-target="#featured5">
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url6"
          alt="" data-bs-toggle="modal" data-bs-target="#featured6">
      </div>
    </div>
    <!-- photo row 3 -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url7"
          alt="" data-bs-toggle="modal" data-bs-target="#featured7">
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url8"
          alt="" data-bs-toggle="modal" data-bs-target="#featured8">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center pt-2 small-pad-x">
        <img oncontextmenu="return false" ondragstart="return false" class="featured-img elevation selectable" :src="url9"
          alt="" data-bs-toggle="modal" data-bs-target="#featured9">
      </div>
    </div>
  </section>

  <!-- featured images modals -->
  <ModalComponent id="featured1">
    <FeaturedImageCard :url1="url1" :featured="featured[0]" />
  </ModalComponent>
  <ModalComponent id="featured2">
    <FeaturedImageCard :url2="url2" :featured="featured[1]" />
  </ModalComponent>
  <ModalComponent id="featured3">
    <FeaturedImageCard :url3="url3" :featured="featured[2]" />
  </ModalComponent>
  <ModalComponent id="featured4">
    <FeaturedImageCard :url4="url4" :featured="featured[3]" />
  </ModalComponent>
  <ModalComponent id="featured5">
    <FeaturedImageCard :url5="url5" :featured="featured[4]" />
  </ModalComponent>
  <ModalComponent id="featured6">
    <FeaturedImageCard :url6="url6" :featured="featured[5]" />
  </ModalComponent>
  <ModalComponent id="featured7">
    <FeaturedImageCard :url7="url7" :featured="featured[6]" />
  </ModalComponent>
  <ModalComponent id="featured8">
    <FeaturedImageCard :url8="url8" :featured="featured[7]" />
  </ModalComponent>
  <ModalComponent id="featured9">
    <FeaturedImageCard :url9="url9" :featured="featured[8]" />
  </ModalComponent>
</template>

<script>
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { ref as storageRef } from 'firebase/storage'
import ModalComponent from "./ModalComponent.vue";
import FeaturedImageCard from "./featuredImages/FeaturedImageCard.vue";

export default {
  props: {
    featured: { type: Object, required: true }
  },
  setup() {
    const storage = useFirebaseStorage();

    // get image from firebase
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
    const { url: url1 } = useStorageFile(featuredImg1);
    const { url: url2 } = useStorageFile(featuredImg2);
    const { url: url3 } = useStorageFile(featuredImg3);
    const { url: url4 } = useStorageFile(featuredImg4);
    const { url: url5 } = useStorageFile(featuredImg5);
    const { url: url6 } = useStorageFile(featuredImg6);
    const { url: url7 } = useStorageFile(featuredImg7);
    const { url: url8 } = useStorageFile(featuredImg8);
    const { url: url9 } = useStorageFile(featuredImg9);
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
    };
  },
  components: { ModalComponent, FeaturedImageCard }
}
</script>

<style lang="scss" scoped></style>