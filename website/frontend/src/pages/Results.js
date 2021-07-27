import React, { useEffect } from "react";
import "../css/results.css";

const Results = () => {
    useEffect(() => {
        document.title = "Vision Voice-Results ";
    });
    return (
        <div className='out-res'>
            <h2>Get Your Results</h2>
            <div className='in-res'>
                <div className='redirect-btn abn'>
                    <a href='vision-test/pdf' className='res-link'>
                        Vision Test Result
                    </a>
                </div>
                <div className='redirect-btn abn'>
                    <a href='aural-test/pdf' className='res-link'>
                        Aural Test Result
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Results;
