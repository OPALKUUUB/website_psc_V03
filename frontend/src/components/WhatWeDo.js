import React, { Component } from "react";
import "./WhatWeDo.css";
import Export from "./Export";

class WhatWeDo extends Component {
  render() {
    return (
      <section className="Container">
        <div style={{ padding: "20px" }}>
          <div>
            <Export />
          </div>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;
