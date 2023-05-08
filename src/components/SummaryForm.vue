<template>
  <form @submit.prevent="editSummary()">
    <span class="fs-lg">Edit Summary</span>
    <div class="form-floating">
      <textarea v-model="editable.summary" class="form-control" placeholder="Edit summary section here" id="summary"
        style="height: 150px"></textarea>
      <label for="floatingTextarea2">Summary</label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </div>
  </form>
</template>

<script>
import { doc } from "firebase/firestore";
import { ref, watch } from "vue";
import { useDocument, useFirestore } from "vuefire";
import { summaryService } from "../services/SummaryService"

export default {
  props: {
    summary: { type: Object, required: false }
  },
  setup(props) {
    const db = useFirestore()
    const summary = doc(db, "summarySection", "summary");
    const summarySource = useDocument(summary)

    const editable = ref({})

    watch(summarySource, (summarySource) => {
      // @ts-ignore
      editable.value = {
        ...summarySource,
      }
    })
    return {
      editable,
      summary,
      async editSummary() {
        try {
          await summaryService.editSummary(editable, summary)
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>