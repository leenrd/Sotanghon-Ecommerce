import "./style-items.css";
import { useState, useContext } from "react";
import { sampleBread } from "../../data/breadsData";
import { ShopContext } from "../../context/ShopContext";
import Card from "../../components/Card";

const Items = () => {
  const { addToCart } = useContext(ShopContext);

  const All = sampleBread.map((bread) => {
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

  // const filteredItems = sampleBread.filter((bread) =>
  //   bread.tags.includes(categ)
  // );
  // const filteredCards = filteredItems.map((bread) => (
  //   <Card
  //     name={bread.name}
  //     description={bread.description}
  //     imageName={bread.imageName}
  //     imageAlt={bread.imageAlt}
  //     price={bread.price}
  //     id={bread.id}
  //     key={bread.id}
  //     addItemToCart={() => addToCart(bread.id)}
  //   />
  // ));

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
          <button className="clicked" onClick={All}>
            All
          </button>
          <button className="btn-secondary">Breads</button>
          <button className="btn-secondary">Sweets</button>
          <button className="btn-secondary">Cakes</button>
        </div>
      </div>
      <div className="items-cont">{All}</div>
    </>
  );
};

export default Items;
