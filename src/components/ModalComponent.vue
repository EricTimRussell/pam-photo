<template>
  <!-- Modal -->
  <div class="modal fade" id="image-details" tabindex="-1" aria-labelledby="image-detailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-center">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot>

          </slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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

<style lang="scss" scoped></style>