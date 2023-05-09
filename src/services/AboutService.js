import { updateDoc } from "firebase/firestore";


class AboutService {
  async editAbout(editable, about) {
    await updateDoc(about, {
      about: editable.value.about
    });
  }
}
export const aboutService = new AboutService()