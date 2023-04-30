import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map((prod) => {
          const { id, name, quantity, price } = prod;
          const total = quantity * price;

          return (
            <div key={id}>
              <h3>Product added: {name}</h3>
              <h5>Total per product: {total}</h5>
            </div>
          );
        })}
      </div>
      <Link to="/checkout">Proceed checkout</Link>
    </div>
  );
};
export default Cart;