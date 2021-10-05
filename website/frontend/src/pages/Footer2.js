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
            <h2 style={{ color: "#8AB9F7" }}>Links:</h2>
            <ul className="f-ul">
              {links.map((l) => {
                return (
                  <li key={l.id}>
                    <Link target="__blank" to={l.href} className="re-link">
                      {l.name}
                    </Link>
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
