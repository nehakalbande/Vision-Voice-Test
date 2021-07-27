import React, { useEffect } from "react";
import "../../css/eyesurvey.css";
import Form from "../Form";

const EyeSurvey = () => {
    useEffect(() => {
        document.title = "Vision Test ";
    });
    return (
        <div className='Survey-container'>
            <div className='survey-info'></div>
            <form>
                <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                    Lets Start the Survey!!
                </h3>
                <Form />
            </form>
        </div>
    );
};

export default EyeSurvey;
