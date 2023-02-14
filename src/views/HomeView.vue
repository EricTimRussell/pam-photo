<template>
  <!-- HERO -->
  <section>
    <div id="carouselButton" class="carousel slide pt-5" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselButton" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselButton" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselButton" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-container">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://thiscatdoesnotexist.com/" class="carousel-img" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://thiscatdoesnotexist.com/" class="carousel-img" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://thiscatdoesnotexist.com/" class="carousel-img" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev ml" type="button" data-bs-target="#carouselButton" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next mr" type="button" data-bs-target="#carouselButton" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Introduction -->
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2 class="">Welcome Introduction</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
      <div class="col-md-7 d-flex pt-3 px-4">
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

  <!-- Featured Images -->
  <section class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2>Featured Photo's</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
    </div>
    <div class="row justify-content-center">
      <!-- photo row 1 -->
      <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
        <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
        <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
      </div>
      <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
        <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
      </div>
      <!-- photo row 2 -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
        </div>
      </div>
      <!-- photo row 3 -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center gap-5 pt-5">
          <img class="featured-img" src="https://thiscatdoesnotexist.com/" alt="">
        </div>
      </div>
    </div>
  </section>

  <!-- About Me Section -->
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center pt-5">
        <h2>About Section</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="section-divider"></span>
      </div>
      <!-- TODO add image if mom want it -->
      <div class="col-md-7 d-flex pt-3 px-4">
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
</template>

<script setup>



</script>

<style scoped>
.section-divider {
  background-color: gray;
  width: 100px;
  height: 5px;
}

.carousel-img {
  object-fit: cover;
  display: block;
  width: auto;
  min-width: 100%;
  height: 55vh;
}

.featured-img {
  object-fit: cover;
  display: block;
  width: 100%;
  height: 35vh;
  max-width: fit-content;
}

.carousel-container {
  margin-left: 20%;
  margin-right: 20%;
}

.ml {
  margin-left: 20%;
}

.mr {
  margin-right: 20%;
}

@media only screen and (max-width: 770px) {
  .carousel-img {
    object-fit: cover;
    display: block;
    width: auto;
    height: 25vh;
  }

  .ml {
    margin-left: 15%;
  }

  .mr {
    margin-right: 15%;
  }

  .carousel-container {
    margin-left: 15%;
    margin-right: 15%;
  }
}
</style>
