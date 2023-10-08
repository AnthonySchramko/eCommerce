import { useState, useEffect } from "react";
import Cart from "../../Components/Cart/Cart";
import { getCart } from "../../Services/cards";
import styles from "./CartPage.module.scss";
const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const wrapper = async () => {
      const cartItems = await getCart();
      setCart(cartItems);
      const totalPrice = cartItems.reduce(
        (acc, x) => acc + parseFloat(x.price),
        0
      );
      setTotalPrice(totalPrice.toFixed(2));
    };
    wrapper();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        {cart &&
          cart.map((card) => {
            return (
              <Cart
                key={card.id}
                name={card.name}
                img={card.img}
                price={card.price}
                rarity={card.rarity}
                colours={card.colours}
                id={card.id}
                desc={card.desc}
              />
            );
          })}
      </div>
      <div className={styles.checkout}>
        <h2>Checkout</h2>
        <p>Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default CartPage;
