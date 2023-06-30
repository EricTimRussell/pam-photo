<template>
  <div class="container-fluid view-height fade-in">
    <div class="row justify-content-center my-3">
      <div class="col-10">
        <a target="_blank" class="selectable" href="https://www.flickr.com/photos/197012563@N05/">
          <img class="banner-mobile banner" src="../assets/flickrBG.png" alt="flickr profile image">
        </a>
      </div>
    </div>
    <div class="row justify-content-center bg-secondary elevation my-3">
      <!-- TODO add store contact href -->
      <div class="col-10 py-3">
        <a target="_blank" class="selectable" href="">
          <img class="banner-mobile banner" src="../assets/Get-Outside-Store-Banner.png"
            alt="get outside photography store banner">
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
}

.banner:active {
  border-color: blue;
}

@media (max-width: 767px) {

  .banner-mobile {
    width: 100%;
    height: auto;
  }

  .view-height {
    min-height: 43vh;
  }
}
</style>