import React from "react";
import Typed from "react-typed";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.mainInfo}>
          <h2 className={style.headerh2}>best web development campany!</h2>
          <Typed
            className={style.typedText}
            strings={[
              "Web development",
              "Software develpment",
              "Responsive design",
              "Mobile application",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href="/" className={style.btnMainOffer}>
            Contact me{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
