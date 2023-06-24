<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false" :src="url1 || url2 || url3" alt="">
      </div>
      <div class="col-4 d-flex flex-column">
        <h2>{{ carousel?.title }}</h2>
        <p>{{ carousel?.description }}
        </p>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p>{{ carousel?.location }}</p>
        <p class="px-5">{{ carousel?.date }}</p>
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
    carousel: { type: Object, required: false },
    url1: { type: String, required: false },
    url2: { type: String, required: false },
    url3: { type: String, required: false }
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
</style>