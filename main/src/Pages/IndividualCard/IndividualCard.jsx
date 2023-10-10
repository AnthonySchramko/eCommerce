import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, getCardById } from "../../Services/cards";
import styles from "./IndividualCard.module.scss";
import { editCardVariants } from "../../Services/cards";
const IndividualCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();
  const [selectedWearIndex, setSelectedWearIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    async function fetchCard() {
      try {
        const card = await getCardById(id);
        setCard(card);
        if (!Array.isArray(card.selectedWear)) {
          card.selectedWear = Array(card.wear.length).fill(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchCard();
  }, [id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  const handleWearChange = (e) => {
    const selectedIndex = parseInt(e.target.value);
    setSelectedWearIndex(selectedIndex);
  };

  const handleQuantityChange = (e) => {
    const selectedQuantity = parseInt(e.target.value);
    setSelectedQuantity(selectedQuantity);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedSelectedWear = [...card.selectedWear];
    updatedSelectedWear[selectedWearIndex] += selectedQuantity;

    const updatedCard = {
      ...card,
      wear: card.wear.map((quantity, index) => {
        if (index === selectedWearIndex) {
          return quantity - selectedQuantity;
        }
        return quantity;
      }),
      selectedWear: updatedSelectedWear,
    };
    try {
      await editCardVariants(id, selectedQuantity, selectedWearIndex);

      await addToCart(updatedCard);

      navigate("/cart");
    } catch (error) {
      console.error(error);
    }

    await addToCart(updatedCard);
    navigate("/cart");
  };
  // Create an array of wear options
  const wearOptions = ["Near Mint", "Very Good", "Lightly Played"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.image} src={card.img} alt={card.desc} />
        <div className={styles.descWrapper}>
          <div>
            <h1>{card.name}</h1>
            <h3>Card Description:</h3>
            <p>{card.desc}</p>
          </div>
        </div>
      </div>
      <div className={styles.cartWrapper}>
        <form onSubmit={handleSubmit}>
          <p>Price: ${card.price}</p>
          <label htmlFor="version">Card Wear: </label>
          <select
            name="wear"
            id="wear"
            value={selectedWearIndex}
            onChange={handleWearChange}
          >
            {wearOptions.map((wearOption, index) => (
              <option key={index} value={index}>
                {wearOption} ({card.wear[index]})
              </option>
            ))}
          </select>
          <label htmlFor="quantity">Quantity: </label>
          <select
            name="quantity"
            id="quantity"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            {Array.from(
              { length: card.wear[selectedWearIndex] },
              (_, index) => index + 1
            ).map((quantityOption) => (
              <option key={quantityOption} value={quantityOption}>
                {quantityOption}
              </option>
            ))}
          </select>
          <button type="submit">Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default IndividualCard;
