<template>
  <div>
    <!-- About Me Section -->
    <section class="container-fluid height">
      <div class="row justify-content-center mb-5">
        <div class="col-12 d-flex justify-content-center pt-5">
          <h2>About Section</h2>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <span class="section-divider"></span>
        </div>
        <!-- TODO add image of her if mom wants it -->
        <div class="col-sm-12 col-md-4">
          <img class="personal-img" src="../assets/placeholder.jpg" alt="">
        </div>
        <div class="col-sm-12 col-md-7 d-flex pt-3 px-4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, odit
            quos
            ea,
            temporibus quas obcaecati
            expedita recusandae perspiciatis dolorem, doloremque vitae sequi. Voluptas quibusdam eveniet odio laudantium
            nobis in est!
            Voluptates iure, reprehenderit aspernatur expedita facilis consectetur, commodi molestias facere optio velit
            tenetur porro sequi ipsam. Error cum rem laborum illum dolore, veniam, delectus iure ea ipsam nesciunt sunt
            quaerat.</p>
        </div>
      </div>
    </section>
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
.personal-img {
  object-fit: cover;
  display: block;
  width: 100%;
  height: 35vh;
}

.height {
  min-height: 90vh;
}
</style>
