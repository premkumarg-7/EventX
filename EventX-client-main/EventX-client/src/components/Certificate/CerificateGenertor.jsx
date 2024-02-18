import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./style.css";
import Certificate from "./image.png";

class CertificateGenerator extends Component {
  
  certificateWrapper = React.createRef();
  state = {
    Name: "",
    College:"",
    Event:" "
  };
  render() {
    return (
      <div className="AppCertify">
        <div className="Meta">
          <h1>Get Your Certificate </h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />

            <p>Please enter your college.</p>
          <input
            type="text"
            placeholder="Enter your College..."
            value={this.state.College}
            onChange={(e) => {
              this.setState({ College: e.target.value });
            }}
          />

<p>Please enter the event name.</p>
          <input
            type="text"
            placeholder="Enter your Event name..."
            value={this.state.Event}
            onChange={(e) => {
              this.setState({ Event: e.target.value });
            }}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>

          <div id="certificateWrapper">
            <p className="SetName">{this.state.Name}</p>
            <p className="SetCollege">{this.state.College}</p>
            <p className="SetEvent">{this.state.Event}</p>
            <img src={Certificate} alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default CertificateGenerator;
