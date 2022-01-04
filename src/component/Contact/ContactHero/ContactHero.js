import React from "react";
import style from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <div id="hash-blog-section">
      <div className={style.container} style={{ position: "relative" }}>
        <section className={style.pageImg}>
          <section className={style.hero}>
            <h1 className={style.contacth1}>Contact Us !!</h1>
            <p className={style.contactp}>
              We would be pleazed if you shar your problem
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ContactHero;
