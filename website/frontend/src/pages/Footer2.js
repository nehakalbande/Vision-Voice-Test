import React from "react";
import "../css/footer2.css";
import logo from "../assets/blaze.png";

const links = [
  { href: "/eyetest", name: "Vision Test" },
  { href: "/", name: "Aural Test" },
  { href: "/results", name: "Get Results" },
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
