import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../css/scrolltotop.css";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  });
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className="goTop">
      <div
        className={!visible ? "circle inact" : "circle"}
        style={{ color: "#8AB9F7" }}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="followw-iconn"
          alt="go Top"
          onClick={scrollTop}
        />
      </div>
    </div>
  );
};
export default ScrollToTop;
