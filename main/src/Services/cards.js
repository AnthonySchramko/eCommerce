import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { cards, cart } from "../config/firestore.js";
export const getAllCards = async () => {
  const collectionRef = collection(cards, "cards");
  const querySnapshot = await getDocs(collectionRef);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
//gets card by individual ID, also known as name. For individual card component
export const getCardById = async (id) => {
  const docRef = doc(cards, "cards", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Doc not found");
  }
};
export const editCardVariants = async (id, quantity, wearIndex) => {
  try {
    const card = await getCardById(id);
    if (wearIndex >= 0 && wearIndex < card.wear.length) {
      card.wear[wearIndex] -= quantity;
      const docRef = doc(cards, "cards", id);
      await updateDoc(docRef, { wear: card.wear });
      return card;
    } else {
      throw new Error("Invalid wear index");
    }
  } catch (e) {
    console.log(e);
  }
};
export const addToCart = async (item) => {
  const docRef = doc(cart, "cart", item.id);
  try {
    await setDoc(docRef, item);
    return { id: item.id, ...item };
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error;
  }
};
export const deleteFromCart = async (id) => {
  await deleteDoc(doc(cart, "cart", id));
};
export const getCart = async () => {
  const collectionRef = collection(cart, "cart");
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
