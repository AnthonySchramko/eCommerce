import React, { useState, useEffect } from "react";
import { getCart } from "../../Services/cards";
import Checkout from "../../Components/Checkout/Checkout";

const Cart = () => {
  const [cards, setCards] = useState(null);
  const [price, setPrice] = useState(0);
  const [updated, setUpdated] = useState(0);
  useEffect(() => {
    const wrapper = async () => {
      const allCards = await getCart();
      setCards(allCards);
      const totalPrice = allCards.reduce((acc, cost) => acc + cost.price, 0);
      setPrice(totalPrice);
      wrapper();
    };
  }, [updated]);

  return (
    <div>
      <div>
        <h2>Checkout</h2>
        <Checkout cards={cards} updated={updated} setUpdated={setUpdated} />
      </div>
      <div>
        <p>Total: $ {price}</p>
      </div>
    </div>
  );
};

export default Cart;
