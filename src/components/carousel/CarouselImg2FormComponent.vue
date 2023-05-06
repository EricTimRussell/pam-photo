<template>
  <img v-if="url" class="img-preview" :src="url" alt="">
  <form class="d-flex justify-content-center" @submit.prevent="uploadPicture">
    <!-- disable the form while uploading -->
    <fieldset class="d-flex flex-column align-items-center" :disabled="!!uploadTask">
      <button class="btn btn-primary" type="button" @click="open({ accept: 'image/*', multiple: false })">
        <template v-if="files?.length === 1">
          Selected file: {{ files.item(0)!.name }} (Click to select another)
        </template>
        <template v-else> Select one picture </template>
      </button>
      <button class="btn btn-success my-2">Upload</button>
      <span v-if="uploadProgress === 1 && files?.length === 1" class="text-success fs-md">Success</span>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'

const { files, open } = useFileDialog()
const storage = useFirebaseStorage()
const carouselImg2 = storageRef(storage, `carouselImg2`)

const {
  url,
  // gives you a percentage between 0 and 1 of the upload progress
  uploadProgress,
  uploadError,
  // firebase upload task
  uploadTask,
  upload,
} = useStorageFile(carouselImg2)

function uploadPicture() {
  const data = files.value?.item(0)
  if (data) {
    upload(data)
  }
}

</script>