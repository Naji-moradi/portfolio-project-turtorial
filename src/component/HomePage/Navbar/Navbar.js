import React from "react";
import style from "./Navbar.module.css";
import my_logo from "../../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top  nav1 ${style.nav1} ${style.navColor}`}
    >
      <div className="container ">
        <a className={`navbar-brand ${style.navbarBrand}`} href="/">
          <img className={style.navLogo} src={my_logo} alt="haztech_logo " />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className={`nav-link ${style.a1}`} to="/">
                Home
                <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${style.a1}`} to="/servicess">
                Servicess
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${style.a1}`} to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${style.a1}`} to="/ourTeam">
                Team Haztech
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${style.a1}`} to="/">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${style.a1}`} to="/career">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${style.a1}`} to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
