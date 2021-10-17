import React, { useEffect } from "react";

const VisionTestResult = (props) => {
    useEffect(() => {
        document.title = "Vision Test Result";
    });
    return (
        <div className="result-page">
            <div style={{width: "70%", margin: "0 auto", lineHeight: "1.5x"}}>
                <h2 style={{textAlign: "center"}}>Report</h2>
                <div style={{marginTop: "50px"}}>
                    <h3 style={{textAlign: "justify", textAlignLast: "right"}}>
                        Date:
                    </h3>
                    <h3>Name:</h3>
                    <h3>Age:</h3>
                    <h3>Gender:</h3>
                    <h3>History (If diabetic or visually impared):</h3>
                    <hr />
                    <h3>Visual acuity (VA):</h3>
                    <table>
                        <tr>
                            <td></td>
                            <td>For Left Eye</td>
                            <td>For Right Eye</td>
                        </tr>
                        <tr>
                            <td>Line till which able to see</td>
                            <td>Line no</td>
                            <td>Line no</td>
                        </tr>
                        <tr>
                            <td>Eye Sight</td>
                            <td>For Left Eye</td>
                            <td>For Right Eye</td>
                        </tr>
                    </table>
                    <h3>Treatment Recommended:</h3>
                    <h3>Need to see doctor(in case of seious issues):</h3>
                </div>
                <div>
                    <h3><sup>*</sup>Ideal Results of reading Snellen chart</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Age group</td>
                                <td>Line able to read</td>
                            </tr>
                            <tr>
                                <td>3-4 yrs</td>
                                <td>20/40 line</td>
                            </tr>
                            <tr>
                                <td>5-10 yrs</td>
                                <td>20/30 line</td>
                            </tr>
                            <tr>
                                <td>Older children and adults</td>
                                <td>Majority of letters on 20/20 line</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>
                        <span style={{color: "red"}}>NOTE:</span> You are advised to
                        consult a doctor if your results do not match with the
                        standard ones shown.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default VisionTestResult;