import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-frame">
          <div className="Header-content">
            <div className="Header-contact">
              <div className="contact-left">
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <p>หมู่ที่ 1 ต.หนองขาม อ.ศรีราชา จ.ชลบุรี 20110</p>
                </div>
              </div>
              <div className="contact-right">
                <div>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <p>084-356-5558</p>
                </div>
              </div>
            </div>
            <div className="Header-logo">
              <h1>psc</h1>
            </div>
            <hr className="Header-bar" />
            <div className="Header-navbar">
              <ul className="navbar-nav">
                <li className="active">
                  <a href="/#">home</a>
                </li>
                <li>
                  <a href="/#">about us</a>
                </li>
                <li>
                  <a href="/#">contacts</a>
                </li>
              </ul>
            </div>
            <div className="Header-body">
              <div className="body-head">
                <h1>
                  we are transporter
                  <br />
                  who make your satisfied
                  {/* which make you satisfied */}
                  {/* your satisfied is our goal */}
                </h1>
              </div>
              <div className="body-tail">
                <h3>Join us to get bargain deals on the shipping container</h3>
              </div>
              <div className="body-button">
                <a href="/#" className="button">
                  contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
