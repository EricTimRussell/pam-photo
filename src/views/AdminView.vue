<template>
  <div v-if="user" class="container-fluid">
    <div class="row">
      <h1 class="text-center mt-5">Admin Page</h1>
      <div class="col-12 text-center mt-3">
        <h2>Carousel Images</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <CarouselImg1FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#carousel1">
          Edit Details
        </button>
        <ModalComponent id="carousel1">
          <CarouselImage1DetailsForm :carousel="carousel" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <CarouselImg2FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#carousel2">
          Edit Details
        </button>
        <ModalComponent id="carousel2">
          <CarouselImage2DetailsForm :carousel="carousel" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <CarouselImg3FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#carousel3">
          Edit Details
        </button>
        <ModalComponent id="carousel3">
          <CarouselImage3DetailsForm :carousel="carousel" />
        </ModalComponent>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2>Featured Images Row 1</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <FeaturedImage1FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured1">
          Edit Details
        </button>
        <ModalComponent id="featured1">
          <FeaturedImage1DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <FeaturedImage2FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured2">
          Edit Details
        </button>
        <ModalComponent id="featured2">
          <FeaturedImage2DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <FeaturedImage3FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured3">
          Edit Details
        </button>
        <ModalComponent id="featured3">
          <FeaturedImage3DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2>Featured Images Row 2</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <FeaturedImage4FormComponet />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured4">
          Edit Details
        </button>
        <ModalComponent id="featured4">
          <FeaturedImage4DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <FeaturedImage5FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured5">
          Edit Details
        </button>
        <ModalComponent id="featured5">
          <FeaturedImage5DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <FeaturedImage6FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured6">
          Edit Details
        </button>
        <ModalComponent id="featured6">
          <FeaturedImage6DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 text-center mt-5">
        <h2>Featured Images Row 3</h2>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 1</h3>
        <FeaturedImage7FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured7">
          Edit Details
        </button>
        <ModalComponent id="featured7">
          <FeaturedImage7DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 2</h3>
        <FeaturedImage8FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured8">
          Edit Details
        </button>
        <ModalComponent id="featured8">
          <FeaturedImage8DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
      <div class="col-4 d-flex flex-column align-items-center mt-3">
        <h3>Image 3</h3>
        <FeaturedImage9FormComponent />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featured9">
          Edit Details
        </button>
        <ModalComponent id="featured9">
          <FeaturedImage9DetailsForm :featured="featured" />
        </ModalComponent>
      </div>
    </div>
  </div>
  <div v-else>
    <span class="fs-xl d-flex justify-content-center">
      Admin Credentials Required
    </span>
  </div>
</template>

<script>
import { useCurrentUser, useFirestore } from "vuefire";
import CarouselImg1FormComponent from "../components/carousel/CarouselImg1FormComponent.vue";
import CarouselImg2FormComponent from "../components/carousel/CarouselImg2FormComponent.vue";
import CarouselImg3FormComponent from "../components/carousel/CarouselImg3FormComponent.vue";
import FeaturedImage1FormComponent from "../components/featuredImages/FeaturedImage1FormComponent.vue";
import FeaturedImage2FormComponent from "../components/featuredImages/FeaturedImage2FormComponent.vue";
import FeaturedImage3FormComponent from "../components/featuredImages/FeaturedImage3FormComponent.vue";
import FeaturedImage4FormComponet from "../components/featuredImages/FeaturedImage4FormComponet.vue";
import FeaturedImage5FormComponent from "../components/featuredImages/FeaturedImage5FormComponent.vue";
import FeaturedImage6FormComponent from "../components/featuredImages/FeaturedImage6FormComponent.vue";
import FeaturedImage7FormComponent from "../components/featuredImages/FeaturedImage7FormComponent.vue";
import FeaturedImage8FormComponent from "../components/featuredImages/FeaturedImage8FormComponent.vue";
import FeaturedImage9FormComponent from "../components/featuredImages/FeaturedImage9FormComponent.vue";
import CarouselImage1DetailsForm from "../components/carousel/CarouselImgae1DetailsForm.vue";
import ModalComponent from "../components/ModalComponent.vue";
import { appState } from "../stores/AppState"
import { computed } from "@vue/reactivity"
import { onMounted } from "vue";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import CarouselImage2DetailsForm from "../components/carousel/CarouselImage2DetailsForm.vue";
import CarouselImage3DetailsForm from "../components/carousel/CarouselImage3DetailsForm.vue";
import FeaturedImage1DetailsForm from "../components/featuredImages/FeaturedImage1DetailsForm.vue";
import FeaturedImage2DetailsForm from "../components/featuredImages/FeaturedImage2DetailsForm.vue";
import FeaturedImage3DetailsForm from "../components/featuredImages/FeaturedImage3DetailsForm.vue";
import FeaturedImage4DetailsForm from "../components/featuredImages/FeaturedImage4DetailsForm.vue";
import FeaturedImage5DetailsForm from "../components/featuredImages/FeaturedImage5DetailsForm.vue";
import FeaturedImage6DetailsForm from "../components/featuredImages/FeaturedImage6DetailsForm.vue";
import FeaturedImage7DetailsForm from "../components/featuredImages/FeaturedImage7DetailsForm.vue";
import FeaturedImage8DetailsForm from "../components/featuredImages/FeaturedImage8DetailsForm.vue";
import FeaturedImage9DetailsForm from "../components/featuredImages/FeaturedImage9DetailsForm.vue";
export default {
  setup() {
    const user = useCurrentUser()
    const db = useFirestore()

    async function getCarouselImagesDetails() {
      try {
        const q = query(collection(db, "carousel"));
        const querySnapshot = await getDocs(q);
        onSnapshot(q, (querySnapshot) => {
          appState.carousel = []
          querySnapshot.docs.map((doc) => {
            // console.log(doc.id, " => ", doc.data());
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
    onMounted(() => {
      getCarouselImagesDetails()
      getFeaturedImagesDetails()
    })
    return {
      user,
      carousel: computed(() => appState.carousel),
      featured: computed(() => appState.featuredImages)
    };
  },
  components: { CarouselImg1FormComponent, CarouselImg2FormComponent, CarouselImg3FormComponent, FeaturedImage1FormComponent, FeaturedImage2FormComponent, FeaturedImage3FormComponent, FeaturedImage4FormComponet, FeaturedImage5FormComponent, FeaturedImage6FormComponent, FeaturedImage7FormComponent, FeaturedImage8FormComponent, FeaturedImage9FormComponent, ModalComponent, CarouselImage1DetailsForm, CarouselImage2DetailsForm, CarouselImage3DetailsForm, FeaturedImage1DetailsForm, FeaturedImage2DetailsForm, FeaturedImage3DetailsForm, FeaturedImage4DetailsForm, FeaturedImage5DetailsForm, FeaturedImage6DetailsForm, FeaturedImage7DetailsForm, FeaturedImage8DetailsForm, FeaturedImage9DetailsForm }
}
</script>

<style lang="scss" scoped></style>