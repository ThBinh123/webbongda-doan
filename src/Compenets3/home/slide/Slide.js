import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../../imgsProduct/slider3.jpg"
import image2 from "../../../imgsProduct/voucher2.webp"
import image3 from "../../../imgsProduct/voucher3.webp"
import image4 from "../../../imgsProduct/voucher.jpg"
import "./Slide.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slide'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='slide-box' >
          <img
            className="d-block w-100"
            src={image4}
            alt="First slide"
            style={{width:"100%"}}
          />
        </Carousel.Item>
        <Carousel.Item className='slide-box'>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className='slide-box'>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;