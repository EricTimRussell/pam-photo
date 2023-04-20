import { collection, query, getDocs, where, addDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { appState } from "../stores/AppState";
import { useFirestore } from "vuefire";

const db = useFirestore()
class CarouselService {
  async getCarouselImages() {
    const q = query(collection(db, "carousel"));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      appState.carousel = {}
      querySnapshot.docs.map((doc) => {
        appState.carousel = ({ ...doc.data(), id: doc.id })
      })
    });
  }
}
export const carouselService = new CarouselService()