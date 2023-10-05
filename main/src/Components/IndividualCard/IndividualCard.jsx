import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, getCardById } from "../../Services/cards";
import Navbar from "../Navbar/Navbar";

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
          name: card.name,
          price: card.price,
          img: card.img,
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
  const handleChange = (e) => {
    setCartCard({ ...cartCard, version: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addToCart(cartCard);
    navigate("/cart");
  };
  return (
    <div>
      <h1>{card.name}</h1>
      <div>
        <img src={card.img} alt={card.desc} />
        <div>
          <p>Price: ${card.price}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="version">Print version</label>
            <select name="version" id="version" onChange={handleChange}>
              {card &&
                card.map((card) => {
                  <option value={version}>{version}</option>;
                })}
            </select>
            <button type="submit">Add to cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
