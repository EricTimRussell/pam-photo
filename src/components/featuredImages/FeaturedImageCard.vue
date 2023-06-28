<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false"
          :src="url1 || url2 || url3 || url4 || url5 || url6 || url7 || url8 || url9" alt="">
      </div>
      <div class="col-12 col-md-4 col-lg-4 d-flex flex-column pt-4">
        <h2>{{ featured?.title }}</h2>
        <p>{{ featured?.description }}
        </p>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p>{{ featured?.location }}</p>
        <p class="px-5">{{ featured?.date }}</p>
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
    url1: { type: String, required: false },
    url2: { type: String, required: false },
    url3: { type: String, required: false },
    url4: { type: String, required: false },
    url5: { type: String, required: false },
    url6: { type: String, required: false },
    url7: { type: String, required: false },
    url8: { type: String, required: false },
    url9: { type: String, required: false },
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