import React from "react";
import style from "./CareerHero.module.css";

const CareerHero = () => {
  return (
    <div>
      <div className={style.heroContainer}>
        <div className={style.hero}></div>
        <div className={style.heroStuff}>
          <h1 className={style.portfolioh1}>I love coffee</h1>
          <a className={style.btn}>Buy Me Some</a>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
