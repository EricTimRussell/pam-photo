<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false"
          :src="imageUrl1 || imageUrl2 || imageUrl3" alt="">
      </div>
      <div class="col-12 col-md-4 col-lg-4 d-flex flex-column pt-4">
        <h2>{{ carousel?.title }}</h2>
        <p>{{ carousel?.description }}
        </p>
      </div>
      <div class="col-6 d-flex justify-content-center mt-3">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p>{{ carousel?.location }}</p>
      </div>
      <div v-if="carousel?.shopUrl" class="col-6 d-flex justify-content-evenly mt-3">
        <!-- TODO add shop url -->
        <a :href="carousel?.shopUrl" title="Shop"><span class="material-symbols-outlined">
            shopping_bag
          </span></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    carousel: { type: Object, required: false },
    imageUrl1: { type: String, required: false },
    imageUrl2: { type: String, required: false },
    imageUrl3: { type: String, required: false }
  },
  setup() {

    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-img {
  object-fit: cover;
  display: block;
  width: 90%;
  height: auto;
}

a {
  text-decoration: none;
  color: #45453a;
}

a:hover {
  transform: scale(1.2);
}

@media (max-width: 767px) {
  .modal-img {
    width: 100%;
  }
}
</style>