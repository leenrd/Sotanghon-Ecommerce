import "./style-items.css";
import { useState, useContext } from "react";
import { sampleBread } from "../../data/breadsData";
import { ShopContext } from "../../context/ShopContext";
import Card from "../../components/Card";

const Items = () => {
  const { addToCart } = useContext(ShopContext);
  const [data, setData] = useState(sampleBread);
  const [pressed, setPressed] = useState([
    {
      id: 1,
      on: false,
      categ: "All",
      for: "All",
    },
    {
      id: 2,
      on: false,
      categ: "Breads",
      for: "Breads",
    },
    {
      id: 3,
      on: false,
      categ: "Sweets",
      for: "Sweets",
    },
    {
      id: 4,
      on: false,
      categ: "Cakes",
      for: "Cakes",
    },
  ]);

  const filterItems = (categ, id) => {
    const filteredItems = sampleBread.filter((bread) => {
      return bread.tags.includes(categ);
    });

    setPressed((prev) =>
      prev.map((btn) => {
        return btn.id === id ? { ...btn, on: !btn.on } : { ...btn, on: false };
      })
    );
    setData(filteredItems);
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
          {pressed.map((btn) => {
            return (
              <ButtonFilter
                key={btn.id}
                filterFunction={() => filterItems(btn.categ, btn.id)}
                buttonFor={btn.for}
                on={btn.on}
              />
            );
          })}
        </div>
      </div>
      <div className="items-cont">
        {data.map((bread) => {
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
        })}
      </div>
    </>
  );
};

export default Items;

const ButtonFilter = ({ filterFunction, buttonFor, on }) => {
  return (
    <button
      className={on ? "btn-primary clicked" : "btn-secondary"}
      onClick={filterFunction}
    >
      {buttonFor}
    </button>
  );
};
