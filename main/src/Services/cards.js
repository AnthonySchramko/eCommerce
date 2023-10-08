import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
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
export const getCardById = async (id) => {
  const docRef = doc(cards, "cards", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.ip, ...docSnap.data() };
  } else {
    throw new Error("Doc not found");
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
