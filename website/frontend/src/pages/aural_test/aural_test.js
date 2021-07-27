import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/aural_test.css";

const AuralTest = (props) => {
    useEffect(() => {
        document.title = "Aural Test ";
    });
    return (
        <div className='instt-cont'>
            <h2 style={{ textAlign: "center" }}> Instructions</h2>
            <h4 style={{ textAlign: "center" }}>
                We will be taking the test in 3 parts:
            </h4>
            <p>
                {" "}
                <li>
                    In the first part of the test, we will ask you a number of
                    questions about your ability to hear in challenging
                    listening situations
                </li>
                <li>
                    {" "}
                    The second part of the test determines how well you can hear
                    at different frequency levels.
                </li>
                <li>
                    {" "}
                    You will hear a number of tones at different pitches and are
                    asked to adjust the volume until you can hear the sound
                    After that, you will be presented with your hearing test
                    result .
                </li>
            </p>
            <h4 style={{ textAlign: "center" }}>
                Some guidelines for the test:
            </h4>
            <p>
                <li>
                    Make sure you are in a quiet area before you start the
                    hearing test
                </li>
                <li>
                    {" "}
                    Use Headphones instead of built-in speakers(to ensure better
                    results) and set your device volume to 50%.
                </li>
            </p>
            <br />
            <h4 style={{ textAlign: "center" }}>
                {" "}
                Please select the type of audio output you are using
            </h4>
            <div className='row'>
                <div className='redirect-btn btn-btn'>
                    {" "}
                    <Link to='/auraltest/aural-survey' className='red-link'>
                        I AM USING HEADPHONES
                    </Link>
                </div>
                <div className='redirect-btn btn-btn'>
                    <Link to='/auraltest/aural-survey' className='red-link'>
                        I AM USING SPEAKERS
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AuralTest;
