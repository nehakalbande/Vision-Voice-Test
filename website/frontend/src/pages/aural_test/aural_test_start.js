import React, { useEffect } from "react";
import "../../css/auarl_test_start.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../reducer/context";
import { database } from "../../config/firebase-config";
import { doc,updateDoc, setDoc,getDoc } from "firebase/firestore";

const Players = [
  {
    ques: "Do you find it difficult to hear people from another room ?",
    src: "https://www.bayaudio.com.au/wp-content/themes/bayaudio-2016/hearing-test/audios/step-5.mp3",
    op1: "YES",
    op2: "NO",
  },
  {
    ques: "Do you find it tricky to follow conversation in presence of background noise like in restaurant or in streets ?",
    src: "https://www.bayaudio.com.au/wp-content/themes/bayaudio-2016/hearing-test/audios/step-3.mp3",
    op1: "YES",
    op2: "NO",
  },
  {
    ques: "Do people complain that you have the TV or radio too loud ?",
    src: "https://www.bayaudio.com.au/wp-content/themes/bayaudio-2016/hearing-test/audios/step-4.mp3",
    op1: "YES",
    op2: "NO",
  },
  {
    ques: "Are you able to hear this mild tone ?",
    src: "https://www.mediacollege.com/audio/tone/files/100Hz_44100Hz_16bit_05sec.mp3",
    op1: "YES",
    op2: "NO",
  },
  {
    ques: "Was this tone clearly audible to you ?",
    src: "https://www.mediacollege.com/audio/tone/files/440Hz_44100Hz_16bit_05sec.mp3",
    op1: "YES",
    op2: "NO",
  },
  {
    ques: "Was that too harsh for you or normal tone ?",
    src: "https://www.mediacollege.com/audio/tone/files/10kHz_44100Hz_16bit_05sec.mp3",
    op1: "YES",
    op2: "NO",
  },
];

const AuralTestStart = () => {
  
  const history = useHistory();
  useEffect(() => {
    document.title = "Aural Test ";
  });
  const { email,dispatch,auralTestResult,visionTestResult } = useGlobalContext();
  const uploadAuralTestResult = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("You need to login first");
      return;
    }
    try {
      const prevInstance = doc(database, "users", email);
      const docSnap = await getDoc(prevInstance);
      const Result=[{q:"Do people complain that you have the TV or radio too loud ?",a:auralTestResult["Do people complain that you have the TV or radio too loud ?"]},{q:"Was this tone clearly audible to you ?",a:auralTestResult["Was this tone clearly audible to you ?"]}];
      const newAuralTestResult={Result,Gender:auralTestResult["Your gender"]||"Unknown",createdAt:new Date()};
      if (docSnap.exists()) {
        const {auralTestResults : prevAuralTestResults}=docSnap.data();
        await updateDoc(prevInstance, {
          auralTestResults:[newAuralTestResult,...prevAuralTestResults]
        });
      } 
      else {
       await setDoc(doc(database, "users", email), {
          email:email,
          age:auralTestResult["Your age group"]||"unknown",
          auralTestResults:[newAuralTestResult],
          visionTestResults:[]
        });
      }
       history.push("/results");
    } catch (error) {
      console.log(error);
      alert("some error occured");
    }
  };
  return (
    <div className="container">
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        Lets Start the Test!!
      </h3>
      {Players.map((a, i) => (
        <div className="auralll">
          <figure>
            <FontAwesomeIcon icon={faMusic} className="icon-icon1" />
            <audio controls src={a.src} className="audioo"></audio>
          </figure>
          <p className="quesques">{a.ques}</p>
          <p>
            <input checked={(auralTestResult[a.ques]===a.op1)?true:false} type="radio" onChange={()=>dispatch({type:"SELECT_OPTION_IN_AURAL_TEST",payload:{question:a.ques,ans:a.op1}})} className="radioo" name={`option${i}`}/> {a.op1}
          </p>
          <p>
            <input checked={(auralTestResult[a.ques]===a.op2)?true:false} type="radio" onChange={()=>dispatch({type:"SELECT_OPTION_IN_AURAL_TEST",payload:{question:a.ques,ans:a.op2}})} className="radioo" name={`option${i}`}/> {a.op2}
          </p>
        </div>
      ))}
      <input
        type="button"
        id="submit-btn"
        value="Submit"
        style={{ margin: "20px 440px", padding: "8px" }}
        onClick={uploadAuralTestResult}
      />
    </div>
  );
};

export default AuralTestStart;
