import "./style-items.css";
import { useState, useContext } from "react";
import { sampleBread } from "../../data/breadsData";
import { ShopContext } from "../../context/ShopContext";
import Card from "../../components/Card";

const Items = () => {
  const [filterBtnClick, setfilterBtnClick] = useState(false);
  const { addToCart } = useContext(ShopContext);
  const allItems = sampleBread.map((bread) => {
    return (
      <Card
        name={bread.name}
        description={bread.description}
        imageName={bread.imageName}
        imageAlt={bread.imageAlt}
        price={bread.price}
        id={bread.id}
        key={bread.id}
        addItemToCart={() => addToCart(bread.id)}
      />
    );
  });

  const handleClick = () => {
    setfilterBtnClick((prevfilterBtnClick) => !prevfilterBtnClick);
  };

  return (
    <>
      <div className="bar"></div>
      <div className="heading-cont">
        <h1 className="headingTitle">Our Products</h1>
        <p className="headsubText">
          Finest in the block. We ensure only high quality breads get delivered
          to you
        </p>
        <div className="filters">
          <button className="clicked">All</button>
          <button
            className={filterBtnClick ? "clicked" : "btn-secondary"}
            onClick={handleClick}
          >
            Breads
          </button>
          <button
            className={filterBtnClick ? "clicked" : "btn-secondary"}
            onClick={handleClick}
          >
            Sweets
          </button>
          <button
            className={filterBtnClick ? "clicked" : "btn-secondary"}
            onClick={handleClick}
          >
            Cakes
          </button>
        </div>
      </div>
      <div className="items-cont">{allItems}</div>
    </>
  );
};

export default Items;
