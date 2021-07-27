import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Form2 from "../Form2";

const AuralSurvey = () => {
    useEffect(() => {
        document.title = "Aural Test ";
    });
    return (
        <div className='Survey-container'>
            <div className='survey-info'></div>
            <form>
                <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                    Lets Start the Survey!!
                </h3>
                <Form2 />
                <div className='start-btn-div'>
                    <Link to='/auraltest/aural_test_start' className='red-link'>
                        <div className='start-btn'>Next Test</div>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AuralSurvey;
