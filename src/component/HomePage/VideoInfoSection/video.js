import React from "react";
import Video from "../../../assets/video/hatectvideo.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
} from "./VideoInfoSection.js";

const VideoInfoSection = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroBtnWrapper></HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default VideoInfoSection;
