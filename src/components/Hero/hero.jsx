import './style-hero.css';


const Hero = () => {

  return (
    <header>
      <div className="hero container">
        <div className="mask">
        <h1 id="text" className="title">
          BreadsAtYourDoorStep
        </h1>
        </div>
        <div className="sub">
          <p className="subtext">
            Baking breads that make mornings special since <span>'03</span>
          </p>
          <span>Sotanghon&trade; All rights reserved</span>
        </div>
        <i className="fa-solid fa-chevron-down fa-bounce" ></i>
      </div>
    </header>
  );
};

export default Hero;
