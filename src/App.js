import React from "react";
import style from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// for slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// mdbreact start
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// mdbreact end
// import Star from './Star'
// end for slick carousel
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Navbar from "./component/HomePage/Navbar/Navbar";

import Footer from "./component/Footer/index";
import HomePageAll from "./component/HomePage/HomePageAll";
import AboutUsPage from "./component/AboutPage/AboutUsPage";
import PortfolioAll from "./component/Portfolio/PortfolioAll";
import OurTeamAll from "./component/OurTeam/OurTeamAll";
import CareerAll from "./component/Career/CareerAll";
import ContactAll from "./component/Contact/ContactAll";
import AboutUs from "./component/Career/AboutUsCards/AboutUs";

function App() {
  return (
    <>
      <Particles
        className={style.tsparticlesConvasEl}
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      e3
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={HomePageAll} />
          <Route path="/about" exact component={AboutUsPage} />
          <Route path="/servicess" exact component={AboutUs} />
          <Route path="/portfolio" exact component={PortfolioAll} />
          <Route path="/ourTeam" exact component={OurTeamAll} />
          <Route path="/career" exact component={CareerAll} />
          <Route path="/contact" exact component={ContactAll} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
