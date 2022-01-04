import React from "react";

import OurService from "./ourService/outServicess";

import Header from "./Header/Header";

import LogoCarousel from "./LogoCarousel/LogoCarousel";
import AboutUs from "./AboutUs/AboutUs";
import VideoInfoSection from "./VideoInfoSection/video";

const HomePageAll = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <VideoInfoSection />

      <OurService />

      <LogoCarousel />
    </div>
  );
};

export default HomePageAll;
