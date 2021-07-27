import React from "react";
import { Link } from "react-router-dom";
import "../css/MyCard.css";

const MyCard = (props) => {
  const { src, name, to, alt, context, isReverse } = props;
  return (
    <div
      className={
        isReverse === "false" ? "cardd-container true" : "cardd-container false"
      }
    >
      <div className="img-container">
        <img src={src} alt={alt} />
      </div>
      <div className="info-cont">
        <p>
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"} {context}
        </p>
        <div className="redirect-btn-div">
          {" "}
          <Link to={to} className="redirect-btn">
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
