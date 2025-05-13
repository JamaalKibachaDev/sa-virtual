import React from "react";
import Carousel from "react-bootstrap/Carousel";

import SAAVCarousel1 from "../assets/saav-q400-tail.jpg";
import SAAVCarousel2 from "../assets/crj-700.jpg";
import SAAVCarousel3 from "../assets/saav-carousel-1.jpg";

const LandingCarousel = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src={SAAVCarousel1} alt="saav-carousel-img" className="w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={SAAVCarousel2} alt="saav-carousel-img" className="w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={SAAVCarousel3} alt="saav-carousel-img" className="w-100" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default LandingCarousel;
