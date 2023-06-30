<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false"
          :src="imageUrl1 || imageUrl2 || imageUrl3 || imageUrl4 || imageUrl5 || imageUrl6 || imageUrl7 || imageUrl8 || imageUrl9"
          alt="">
      </div>
      <div class="col-12 col-md-4 col-lg-4 d-flex flex-column pt-4">
        <h2>{{ featured?.title }}</h2>
        <p>{{ featured?.description }}
        </p>
      </div>
      <div class="col-6 d-flex justify-content-center mt-3">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p>{{ featured?.location }}</p>
      </div>
      <div class="col-6 d-flex justify-content-evenly mt-3">
        <!-- TODO add shop url -->
        <a href="" title="Shop"><span class="material-symbols-outlined">
            shopping_bag
          </span></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    imageUrl1: { type: String, required: false },
    imageUrl2: { type: String, required: false },
    imageUrl3: { type: String, required: false },
    imageUrl4: { type: String, required: false },
    imageUrl5: { type: String, required: false },
    imageUrl6: { type: String, required: false },
    imageUrl7: { type: String, required: false },
    imageUrl8: { type: String, required: false },
    imageUrl9: { type: String, required: false },
    featured: { type: Object, required: false }
  },
  setup() {

    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-img {
  object-fit: fill;
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