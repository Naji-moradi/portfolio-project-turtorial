import React from "react";
import AboutUs from "./AboutUsCards/AboutUs";
import CareerHero from "./CareerHero/CareerHero";
// import CareerHero from "./CareerHero/CareerHero";
import Form from "./ContactForm/Form";

// import Opportunities from "./Opportunities/Career";

const CareerAll = () => {
  return (
    <div>
      <CareerHero />
      <AboutUs />
      <Form />
    </div>
  );
};

export default CareerAll;
