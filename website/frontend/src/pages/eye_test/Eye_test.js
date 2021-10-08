import React, { useEffect, setState } from "react";
import { Link } from "react-router-dom";
import "../../css/eyetest.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
 

class EyeTest extends React.Component {
  render() {
    return (
      <div className="inst-cont">
        <div className="carus2">
            <Carousel showArrows={false}infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}>
          
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"  />
                   
                </div>
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1539036776273-021ec1d78bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  />
                   
                </div>
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1517948430535-1e2469d314fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                    
                </div>
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1546914782-96b636ea44e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                    
                </div>
              
            </Carousel>
        </div>



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
