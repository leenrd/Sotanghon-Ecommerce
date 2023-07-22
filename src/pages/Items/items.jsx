import "./style-items.css";

const Items = () => {
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
          <button className="btn-secondary">Breads</button>
          <button className="btn-secondary">Sweets</button>
          <button className="btn-secondary">Pretzels</button>
          <button className="btn-secondary">Cakes</button>
        </div>
      </div>
    </>
  );
};

export default Items;
