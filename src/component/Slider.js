import img from "../Images/img.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Slider.css";

function Slider() {
  return (
    <div className="slider-main">
      <Carousel
        showThumbs="false"
        className="slidebar"
        autoPlay="true"
        interval="2000"
        infiniteLoop="true"
      >
        <div>
          <img src={img} className="slider" alt="" />
        </div>
        <div>
          <img src={img} className="slider" alt="" />
        </div>
        <div>
          <img src={img} className="slider" alt="" />
        </div>
        <div>
          <img src={img} className="slider" alt="" />
        </div>
        <div>
          <img src={img} className="slider" alt="" />
        </div>
        <div>
          <img src={img} className="slider" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
