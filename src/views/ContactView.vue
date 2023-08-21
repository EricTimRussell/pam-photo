<template>
  <div class="container-fluid view-height fade-in">
    <!-- This row only appears on non-mobile devices -->
    <div class="row justify-content-center my-5 mx-5 no-mobile">
      <div class="col-12">
        <a target="_blank" class="selectable" href="https://www.flickr.com/photos/197012563@N05/">
          <img class="banner" src="../assets/flickrBG.png" alt="flickr profile image">
        </a>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <h2>View more of my photography on my Flickr profile.</h2>
      </div>
    </div>
    <!-- This row only appears on mobile devices -->
    <div class="row justify-content-center my-3 mobile-only">
      <h2 class="fs-md">View more photo's on my Flickr page</h2>
      <div class="col-12 d-flex justify-content-center">
        <a target="_blank" class="selectable" href="https://www.flickr.com/photos/197012563@N05/">
          <img class="banner" src="../assets/mobile-flickr-img.png" alt="flickr profile image">
        </a>
      </div>
    </div>
    <div class="row justify-content-center bg-secondary elevation my-5">
      <div class="col-md-6 col-10 text-center pt-3 pb-4">
        <h2 class="fs-md pb-3">Or Contact me through my Shopify store</h2>
        <a target="_blank" class="selectable" href="https://getoutsidephotography.shop/pages/contact">
          <img class="banner" src="../assets/Get-Outside-Store-Banner.png" alt="get outside photography store banner">
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