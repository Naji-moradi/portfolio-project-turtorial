import React from "react";
import "./PortfolioInfo.css";
import img1 from "../../../assets/Imac_alu.png";

const Portfolio = () => {
  return (
    <div>
      <div class="container">
        <section id="share-head-section" style={{ backgroundColor: "white" }}>
          <div class="container">
            <div class="row">
              <div class="col text-center py-5">
                <h1
                  class="display-4"
                  style={{ color: "#1f3a4d", fontWeight: "bold" }}
                >
                  Our worked projects{" "}
                </h1>
                <p class="lead">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente doloribus ut iure itaque quibusdam rem elit. Sapiente
                  doloribus ut iure itaque quibusdam rem accusantium
                </p>
              </div>
            </div>
          </div>
        </section>

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
