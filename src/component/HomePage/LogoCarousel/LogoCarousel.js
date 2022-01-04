import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../../../src/assets/firstServices/c1.jpg";
import img2 from "../../../../src/assets/firstServices/c2.png";
import img3 from "../../../../src/assets/firstServices/c3.jpg";
import img4 from "../../../../src/assets/firstServices/c4.png";
import img5 from "../../../../src/assets/firstServices/c5.jpg";
import img6 from "../../../../src/assets/firstServices/c6.png";

export default class LogoCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "6px",
      slidesToShow: 5,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <div className="pb-4 ">
        <h2
          style={{ textAlign: "center", paddingBottom: "100px" }}
          className="display-4"
        >
          Center Mode this is yes
        </h2>
        <Slider {...settings} className="mt-5 mb-10">
          <div>
            <img
              alt=""
              src={img1}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img2}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img3}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img4}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img5}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img6}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img1}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img2}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img3}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img4}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img5}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
          <div>
            <img
              alt=""
              src={img6}
              style={{ width: "100px", height: "120px", paddin: "1px" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
