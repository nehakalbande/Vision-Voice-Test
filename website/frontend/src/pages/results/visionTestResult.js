import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../config/firebase-config";
import { useGlobalContext } from "../../reducer/context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const VisionTestResult = (props) => {
    useEffect(() => {
        document.title = "Vision Test Result";
        fetchResult()
    });

    const [state, setState] = useState({ age: "", gender: "", date: "", leftNo: "", rightNo: "" });

    const { email, userName } = useGlobalContext();
    const fetchResult = async() => {
        if(email && state.gender === "") {
            const prevInstance = doc(database, "users", email);
            const docSnap = await getDoc(prevInstance);
            
            let docData = docSnap.data();

            let age = docData.age;
            let gender = docData.visionTestResults[0].Gender;
            let date = docData.visionTestResults[0].createdAt;
            let result = docData.visionTestResults[0].Result;
            let leftNo = "";
            let rightNo = "";
            
            for(let i=0;i<result.length;i++) {
                let obj = docData.visionTestResults[0].Result[i];
                if (obj.q === "Left Eye") {
                    leftNo = obj.a;
                }
                if (obj.q === "Right Eye") {
                    rightNo = obj.a;
                } 
            }
            setState({age, gender, date, leftNo, rightNo})
            print();
        }
    }
    
    const print = () => {
        html2canvas(document.querySelector("#print-result")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("l","pt","a4");
            const offset = 80;
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', -offset, 0, width + offset+20, height);
            pdf.save("visionTestResult.pdf"); 
        });
      };

    return (
        <div className="result-page" id="print-result">
            <div style={{width: "70%", margin: "0 auto", lineHeight: "1.5x"}}>
                <h2 style={{textAlign: "center"}}>Report</h2>
                <div style={{marginTop: "50px"}}>
                    <h3 style={{textAlign: "justify", textAlignLast: "right"}}>
                        Date: { state.date }
                    </h3>
                    <h3>Name: { userName }</h3>
                    <h3>Age: { state.age }</h3>
                    <h3>Gender: { state.gender }</h3>
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
                            <td>{ state.leftNo }</td>
                            <td>{ state.rightNo }</td>
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