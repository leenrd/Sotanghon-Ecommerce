import './style-hero.css';


const Hero = () => {

  return (
    <header>
      <div className="hero container">
        <div className="mask">
        <h1 id="text" className="title">
          BreadsAtYourDoorstep
        </h1>
        </div>
        <div className="sub">
          <p className="subtext">
            Baking breads that make mornings special since <span>'03</span>
          </p>
          <span>Sotanghon&trade; All rights reserved</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
