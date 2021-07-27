import React from "react";
import "../css/Navbar.css";
import NavItems from "./NavItems";
import logo from "../assets/blaze.png";

const Navbar = (props) => {
    return (
        <div className='nav-container'>
            <div className='main-nav'>
                <div className='logo'>
                    <a href='/'>
                        <img src={logo} alt='Blaze' className='logo-img' />
                    </a>
                </div>
                <NavItems authenticated={props.authenticated} handleNotAuthenticated={props._handleNotAuthenticated} />
            </div>
        </div>
    );
};

export default Navbar;
