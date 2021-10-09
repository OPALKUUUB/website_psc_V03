import React, { Component } from "react";
import Truck from "../ai/Truck";
import ContainerDepot from "../ai/ContainerDepot";
import "./Export.css";
import LoadAtFactory from "../ai/LoadAtFactory";

class Export extends Component {
  render() {
    return (
      <section>
        <div>
          <h1>Export Process</h1>
        </div>
        <div className="Export-container">
          <div className="Export-block">
            <Truck height={"100px"} />
            Start
            <ContainerDepot height={"100px"} />
            Container Depot
            <LoadAtFactory height={"100px"} />
            Load Product
          </div>
        </div>
      </section>
    );
  }
}

export default Export;
