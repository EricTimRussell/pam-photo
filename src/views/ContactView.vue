<template>
  <div class="container-fluid view-height">
    <div class="row">
      <div class="col-12 my-4">
        <a target="_blank" class="selectable" href="https://www.flickr.com/photos/197012563@N05/">
          <img class="flickr-mobile" src="../assets/flickrBG.png" alt="flickr profile image">
        </a>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="section-divider"></div>
      </div>
      <div class="col-12 d-flex justify-content-center p-3">
        <span class="material-symbols-outlined fs-lg">
          mail
        </span>
        <h4>Email:</h4>
        <!-- TODO Moms new email -->
        <a href="mailto:EricTim.Russell@live.com">
          <p>MOMS email</p>
        </a>
      </div>
      <!-- TODO store banner -->
      <div class="col-12">
        <a href="">Contact Page on store</a>
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

@media (max-width: 767px) {
  .flickr-mobile {
    width: 100%;
    height: 13vh;
  }

  .view-height {
    min-height: 50vh;
  }
}
</style>