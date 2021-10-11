import React, { Component } from "react";
import ContainerDepot from "../ai/ContainerDepot";
import "./Process.css";
import LoadAtFactory from "../ai/LoadAtFactory";
import Port from "../ai/Port";
import Arrow from "../ai/Arrow";

class Process extends Component {
  render() {
    return (
      <section className="Process">
        <div className="Container">
          <div className="Container-Top">
            <div className="Block">
              <ContainerDepot />
            </div>
            <div className="Block">
              <h3>
                Take to factory for
                <br /> packing product into containers.
              </h3>
            </div>
            <div className="Block">
              <Port />
            </div>
          </div>
          <div className="Container-Bottom">
            <div className="Block">
              <h3>
                Get an empty container
                <br />
                from the containers depot.
              </h3>
            </div>
            <div className="Block">
              <LoadAtFactory />
            </div>
            <div className="Block">
              <h3>
                Pick up or drop off
                <br />
                containers at the pier.
              </h3>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="Process-topicBlock">
            <h1 className="Process-topicText">Export Process</h1>
          </div>
          <div className="Process-container">
            <div className="Process-block">
              <ContainerDepot />
              <h3>Container Depot</h3>
            </div>
            <div className="Process-subBlock">
              <Arrow />
            </div>
            <div className="Process-block">
              <LoadAtFactory />
              <h3>Load Product</h3>
            </div>
            <div className="Process-subBlock">
              <Arrow />
            </div>
            <div className="Process-block">
              <Port />
              <h3>Export</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="Process-topicBlock">
            <h1 className="Process-topicText">Import Process</h1>
          </div>
          <div className="Process-container">
            <div className="Process-block flip">
              <Port />
              <h3 className="flip">Import</h3>
            </div>
            <div className="Process-subBlock">
              <Arrow />
            </div>
            <div className="Process-block">
              <LoadAtFactory />
              <h3>Load Product</h3>
            </div>
            <div className="Process-subBlock">
              <Arrow />
            </div>
            <div className="Process-block">
              <ContainerDepot />
              <h3>Container Depot</h3>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Process;
