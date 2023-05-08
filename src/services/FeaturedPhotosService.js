import { updateDoc } from "firebase/firestore";


class FeaturedPhotosService {

  async editFeaturedImage1Details(editable, featured1) {
    await updateDoc(featured1, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }


  async editFeaturedImage2Details(editable, featured2) {
    await updateDoc(featured2, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editFeaturedImage3Details(editable, featured3) {
    await updateDoc(featured3, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editFeaturedImage4Details(editable, featured4) {
    await updateDoc(featured4, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editFeaturedImage5Details(editable, featured5) {
    await updateDoc(featured5, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editFeaturedImage6Details(editable, featured6) {
    await updateDoc(featured6, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editFeaturedImage7Details(editable, featured7) {
    await updateDoc(featured7, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editFeaturedImage8Details(editable, featured8) {
    await updateDoc(featured8, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editFeaturedImage9Details(editable, featured9) {
    await updateDoc(featured9, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }
}
export const featuredPhotosService = new FeaturedPhotosService()