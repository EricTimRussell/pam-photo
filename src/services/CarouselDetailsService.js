import { updateDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";

const db = useFirestore()
class CarouselDetailsService {

  async editCarouselImage1Details(editable, carousel1) {
    await updateDoc(carousel1, {
      title: editable.value.title,
      description: editable.value.description,
      location: editable.value.location,
      date: editable.value.date
    });
    console.log('Success?');
    // editable.value = ({ title: '', description: '', gps: {} })
  }

}
export const carouselDetailsService = new CarouselDetailsService()