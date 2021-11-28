import React, { Component, useState } from "react";
import { Carousel } from "react-bootstrap";

const Slider = ({ images }) => {
  return (
    <div style={{ margin: "20px 0", padding: "10px" }}>
      <Carousel>
        {images.links.flickr_images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 sliderImg"
              src={image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{images.launch_date_local}</h3>
              <p>{images.rocket.rocket.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
