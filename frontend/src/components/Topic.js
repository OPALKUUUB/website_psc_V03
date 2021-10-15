import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Topic extends Component {
  render() {
    return (
      <section>
        <div
          style={{
            width: "100vw",
            background: "#201000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh",
          }}
        >
          <div>
            <h1
              style={{
                margin: "0",
                textTransform: "uppercase",
                color: "#F2F2F2",
              }}
            >
              {this.props.topic}
            </h1>
          </div>
          <div style={{ color: "#F2F2F2" }}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        {/* <div style={{ width: "100vw", height: "500px" }}></div> */}
      </section>
    );
  }
}

export default Topic;
