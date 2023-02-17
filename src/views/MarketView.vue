// example-vue-component.vue
<template>
  <button @click="showAlert">Hello world</button>
</template>

<script>
import Pop from "../utils/Pop"
export default {
  setup() {


    return {
      showAlert() {
        Pop.toast("Hello")
      },
    }
  }
}
</script>

<style scoped></style>