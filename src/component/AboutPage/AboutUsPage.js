import React from "react";
import AboutUs from "../Career/AboutUsCards/AboutUs";
import AboutUsHeroCarousel from "../Portfolio/hero/Carousel";
import InfoSection from "../HomePage/ourService/outServicess";
import ProfileSection from "./ProfileSection/ProfileSection";
// import TeamMembers from "./TeamMembers/TeamMembers";
// import VideoInfoSection from "./VideoInfoSection";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHeroCarousel />
      <InfoSection />
      {/* <VideoInfoSection /> */}
      <AboutUs />
      <ProfileSection />

      {/* <TeamMembers /> */}
    </div>
  );
};

export default AboutUsPage;
