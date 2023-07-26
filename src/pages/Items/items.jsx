import "./style-items.css";
import { useState, useContext } from "react";
import { sampleBread } from "../../data/breadsData";
import { ShopContext } from "../../context/ShopContext";
import Card from "../../components/Card";

const Items = () => {
  const { addToCart } = useContext(ShopContext);
  const [data, setData] = useState(sampleBread);

  const filterItems = (categ) => {
    const filteredItems = sampleBread.filter((bread) => {
      return bread.tags.includes(categ);
    });

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
          <ButtonFilter
            filterFunction={() => filterItems("All")}
            buttonFor={"All"}
          />
          <ButtonFilter
            filterFunction={() => filterItems("Breads")}
            buttonFor={"Breads"}
          />
          <ButtonFilter
            filterFunction={() => filterItems("Sweets")}
            buttonFor={"Sweets"}
          />
          <ButtonFilter
            filterFunction={() => filterItems("Cakes")}
            buttonFor={"Cakes"}
          />
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

const ButtonFilter = ({ filterFunction, buttonFor }) => {
  return (
    <button className={"btn-secondary"} onClick={filterFunction}>
      {buttonFor}
    </button>
  );
};
