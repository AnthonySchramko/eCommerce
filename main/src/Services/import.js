import { collection, doc, setDoc } from "firebase/firestore";
import { cards } from "../config/firestore.js";
import data from "./cards.json";

export const generateCard = () => {
  const generatedCard = {
    name: "",
    colours: "",
    rarity: "",
    desc: "",
    id: "",
    img: "",
  };
  data.cards.map((card) => {
    generatedCard.name = card.name;
    generatedCard.colours = card.colors || ["U"];
    generatedCard.rarity = card.rarity;
    generatedCard.desc = card.text;
    generatedCard.id = card.name;
    generatedCard.img =
      card.imageUrl ||
      "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013";
    addToCards(generatedCard);
  });
};

export const addToCards = async (card) => {
  const docRef = collection(cards, "cards");
  await setDoc(doc(cards, "cards", card.id), card);
};
