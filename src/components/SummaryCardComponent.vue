<template>
  <div class="col-md-7 d-flex py-5 px-4">
    {{ summary?.summary }}
  </div>
</template>

<script>
export default {
  props: {
    summary: { type: Object, required: false }
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>