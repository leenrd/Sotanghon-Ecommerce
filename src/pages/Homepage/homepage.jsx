// import React from 'react'
import Hero from "../../components/Hero/hero";
import Deals from "../../components/DealsPage/deals-page";
import { locations } from "../../data/locationData";
import { CartContext } from "../../App";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LocationCard } from "../Location/Location";

function Homepage() {
  const { handleCart } = useContext(CartContext);
  const carouselRef = useRef(null);

  const scrollNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const scrollPrev = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };
  return (
    <>
      <Hero />
      <div className="about">
        <p className="aboutText">
          <span>Sotanghon™</span> delivers fresh breads, stands for it&apos;s
          quality products, precision in technique and ultimate handling care.
          It is designed for people like you, who appreciate exquisite beauty
          and taste.
        </p>
      </div>
      <hr className="lineHomepage" />
      <Deals />
      <div className="items">
        <div className="con">
          <h1 className="headingTitle" style={{ color: "white" }}>
            The Pack
          </h1>
          <p className="headsubText">
            Our pastries are not made in a rush. We believe time is the key
            ingredient to success.
          </p>
          <div className="cta">
            <Link
              className="btn-secondary"
              to="/items"
              style={{ textDecoration: "none" }}
            >
              Items
            </Link>
            <button className="btn-outline" onClick={() => handleCart()}>
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="location-content">
        <div className="heading-cont">
          <h3 className="headingTitle">Our Stores</h3>
          <p className="headsubText">Serving you Hot & Fresh</p>
        </div>
        <div className="stores" ref={carouselRef}>
          {locations.map((loc) => {
            return (
              <LocationCard
                key={loc.id}
                image={loc.image}
                alt={loc.alt}
                title={loc.title}
                description={loc.description}
              />
            );
          })}
          <button className="nextbtn btn-secondary" onClick={scrollNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="prevbtn btn-secondary" onClick={scrollPrev}>
            <i className="fa-solid fa-chevron-right fa-flip-horizontal"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
