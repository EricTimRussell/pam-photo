<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-3 flickr-card mx-3 mb-3">
        <a href="https://www.flickr.com/photos/197012563@N05" target="_blank">
          <h6 class="flickr-title d-flex flex-column align-items-center mt-5">Gallery title</h6>
        </a>
      </div>
    </div>
  </div>
</template>
<!-- TODO dynamic classes, props, v-for -->
<script>
export default {
  setup() {


    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.flickr-card {
  background-image: url(../assets/placeholder.jpg);
  background-size: cover;
  height: 12rem;
  width: 12rem;
  border-radius: 5px;
  border: 2px solid #45453a;
}

.flickr-title {
  color: #a9aaa2;
  text-shadow: 3px 2px black;
  font-weight: bolder;
}
</style>