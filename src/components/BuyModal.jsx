import { CartContext } from "../App";
import "./style-OpenModal.css";
import { useContext, useState } from "react";
export const BuyModal = ({ name, description, imageName, imageAlt, price }) => {
  const { handleBuy } = useContext(CartContext);
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="screenOverlay" onClick={() => handleBuy()}></div>
      <div className="modal">
        <div className="gridModal">
          <div className="rightModal">
            <img
              className="ProductImage"
              src={`/assets/items/${imageName}`}
              alt={imageAlt}
            />
          </div>
          <div className="leftModal">
            <div className="headModal">
              <button
                className="closeModal btn-primary"
                onClick={() => handleBuy()}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="nameModal">
              <h3>Name</h3>
              <h3>Price</h3>
            </div>
            <p>{description}</p>
            <div className="instockModal">
              <span>insTock</span>
              <div className="adder">
                <button
                  className="plus"
                  onClick={
                    count > 1
                      ? () => setCount((prev) => prev + 1)
                      : () => setCount((prev) => (prev = 1))
                  }
                >
                  +
                </button>
                <span className="counter">{count}</span>
                <button
                  className="minus"
                  onClick={
                    count > 1
                      ? () => setCount((prev) => prev - 1)
                      : () => setCount((prev) => (prev = 1))
                  }
                >
                  -
                </button>
              </div>
            </div>
            <button className="checkOut ">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
