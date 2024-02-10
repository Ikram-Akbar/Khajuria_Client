import { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../assets/img_01.jpg"; // Import your images
import banner2 from "../../../assets/img_02.png";
import banner3 from "../../../assets/img_03.png";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const banners = [banner1, banner2, banner3];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="carousel_container">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel-height"
        >
          {banners.map((banner, idx) => (
            <Carousel.Item key={idx}>
              <div className="carousel-image">
                <img
                  className="d-block w-100"
                  src={banner}
                  alt={`Slide ${idx}`}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
