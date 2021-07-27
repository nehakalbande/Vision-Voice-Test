import React, { useEffect, setState } from "react";
import { Link } from "react-router-dom";
import "../../css/eyetest.css";

class EyeTest extends React.Component {
  render() {
    return (
      <div className="inst-cont">
        <h2 style={{ textAlign: "center" }}>Instructions</h2>
        <h4 style={{ textAlign: "center" }}>
          We will be taking the test in 3 parts:
        </h4>
        <p>
          <li>
            In the first part of the test, we will ask you a number of questions
            regarding how good your vision is.
          </li>
          <li>
            {" "}
            The second part of the test determines how well and upto which line
            you can read the letters given in Snellen chart.{" "}
          </li>
          <li>
            {" "}
            After that, you will be presented with your vision test result .
          </li>
        </p>
        <h4 style={{ textAlign: "center" }}>
          Some guidelines for the test:
        </h4>{" "}
        <p>
          <li>Place yourself 1.5 meter from the screen.</li>
          <li>
            If you have glasses for distance vision or glasses with progressive
            lenses, keep them on.
          </li>
          <li>
            {" "}
            Without pressing on the eyelid, cover your left/right eye with your
            hand.
          </li>
        </p>
        <div className="start-btn-div">
          <Link to="/eyetest/vision-survey" className="red-link">
            <div className="start-btn redirect-btn">Start Vision Test</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default EyeTest;
