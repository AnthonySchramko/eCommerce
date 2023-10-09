import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { cards } from "../config/firestore.js";
import data from "./cards.json";
// for importing json cards
export const generateCard = (
  name,
  id,
  colours,
  desc,
  featured,
  img,
  price,
  rarity
) => {
  const generatedCard = {
    name: name,
    colours: colours,
    rarity: rarity,
    desc: desc,
    id: id,
    img: img,
    featured: featured || false,
    price: price,
    wear: generateWear(),
  };

  data.cards.map((card) => {
    generatedCard.name = card.name;
    generatedCard.colours = card.colors;
    generatedCard.rarity = card.rarity;
    generatedCard.desc = card.text;
    generatedCard.id = card.name;
    generatedCard.img =
      card.imageUrl ||
      "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013";
    generatedCard.featured = false;
    generatedCard.wear = generateWear();
    generatedCard.price = card.price;
  });
};
//adding to cards
export const addToCards = async (card) => {
  await setDoc(doc(cards, "cards", card.id), card);
};
//generates the random wear quantities
const generateWear = () => {
  const wear = [];
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      wear.push(Math.floor(Math.random() * 5 + 1));
    }
    if (i == 1) {
      wear.push(Math.floor(Math.random() * 15 + 5));
    }
    if (i == 2) {
      wear.push(Math.floor(Math.random() * 30 + 12));
    }
  }
  return wear;
};
