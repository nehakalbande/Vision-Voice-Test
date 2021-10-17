import React, { useEffect } from "react";

const AuralTestResult = (props) => {
    useEffect(() => {
        document.title = "Aural Test Result";
    });
    return (
        <div className="result-page">
            <div style={{width: "70%", margin: "0 auto", lineHeight: "1.5x"}}>
                <h2 style={{textAlign: "center"}}>Report</h2>
                <div style={{marginTop: "50px"}}>
                    <h3 style={{textAlign: "justify", textAlignLast: "right"}}>Date:</h3>
                    <h3>Name:</h3>
                    <h3>Age:</h3>
                    <h3>Gender:</h3>
                    <h3>History (If any):</h3>
                    <h3>Tone Test Results:</h3>
                    <table>
                        <tr>
                            <td style={{fontWeight: "bold"}}>Ear</td>
                            <td style={{fontWeight: "bold"}}>Hearing</td>
                            <td style={{fontWeight: "bold"}}>Issue</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold"}}>Left</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold"}}>Right</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <h3>Hearing Capacity for:&nbsp;&nbsp;&nbsp;&nbsp; Left Ear:</h3>
                    
                    <h3 style={{marginLeft: "200px", lineHeight: "1"}}>
                        Right Ear:
                    </h3>
                    <h3>
                        Need to consult doctor(in case of severe/mild issues):
                    </h3>
                </div>

                <br />
                <table>
                    <caption>
                        <h3>Summary of Results</h3>
                    </caption>
                    <tr style={{fontWeight: "bold"}}>
                        <td>Age Brackets (Yr)</td>
                        <td>Average Max heard Frequency (Hz)</td>
                    </tr>
                    <tr>
                        <td>1-10</td>
                        <td>17800 Hz</td>
                    </tr>
                    <tr>
                        <td>11-20</td>
                        <td>17600 Hz</td>
                    </tr>
                    <tr>
                        <td>21-30</td>
                        <td>16200 Hz</td>
                    </tr>
                    <tr>
                        <td>31-40</td>
                        <td>15200 Hz</td>
                    </tr>
                    <tr>
                        <td>41-50</td>
                        <td>14600 Hz</td>
                    </tr>
                    <tr>
                        <td>51-60</td>
                        <td>12400 Hz</td>
                    </tr>
                    <tr>
                        <td>61-70</td>
                        <td>10600 Hz</td>
                    </tr>
                </table>
                <br />
                <h3>
                    <span style={{color: "red"}}>NOTE:</span> You are advised to
                    consult a doctor if your results do not match with the
                    standard ones shown.
                </h3>
            </div>
        </div>
    );
}

export default AuralTestResult;