import { updateDoc } from "firebase/firestore";

class CarouselDetailsService {

  async editCarouselImage1Details(editable, carousel1) {
    await updateDoc(carousel1, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editCarouselImage2Details(editable, carousel2) {
    await updateDoc(carousel2, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }

  async editCarouselImage3Details(editable, carousel3) {
    await updateDoc(carousel3, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
  }
}
export const carouselDetailsService = new CarouselDetailsService()