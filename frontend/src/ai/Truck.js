import React, { Component } from "react";

class Truck extends Component {
  render() {
    console.log(this.props.height);
    return (
      <svg
        height={this.props.height}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 792 406.04"
      >
        <path
          d="M506.83,270.43H534a98.47,98.47,0,0,1,172.93,0h24.36c1.23,0,2.45-.06,3.65-.18a39,39,0,0,0,35.38-38.83V172.61A154.38,154.38,0,0,0,616,18.23H542.45a35.63,35.63,0,0,0-35.62,35.63V210.5"
          style={{ fill: "#006838" }}
        />
        <path
          d="M506.83,210.5H37.49a15.83,15.83,0,0,0-15.83,15.83v26.58a17.52,17.52,0,0,0,17.53,17.52H60.35a77,77,0,0,1,122,0H239a77,77,0,0,1,122,0H506.83"
          style={{ fill: "#009444" }}
        />
        <circle cx="623.46" cy="317.51" r="77.04" style={{ fill: "#414042" }} />
        <circle cx="300.01" cy="317.51" r="77.04" style={{ fill: "#414042" }} />
        <circle cx="122.45" cy="317.51" r="77.04" style={{ fill: "#414042" }} />
        <circle cx="122.45" cy="317.51" r="34.35" style={{ fill: "#fff" }} />
        <circle cx="300.01" cy="317.51" r="34.35" style={{ fill: "#fff" }} />
        <circle cx="623.46" cy="317.51" r="34.35" style={{ fill: "#fff" }} />
        <path
          d="M559.94,77h91.58A35.46,35.46,0,0,1,687,112.5v48.23a0,0,0,0,1,0,0h-127a0,0,0,0,1,0,0V77A0,0,0,0,1,559.94,77Z"
          style={{ fill: "#808285", opacity: "0.76" }}
        />
      </svg>
    );
  }
}

export default Truck;
