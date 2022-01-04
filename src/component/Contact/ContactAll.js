import React from "react";
import Contact from "./ContactForm/Contact";
import ContactHero from "./ContactHero/ContactHero";
import Map from "./Map/Map";

const ContactAll = () => {
  return (
    <div>
      <ContactHero />
      <Contact />
      <Map />
    </div>
  );
};

export default ContactAll;
