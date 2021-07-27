import React from "react";
import "../css/footer.css";
import logo from "../assets/blaze.png";

const Footer = () => {
    return (
        <footer>
            <div fluid style={{ backgroundColor: "#161718" }}>
                <div className='container-fluid'>
                    <div className='container'>
                        <div className='roww'>
                            <div className='coll'>
                                <img src={logo} alt='' className='imgg' />
                            </div>
                            <div className='coll'>
                                <h2> Links:</h2>
                                <ul>
                                    <li>
                                        <a
                                            href='/eyetest'
                                            style={{ color: "white" }}
                                        >
                                            Vision Test
                                        </a>
                                    </li>
                                    <li>
                                        <a href='' style={{ color: "white" }}>
                                            Aural Test
                                        </a>
                                    </li>
                                    <li>
                                        <a href='' style={{ color: "white" }}>
                                            How To Use
                                        </a>
                                    </li>
                                    <li>
                                        <a href='' style={{ color: "white" }}>
                                            GetDocument
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
