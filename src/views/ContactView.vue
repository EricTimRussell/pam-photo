<template>
  <div class="container-fluid view-height fade-in">
    <div class="row justify-content-center">
      <div class="col-md-6 col-10 text-center pt-3">
        <h2 class="fs-md pb-3">Contact me through social media or email.</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.view-height {
  min-height: 60vh;
}

.section-divider {
  background-color: gray;
  width: 250px;
  height: 5px;
}

.banner {
  max-width: 100%;
  height: auto;
  border: 2px solid black;
}

.banner:hover {
  border-color: blue;
  scale: 1.01;
}

.banner:active {
  border-color: blue;
}

@media (max-width: 767px) {
  .view-height {
    min-height: 58vh;
  }
}
</style>