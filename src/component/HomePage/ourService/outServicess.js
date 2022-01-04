import React from "react";
import classes from "./InfoSection.module.css";
const OurService = () => {
  return (
    <div>
      <div class="container" style={{ paddingBottom: "100px" }}>
        <section id="share-head-section" style={{ backgroundColor: "white" }}>
          <div class="container">
            <div class="row">
              <div class="col text-center py-5">
                <h1 class="display-4">Our servicess</h1>
                <p class="lead">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente doloribus ut iure itaque quibusdam rem accusantium
                  deserunt reprehenderit sunt minus.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${classes.counter} `}>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 mt-3">
                <div className={`${classes.countCard}`}>
                  <i className={`${classes.i} far fa-smile`}></i>
                  <span className={classes.span} data-toggle="counter-up">
                    331+
                  </span>
                  <h3 className={classes.h3}>Happy Clients</h3>
                  <p className={classes.p}>
                    The objective of this guideline is to provide best practice
                    guidance to improve the ability guidance to improve the
                    ability
                  </p>
                  <a className={classes.a} href="/#">
                    {/* Read More » */}
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-3">
                <div className={`${classes.countCard}`}>
                  <i className={`${classes.i} fas fa-project-diagram`}></i>
                  <span className={classes.span} data-toggle="counter-up">
                    722+
                  </span>
                  <h3 className={classes.h3}>Scope</h3>
                  <p className={classes.p}>
                    The objective of this guideline is to provide best practice
                    guidance to improve the ability
                  </p>
                  <a className={classes.a} href="/#">
                    {/* Read More » */}
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-3 ">
                <div className={classes.countCard}>
                  <i className={`${classes.i} fas fa-question-circle`}></i>
                  <span className={classes.span} data-toggle="counter-up">
                    526+
                  </span>
                  <h3 className={classes.h3}>Support</h3>
                  <p className={classes.p}>
                    The objective of this guideline is to provide best practice
                    guidance to improve the ability
                  </p>
                  <a className={classes.a} href="/#">
                    {/* Read More » */}
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-3 ">
                <div className={classes.countCard}>
                  <i className={`${classes.i} fas fa-users`}></i>
                  <span className={classes.span} data-toggle="counter-up">
                    100+
                  </span>
                  <h3 className={classes.h3}>Our Team</h3>
                  <p className={classes.p}>
                    The objective of this guideline is to provide best practice
                    guidance to improve the ability
                  </p>
                  <a className={classes.a} href="/#">
                    {/* Read More » */}
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-3">
                <div className={classes.countCard}>
                  <i className={`${classes.i} fas  fa-users`}></i>
                  <span className={classes.span} data-toggle="counter-up">
                    100+
                  </span>
                  <h3 className={classes.h3}>Our Team</h3>
                  <p className={classes.p}>
                    The objective of this guideline is to provide best practice
                    guidance to improve the ability
                  </p>
                  <a a className={classes.a} href="/#">
                    {/* Read More » */}
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-3 ">
                <div className={classes.countCard}>
                  <i className={`${classes.i} fas  fa-project-diagram`}></i>

                  <span className={classes.span} data-toggle="counter-up">
                    722+
                  </span>
                  <h3 className={classes.h3}>Scope</h3>
                  <p className={classes.p}>
                    The objective of this guideline is to provide best practice
                    guidance to improve the ability
                  </p>
                  <a className={classes.a} href="/#">
                    {/* Read More » */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurService;
