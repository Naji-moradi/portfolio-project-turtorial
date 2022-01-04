import React from "react";
import style from "./PortfolioHero.module.css";

const HeroSection = () => {
  return (
    <div className="mt-10">
      <div className={`${style.heroContainer} mt-10 `}>
        <div className={style.hero}></div>
        <div className={style.heroStuff}>
          <h1 className={style.portfolioh1}>I love coffee</h1>
          <a className={style.btn}>Buy Me Some</a>
        </div>
      </div>

      <p>
        Other content goes down here and doesn't get disturbed by the
        transitioning hero above it.
      </p>
    </div>
  );
};

export default HeroSection;
