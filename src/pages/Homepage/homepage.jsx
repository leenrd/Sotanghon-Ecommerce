// import React from 'react'
import Hero from "../../components/Hero/hero";
import Deals from "../../components/DealsPage/deals-page";
import Location from "../Location/Location";
import { CartContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BuyModal } from "../../components/BuyModal";

function Homepage() {
  const { handleCart, openModal } = useContext(CartContext);

  return (
    <>
      {openModal && <BuyModal />}
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
      <Location />
    </>
  );
}

export default Homepage;
