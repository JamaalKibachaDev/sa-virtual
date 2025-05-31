import React from "react";

import LandingCarousel from "./LandingCarousel";

import "./css/Header.css";

import { homeHeader } from "../assets/data";

const Header = () => {
  return (
    <>
      <div className="">
        <LandingCarousel />

        <div className="text-center py-4">
          {homeHeader.map(({title, description }) => (
            <>
              <h3>{title}</h3>
              <p className="text-muted m-4">{description}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
