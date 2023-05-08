import { updateDoc } from "firebase/firestore";


class SummaryService {

  async editSummary(editable, summary) {
    await updateDoc(summary, {
      summary: editable.value.summary
    });
  }

}
export const summaryService = new SummaryService()