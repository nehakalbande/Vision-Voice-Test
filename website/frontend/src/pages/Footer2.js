import React from "react";
import "../css/footer2.css";
import logo from "../assets/blaze.png";
import { Link } from "react-router-dom";
const links = [
  { href: "/eyetest", name: "Vision Test",id:1 },
  { href: "/", name: "Aural Test",id:2 },
  { href: "/results", name: "Get Results",id:3 },
];

const Footer = () => {
  return (
    <footer>
      <div fluid="true" style={{ backgroundColor: "#161718" }}>
        <div className="cont-div">
          <div className="foot-img-div">
            <img src={logo} alt="" className="imgg" />
          </div>
          <div className="links-div">
            <h2 style={{ color: "#8AB9F7",textAlign: "center" }}>About</h2>
            <div
              style={{
                color: "#fff",
                lineHeight: "1.5",
                fontSize: "1.08rem",
                marginTop: "5px",
                textAlign: "center"
              }}
            >
              This repository is a Eye And Hearing Test Website which helps
              people to test their vision and hearing abilities on our website
            </div>
          </div>
          <div className="links-div">
            <h2 style={{ color: "#8AB9F7" ,marginLeft:"80px"}}>Links:</h2>
            <ul className="f-ul" style={{ display: "flex" }}>
              <div style={{ margin:"0 20px 0 0",padding:"2px"}}>
                <li>
                  <a target={"_blank"} href={links[0].href} className="re-link">
                    {links[0].name}
                  </a>
                </li>
                <li>
                  <a target={"_blank"} href={links[1].href} className="re-link">
                    {links[1].name}
                  </a>
                </li>
              </div>
              <div style={{ margin:"0 0 0 20px",padding:"2px"}}>
                <li>
                  <a target={"_blank"} href={links[2].href} className="re-link">
                    {links[2].name}
                  </a>
                </li>
                <li>
                  <a target={"_blank"} href={links[3].href} className="re-link">
                    {links[3].name}
                  </a>
                </li>
              </div>
              );
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
