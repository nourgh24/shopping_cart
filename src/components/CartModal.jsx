import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartModal = ({
  theme,
  cartItems,
  setIsCartOpen,
  removeFromCart,
  totalPrice,
}) => {
  return (
    <div className="cart-modal-overlay">
      <div className={`cart-modal ${theme}`}>
        <div className="cart-modal-header">
          <h2> Your Personal Cart🛒</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="cart-modal-body">
          {cartItems.length === 0 ? (
            <p className="empty-msg"> Your cart is currently empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-modal-item">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h4>{item.name}</h4>
                  <p>
                    {item.price} $ × {item.quantity}
                  </p>
                </div>
                <button
                  className="delete-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-modal-footer">
            <h3>Total Amount: {totalPrice.toFixed(2)} $</h3>
            <button className="checkout-btn">Confirm Purchase</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
