import "./style-deals-page.css";
import { sampleBread } from "../../data/breadsData";
import Card from "../Card";

const Deals = () => {
  const sampleOne = sampleBread[0];
  const sampleTwo = sampleBread[2];

  return (
    <div className="container">
      <div id="heading" className="heading-cont">
        <h1 className="headingTitle">Our Hottest Deals</h1>
        <p className="headsubText">Best Croissant and Cakes in town</p>
      </div>
      <div className="content">
        <Card
          name={sampleOne.name}
          description={sampleOne.description}
          imageName={sampleOne.imageName}
          imageAlt={sampleOne.imageAlt}
          price={sampleOne.price}
          key={sampleOne.id}
        />
        <Card
          name={sampleTwo.name}
          description={sampleTwo.description}
          imageName={sampleTwo.imageName}
          imageAlt={sampleTwo.imageAlt}
          price={sampleTwo.price}
          key={sampleTwo.id}
        />
      </div>
    </div>
  );
};

export default Deals;
