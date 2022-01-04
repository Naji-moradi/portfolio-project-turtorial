import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarker,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "./FooterElements.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div class="main-content">
          <div class="left box">
            <h2>about us</h2>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem reiciendis delectus incidunt in laudantium molestias,
                sed porro iusto corporis doloremque beatae ipsam voluptates
                explicabo repudiandae nostrum debitis temporibus architecto
                labore!
              </p>
              <div class="social">
                <a href="https://facebook.com/coding.np">
                  <span className="fas">
                    <FaFacebook />
                  </span>
                </a>
                <a href="/#">
                  <span className="fas">
                    <FaTwitter />
                  </span>
                </a>
                <a href="https://instagram.com/coding.np">
                  <span className="fas">
                    <FaInstagram />
                  </span>
                </a>
                <a href="https://youtube.com/c/codingnepal">
                  <span className="fas">
                    <FaYoutube />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="center box">
            <h2>address</h2>
            <div class="content">
              <div class="place">
                <span>
                  <FaMapMarker />
                </span>
                <span class="text">Sout isia</span>
              </div>
              <div class="phone">
                <span>
                  <FaPhoneAlt />
                </span>
                <span class="text">+089-765432100</span>
              </div>
              <div class="email">
                <span>
                  <FaEnvelope />
                </span>
                <span class="text">abc@example.com</span>
              </div>
            </div>
          </div>
          <div class="right box">
            <h2>contact us</h2>
            <div class="content">
              <form action="#">
                <div class="email">
                  <div class="text">Email *</div>
                  <input
                    type="email"
                    required
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div class="msg">
                  <div class="text">message *</div>
                  <textarea rows="2" cols="25" required></textarea>
                </div>
                <div
                  className="btn_footer"
                  style={{ padding: "2px", color: "white" }}
                >
                  <button type="submit">send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="bottom">
          <center>
            <span class="credit">
              Created By{" "}
              <a href="https://www.codingnepalweb.com">CodingNepal</a> |{" "}
            </span>
            <span class="far fa-copyright"></span>
            <span> 2020 All rights reserved.</span>
          </center>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
