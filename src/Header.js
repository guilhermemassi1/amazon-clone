import "./Header.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          alt="Amazon Logo"
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchLogo" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Ola {!user ? "Usuário" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sair" : "Faça o seu login"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne"> Devoluções </span>
          <span className="header__optionLineTwo"> e Pedidos </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Seu </span>
          <span className="header__optionLineTwo"> Prime </span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingCartIcon className="header__shoppingIcon" />
          </Link>
          <span className="header__optionBasketItens">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
