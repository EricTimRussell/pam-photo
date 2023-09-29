<template>
  <!-- Modal -->
  <div class="modal fade" id="image-details" tabindex="-1" aria-labelledby="image-detailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-center">
      <div class="modal-content modal-bg">
        <div class="modal-header border-none">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot>

          </slot>
        </div>
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

<style scoped>
.modal-bg{
  background-color: gainsboro;
}
.border-none{
  border: none;
}
</style>