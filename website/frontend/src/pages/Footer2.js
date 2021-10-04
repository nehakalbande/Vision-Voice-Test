import React from "react";
import "../css/footer2.css";
import logo from "../assets/blaze.png";

const links = [
  { href: "/eyetest", name: "Vision Test" },
  { href: "/", name: "Aural Test" },
  { href: "/results", name: "Get Results" },
  { href: "/contact", name: "Contact us" },
];

const Footer = () => {
  return (
    <footer>
      <div fluid style={{ backgroundColor: "#161718" }}>
        <div className="cont-div">
          <div className="foot-img-div">
            <img src={logo} alt="" className="imgg" />
          </div>
          <div className="links-div">
            <h2 style={{ color: "#8AB9F7" }}>Links:</h2>
            <ul className="f-ul">
              {links.map((l, i) => {
                return (
                  <li>
                    <a target={"_blank"} href={l.href} className="re-link">
                      {l.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className = "links-div">
            <h2 style={{ color: "#8AB9F7" }}>About</h2>
            <div className = "re-link">
              This repository is a Eye And Hearing Test Website which helps people to test their vision and hearing abilities on our website
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

