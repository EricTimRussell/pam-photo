<template>
  <div class="container-fluid view-height">
    <div class="row justify-content-center my-5">
      <div class="col-12">
        <a target="_blank" class="selectable" href="https://www.flickr.com/photos/197012563@N05/">
          <img class="banner-mobile banner" src="../assets/flickrBG.png" alt="flickr profile image">
        </a>
      </div>
      <!-- TODO add store contact href -->
      <div class="col-8 text-center my-5">
        <a target="_blank" class="selectable" href="">
          <img class="banner-mobile banner" src="../assets/Get-Outside-Store-Banner.png"
            alt="get outside photography store banner">
        </a>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="section-divider"></div>
      </div>
      <div class="col-12 d-flex justify-content-center p-3">
        <span class="material-symbols-outlined fs-lg">
          mail
        </span>
        <a href="mailto:getoutsidephotography@outlook.com">
          <p>Email Get Outside Photography</p>
        </a>
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
  height: auto
}

@media (max-width: 767px) {

  .banner-mobile {
    width: 100%;
    height: auto;
  }

  .view-height {
    min-height: 50vh;
  }
}
</style>