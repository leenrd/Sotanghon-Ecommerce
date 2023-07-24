import "./style-navbar.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Cart from "../../pages/Cart/cart";
import { CartContext } from "../../App";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { cartOn, handleCart } = useContext(CartContext);
  const { cartItems } = useContext(ShopContext);
  const itemAmount = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const changeStyle = () => {
    if (window.scrollY >= 94) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeStyle);

  return (
    <>
      {cartOn && <Cart cartFunction={handleCart} />}
      <div className={navbar ? "navbar container active" : "navbar container"}>
        <nav>
          <div className="left">
            <a href="/" className="logolink">
              Sotanghon
            </a>
          </div>
          <div className="center navlinks">
            <Link className="btn-ghost" to="/">
              Home
            </Link>
            <Link className="btn-ghost" to="/items">
              Items
            </Link>
            <Link className="btn-ghost" to="/about">
              About
            </Link>
            <Link className="btn-ghost" to="/location">
              Locations{" "}
            </Link>
          </div>
          <div className="right">
            <button onClick={handleCart}>
              {itemAmount > 0 ? (
                <span className="notification-icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              ) : (
                <i className="fa-solid fa-cart-shopping"></i>
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
