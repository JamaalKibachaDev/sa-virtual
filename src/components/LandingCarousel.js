import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { homeCarousel } from "../assets/data";
import { CarouselItem } from "react-bootstrap";

const LandingCarousel = () => {
  return (
    <>
      <Carousel fade>
        {homeCarousel.map(({ id, image, alt }) => (
          <CarouselItem key={id} interval={2500}>
            <img src={image} alt={alt} className="w-100" />
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
};

export default LandingCarousel;
