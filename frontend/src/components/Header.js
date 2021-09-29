import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-content">
          <div className="Header-contact">
            <div className="contact-left">address content</div>
            <div className="contact-right">phone content</div>
          </div>
          <div className="Header-logo">
            <h1>psc</h1>
          </div>
          <div className="Header-navbar">
            <ul>
              <li>
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
              <h3>Join with us getting bargain deals on shipping container</h3>
            </div>
            <div className="content-button">
              <a href="/#">contact us</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
