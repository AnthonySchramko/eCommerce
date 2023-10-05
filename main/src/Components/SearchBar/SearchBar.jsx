import { useState } from "react";
import { getAllCards } from "../../Services/cards.js";
const SearchBar = ({ handleSubmit }) => {
  const [input, setInput] = useState("");
  const [rarity, setRarity] = useState("");
  const [colours, setColours] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const data = { input, rarity, colours };
    handleSubmit(data);
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for a card"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label htmlFor="rarity">Rarity: </label>
      <select
        name="rarity"
        id="rarity"
        onChange={(e) => setRarity(e.target.value)}
      >
        <option value="common">Common</option>
        <option value="uncommon">Uncommon</option>
        <option value="rare">Rare</option>
        <option value="mythic rare">Mythic Rare</option>
      </select>

      <div>
        <label htmlFor="colours">Mana Colours: </label>
        <input type="checkbox" id="red" name="red" />
        <label htmlFor="red">Red</label>
        <input type="checkbox" id="blue" name="blue" />
        <label htmlFor="blue">Blue</label>
        <input type="checkbox" id="green" name="green" />
        <label htmlFor="green">Green</label>
        <input type="checkbox" id="white" name="white" />
        <label htmlFor="white">White</label>
        <input type="checkbox" id="black" name="black" />
        <label htmlFor="black">Black</label>
        <input type="checkbox" id="colourless" name="colourless" />
        <label htmlFor="red">Red</label>
      </div>
    </form>
  );
};

export default SearchBar;
