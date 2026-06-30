import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import ThemeCard from "./ThemeCard";

const Header = ({ setSelectedCategory, setIsCartOpen, totalCount }) => {
  return (
    <header>
      <h1>Shopping Bag</h1>
      <nav>
        <a href="#" onClick={() => setSelectedCategory(null)}>
          Categories
        </a>
        <div
          className="cart-status"
          onClick={() => setIsCartOpen(true)}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon
            icon={faBasketShopping}
            style={{ marginLeft: "10px", color: "#d4c2e1", fontSize: 20 }}
          />
          <span className="Count-cart">{totalCount}</span>
        </div>
        <ThemeCard />
      </nav>
    </header>
  );
};

export default Header;
