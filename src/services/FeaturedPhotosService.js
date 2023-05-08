import { updateDoc } from "firebase/firestore";


class FeaturedPhotosService {

  async editfeaturedImage1Details(editable, featured1) {
    await updateDoc(featured1, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

}
export const featuredPhotosService = new FeaturedPhotosService()