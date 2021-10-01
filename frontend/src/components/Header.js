import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-frame">
          <div className="Header-content">
            <div className="Header-contact">
              <div className="contact-left">
                <p>address content</p>
              </div>
              <div className="contact-right">
                <p>phone content</p>
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
                  we make shipping
                  <br />
                  big stuff easy
                </h1>
              </div>
              <div className="body-tail">
                <h3>
                  Join with us getting bargain deals on shipping container
                </h3>
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
