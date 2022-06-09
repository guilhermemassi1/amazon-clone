import "./Product.css";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
    toast.success(`${title} adicionado ao carrinho!`);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="imagem produto" />
      <button className="product__button" onClick={addtoBasket}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default Product;
