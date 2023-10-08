import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, getCardById } from "../../Services/cards";
import styles from "./IndividualCard.module.scss";
const IndividualCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();
  const [cartCard, setCartCard] = useState({});

  useEffect(() => {
    async function fetchCard() {
      try {
        const card = await getCardById(id);
        setCard(card);

        setCartCard({
          id: card.name,
          name: card.name,
          price: card.price,
          img: card.img,
          desc: card.desc,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchCard();
  }, [id]);
  if (!card) {
    return <div>Loading...</div>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCartCard = {
      id: card.name,
      ...cartCard,
    };
    await addToCart(updatedCartCard);
    navigate("/cart");
  };
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={card.img} alt={card.desc} />
      <div className={styles.descWrapper}>
        <div>
          <h1>{card.name}</h1>
          <h3>Card Description:</h3>
          <p>{card.desc}</p>
        </div>
      </div>
      <div className={styles.cartWrapper}>
        <form onSubmit={handleSubmit}>
          <p>Price: ${card.price}</p>
          <label htmlFor="version">Print version</label>

          <button type="submit">Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default IndividualCard;
