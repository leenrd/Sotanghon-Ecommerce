import { ShopContext } from "../../context/ShopContext";
import "./style-cart.css";
import { sampleBread } from "../../data/breadsData";
import { useContext, useState } from "react";

function Cart({ cartFunction }) {
  const { cartItems, removeToCart } = useContext(ShopContext);
  const itemAmount = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <>
      <div className="screenOverlay" onClick={() => cartFunction()}></div>
      <div className="cartSheet">
        <div className="headCart">
          <div className="cart">Cart({0 || itemAmount})</div>
          <button
            className="closeCart btn-primary"
            onClick={() => cartFunction()}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <hr />
        {itemAmount < 1 ? (
          <CartEmpty cartFunction={cartFunction} />
        ) : (
          <>
            <div className="cartItems">
              {sampleBread.map((bread) => {
                if (cartItems[bread.id] !== 0) {
                  return (
                    <CartItem
                      image={bread.imageName}
                      name={bread.name}
                      inStock={bread.inStock}
                      price={bread.price}
                      imageAlt={bread.imageAlt}
                      removeItemFromCart={() => removeToCart()}
                      key={bread.id}
                      id={bread.id}
                    />
                  );
                }
              })}
            </div>
            <TransactionInfo />
          </>
        )}
      </div>
    </>
  );
}

export default Cart;

const CartItem = ({
  id,
  image,
  name,
  inStock,
  price,
  imageAlt,
  removeItemFromCart,
}) => {
  const { cartItems, addToCart, removeToCart } = useContext(ShopContext);
  const itemAmount = cartItems[id];

  return (
    <div className="boxContainer">
      <div className="boxItem">
        <img src={`assets/items/${image}`} alt={imageAlt} />
        <div className="Cartgrid">
          <div className="Cartleft">
            <span className="itemName">{name}</span>
            <span className="tick">{inStock}</span>
          </div>
          <div className="Cartright">
            <span>{price}</span>
            <div className="operations">
              <div className="adder">
                <button className="plus" onClick={() => addToCart(id)}>
                  +
                </button>
                <span className="counter">{itemAmount}</span>
                <button className="minus" onClick={() => removeToCart(id)}>
                  -
                </button>
              </div>
              <button
                className="remove btn-primary"
                onClick={removeItemFromCart}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

const TransactionInfo = () => {
  return (
    <div className="transaction">
      <hr />
      <div className="subtotal text-flex">
        <span>Subtotal</span>
        <span>some number 120</span>
      </div>
      <div className="shipping text-flex">
        <span>Shipping</span>
        <span>Free/some</span>
      </div>
      <div className="taxes text-flex">
        <span>Taxes(VAT)</span>
        <span>some nums</span>
      </div>
      <hr />
      <div className="total text-flex">
        <span>Total</span>
        <span>total num</span>
      </div>
      <button className="checkOut ">Proceed to Checkout</button>
    </div>
  );
};

const CartEmpty = ({ cartFunction }) => {
  return (
    <div className="cartEmpty">
      <img
        src="/assets/UnboxingDoodle.png"
        alt=""
        className="emptyStateImage"
      />
      <h1 className="emptyText">Your cart is empty</h1>
      <button className="btn-secondary" onClick={() => cartFunction()}>
        Continue Browsing
      </button>
    </div>
  );
};
