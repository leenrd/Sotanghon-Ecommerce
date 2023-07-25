import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { CartContext } from "../App";

const Card = ({
  name,
  description,
  imageName,
  imageAlt,
  price,
  addItemToCart,
  id,
}) => {
  const { cartItems } = useContext(ShopContext);
  const { handleBuy } = useContext(CartContext);
  const itemAmount = cartItems[id];

  return (
    <div className="card">
      <img
        className="ProductImage"
        src={`/assets/items/${imageName}`}
        alt={imageAlt}
      />
      <h3>{name}</h3>
      <p className="price">{price} ₽/pc</p>
      <p className="description">{description}</p>
      <div className="buttons">
        <button className="btn-secondary" onClick={() => handleBuy()}>
          Buy
        </button>
        <button className="btn-primary" onClick={addItemToCart}>
          <i className="fa-solid fa-cart-plus"></i> Add to Cart{" "}
          {itemAmount > 0 && `(${itemAmount})`}
        </button>
      </div>
    </div>
  );
};

export default Card;
