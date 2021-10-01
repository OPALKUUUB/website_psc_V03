import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./WhatWeDo.css";
import {
  faIndustry,
  faTruckLoading,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";

class WhatWeDo extends Component {
  render() {
    return (
      <section className="Container">
        <div>
          <span style={{ fontSize: "100px", color: "white" }}>
            <FontAwesomeIcon icon={faTruckMoving} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTruckLoading} />
          </span>
          <span>
            <FontAwesomeIcon icon={faIndustry} />
          </span>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;
