import React from "react";
import "../css/InfoCard.css";
import { Jumbotron, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faBookOpen,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

const InfoCard = () => {
  return (
    <Jumbotron style={{ backgroundColor: "#FFFFFF" }} className="jumbo">
      <Container className="container">
        <h3 style={{ textAlign: "center" }} className="h33">
          Why Vision-Voice??
        </h3>

        <div className="roww">
          <div className="columnn">
            <div class="wrapper1">
              <div className="cardd1">
                <div class="card-info1">
                  <FontAwesomeIcon
                    icon={faAngleDoubleUp}
                    className="icon-icon"
                  />
                  <h3 style={{ textAlign: "center" }}>Mission</h3>
                  <p>
                    Our Mission is to reach the people all around the globe so
                    that they can have ear and eye test together At their home
                    especially during such pandemic situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columnn">
            <div className="wrapper1">
              <div className="cardd1">
                <div className="card-info1">
                  <FontAwesomeIcon icon={faBookOpen} className="icon-icon" />
                  <h3 style={{ textAlign: "center" }}>Value</h3>
                  <p>
                    We believe that helping each other is the only way. We take
                    care and always look to get the best out of everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columnn">
            <div className="wrapper1">
              <div className="cardd1">
                <div className="card-info1">
                  <FontAwesomeIcon icon={faIdBadge} className="icon-icon" />
                  <h3 style={{ textAlign: "center" }}>Vision</h3>
                  <p>
                    Our Vision is to ensure world with high quality eye and ear
                    health and care accessible to all people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default InfoCard;
