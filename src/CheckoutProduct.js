import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });

    toast.error(`${title} removido do carrinho!`);
  };

  return (
    <div className="checkoutproduct">
      <img className="checkoutrProduct__image" src={image} alt="produto" />
      <div className="checkoutProduct__info">
        <p className="checkoutrProduct__title">{title}</p>
        <p className="checkoutrProduct__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutrProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}> Remover do carrinho </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
