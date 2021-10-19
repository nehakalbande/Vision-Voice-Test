import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavItems.css";
import "../css/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import firebase from "../config/firebase-config";
import google from "../config/auth-method";
import DropDownItem from "./dropdownitem";
import { useGlobalContext } from "../reducer/context";
import axios from "axios";
import jQuery from "jquery";

const NavItems = () => {
  const [open, setOpen] = useState(false);
  const {
    userName,
    authenticated,
    dispatch,
    isDropDownOpen,
  } = useGlobalContext();
  const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
  const _handleSignInClick = () => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then((result) => {
        console.log("Logged in!");
        result.user.getIdToken().then((idToken) => {
          console.log(idToken);
          const csrfToken = getCookie("csrftoken");
          const data = {
            token: idToken,
            csrfToken: csrfToken,
          };
          axios
            .post("http://localhost:5000/sessionLogin", data)
            .catch((err) => {
              console.log(err);
            });
        });
        const token = result.credential.accessToken;
        const {
          email,
          given_name,
          picture,
        } = result.additionalUserInfo.profile;
        dispatch({
          type: "SIGN_IN_USER",
          payload: { userName: given_name, email, profileImg: picture },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const _handleLogoutClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT_USER" });
        console.log("Logged out!");
        axios.post("http://localhost:5000/sessionLogout").catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _handleDropDownClick = () => {
    dispatch({ type: "Toggle_DropDown" });
  };

  return (
    <>
      <FontAwesomeIcon
        icon={open ? faTimes : faBars}
        className="icons"
        onClick={() => {
          setOpen(!open);
          _handleDropDownClick();
        }}
      />
      <div
        className="nav-items"
        onClick={() => {
          setOpen(!open);      
        }}
      >
        <ul className={open ? "navlist active" : "navlist mob"}>
          <li className="navlist-li">
            <Link to="/eyetest" className="navlist-item">
              VisionTest
            </Link>
          </li>
          <li className="navlist-li">
            <Link to="/auraltest" className="navlist-item">
              Aural Test
            </Link>
          </li>

          {authenticated && (
            <li className="navlist-li ">
              <Link to="/results" className="navlist-item disabled">
                Get Results
              </Link>
            </li>
          )}

          <li className="navlist-li ">
            <a href="/contact" target={"_blank"} className="navlist-item">
              Contact Us
            </a>
          </li>

          {authenticated ? (
            <div className="authorized-items">
              <li className="navlist-li">
                <a href="#" className="navlist-item-link" />
                <div className="navlist-item-user">Hi {userName}</div>
              </li>
              <li className="navlist-li">
                <div>
                  <DropDownItem>
                    <button
                      className="navlist-item btn"
                      onClick={_handleLogoutClick}
                    >
                      Logout
                    </button>
                  </DropDownItem>
                </div>
              </li>
            </div>
          ) : (
            <li className="navlist-li">
              <button className="navlist-item btn" onClick={_handleSignInClick}>
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavItems;
