import React from "react";

import LandingCarousel from "./LandingCarousel";

import "./css/Header.css";

const Header = () => {
  return (
    <>
      <div className="">
        <LandingCarousel />

        <div className="text-center py-4">
          <h3 className="">Welcome to South African Virtual</h3>
          <p className="text-muted m-4">
            We are a prominent virtual airline within the{" "}
            <span>Infinite Flight community</span>. Dedicated to replicating the
            real-world operations of South African Airways, Our VA offers a
            highly <span>professional</span> and <span>immersive</span> flying
            experience in the IF skies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
