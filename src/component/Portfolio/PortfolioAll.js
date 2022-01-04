import React from "react";
import CarouselHero from "./hero/Carousel";
import OurClients from "./OurClients/OurClients";
import PortfolioHero from "./PortfolioHero/PortfolioHero";
import PortfolioInfo from "./PortfolioInfo/PortfolioInfo";

const PortfolioAll = () => {
  return (
    <div>
      <CarouselHero />
      {/* <PortfolioHero /> */}
      <PortfolioInfo />
      <OurClients />
    </div>
  );
};

export default PortfolioAll;
