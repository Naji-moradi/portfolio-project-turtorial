import React from "react";
import img1 from "../../../assets/carousel/graphic-designing.jpg";
import img2 from "../../../assets/carousel/mobile-development.jpg";
import img3 from "../../../assets/carousel/seo.jpg";
import img4 from "../../../assets/carousel/software-development.jpg";
// import img5 from '../../../assets/carousel/web-designing.jpg'
// import img6 from '../../../assets/carousel/web-development.jpg'

const CarouselHero = () => {
  return (
    <div>
      <section>
        <div class=" mt-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block "></div>
              </div>
              <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img4} class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselHero;
