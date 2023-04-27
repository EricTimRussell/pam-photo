<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <img class="modal-img" oncontextmenu="return false" ondragstart="return false" :src="url1" alt="">
      </div>
      <div class="col-4 d-flex flex-column">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est pariatur quia ad nihil harum
          sapiente molestias, corporis ipsum distinctio laborum sit fugiat aliquid aut fuga, ipsam deserunt
          consequatur nulla!
          Harum, ullam dolorem, adipisci, excepturi fuga suscipit molestiae molestias labore dolorum laboriosam
          delectus officia in beatae quae deserunt libero maiores cupiditate sunt quidem aut! Aliquid molestiae
          delectus tempore minima eos!
          Fugit ipsa nihil esse nesciunt repudiandae, laborum saepe ullam asperiores! Ducimus sequi doloremque
          beatae ipsa modi enim in possimus aliquid sint iste eius, accusamus sunt dolorum ad sapiente eveniet
          eaque.
          Illo ad consequuntur nihil, vero voluptatibus eos in officia iste eaque odio sunt doloribus, blanditiis
          omnis dolores est, libero quaerat sit? Voluptas aspernatur fugit nisi architecto, veniam cupiditate
          doloribus odio!
        </p>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <span class="material-symbols-outlined">
          explore
        </span>
        <p> 43.4 54.6</p>
        <!-- Link to google maps location -->
      </div>
    </div>
  </div>
</template>

<script>
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { ref as storageRef } from 'firebase/storage'

export default {
  setup() {
    const storage = useFirebaseStorage();
    const carouselImg1 = storageRef(storage, `carouselImg1`);
    const { url: url1 } = useStorageFile(carouselImg1);


    return {
      url1
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
</style>