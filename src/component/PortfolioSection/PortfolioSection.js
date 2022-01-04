import React from "react";
import "./portfolioSection.css";
import img1 from "../../assets/Imac_alu.png";

const Portfolio = () => {
  return (
    <div>
      <div class="container">
        <h1 class="text-center">Apple Like Content Section</h1>

        <div class="row">
          <div class="col-md-6">
            <img src={img1} alt="" class="w-100" />
          </div>

          <div class="col-md-6">
            <div class="row align-items-center h-100">
              <div class="col">
                <h1 class="display-3">Vertically Centered Text</h1>
                <p class="lead">
                  Flexbox grids help you build some really nice layouts.
                  <br />
                  <br />
                  <a href="" class="">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 order-md-6">
            <img src={img1} alt="" class="w-100" />
          </div>

          <div class="col-md-6 order-md-1">
            <div class="row align-items-center h-100">
              <div class="col">
                <h1 class="display-3">Vertically Centered Text</h1>
                <p class="lead">
                  Push and pull classes were added to change the order on
                  desktop but still have the image before the text on mobile.
                  <br />
                  <br />
                  <a href="" class="">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
