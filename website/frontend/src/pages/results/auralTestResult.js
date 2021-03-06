import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../config/firebase-config";
import { useGlobalContext } from "../../reducer/context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const AuralTestResult = (props) => {
    useEffect(() => {
        document.title = "Aural Test Result";
        fetchResult()
    });

    const [state, setState] = useState({ age: "", gender: "", date: "", leftNo: "", rightNo: "" });

    const { email, userName } = useGlobalContext();

    const fetchResult = async() => {
        if(email && state.gender === "") {
            const prevInstance = doc(database, "users", email);
            const docSnap = await getDoc(prevInstance);
            
            let docData = docSnap.data();
            console.log(docData);
            let age = docData.age;
            let gender = docData.auralTestResults[0].Gender;
            let date = docData.auralTestResults[0].createdAt;
            let result = docData.auralTestResults[0].Result;
            let leftNo = "";
            let rightNo = "";
            
            for(let i=0;i<result.length;i++) {
                let obj = docData.auralTestResults[0].Result[i];
                if (obj.q === "Do people complain that you have the TV or radio too loud ?") {
                    leftNo = obj.a;
                }
                if (obj.q === "Was this tone clearly audible to you ?") {
                    rightNo = obj.a;
                } 
            }
            setState({age, gender, date, leftNo, rightNo})
            print()
        }
    }

    const print = () => {
        html2canvas(document.querySelector("#aural-doc")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("l","pt","a4");
            const offset = 80;
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', -offset, 0, width + offset+20, height);
            pdf.save("auralTestResult.pdf"); 
        });
      };

    return (
        <div className="result-page" id="aural-doc">
            <div style={{width: "70%", margin: "0 auto", lineHeight: "1.5x"}}>
                <h2 style={{textAlign: "center"}}>Report</h2>
                <div style={{marginTop: "50px"}}>
                    <h3 style={{textAlign: "justify", textAlignLast: "right"}}>Date: { state.date }</h3>
                    <h3>Name: { userName }</h3>
                    <h3>Age: { state.age } </h3>
                    <h3>Gender: { state.gender }</h3>
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