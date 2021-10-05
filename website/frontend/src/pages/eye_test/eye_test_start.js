import React, { useEffect } from "react";
import "../../css/eye_test_start.css";
import Snellen from "../../assets/Snellen.png";
import { useHistory } from "react-router-dom";
import { database } from "../../config/firebase-config";
import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { useGlobalContext } from "../../reducer/context";

const EyeTestStart = () => {
  const history = useHistory();
  const { dispatch, visionTestResult, email } = useGlobalContext();
  useEffect(() => {
    document.title = "Vision Test ";
  });
  const uploadVisionTestResult = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("You need to login first");
      return;
    }
    try {
      const prevInstance = doc(database, "users", email);
      const docSnap = await getDoc(prevInstance);
      const Result = [
        { q: "Left Eye", a: visionTestResult["Left Eye Closed:"] },
        { q: "Right Eye", a: visionTestResult["Right Eye Closed:"] },
      ];
      const newVisionTestResult = {
        Result,
        Gender: visionTestResult["Your gender"] || "Unknown",
        createdAt: new Date().toString(),
      };

      if (docSnap.exists()) {
        const { visionTestResults: prevVisionTestResults } = docSnap.data();
        await updateDoc(prevInstance, {
          visionTestResults: [newVisionTestResult, ...prevVisionTestResults],
        });
      } else {
        await setDoc(doc(database, "users", email), {
          email: email,
          age: visionTestResult["Your age group"] || "unknown",
          auralTestResults: [],
          visionTestResults: [newVisionTestResult],
        });
      }
      dispatch({ type: "CLEAR_CURRENT_TESTS_DATA" });
      history.push("/results");
    } catch (error) {
      console.log(error);
      alert("some error occured");
    }
  };

  return (
    <div className="eye-cont">
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        Lets Start the Test!!
      </h3>
      <div className="eye-img-cont">
        <img src={Snellen} alt="Snellen Chart" className="snellen-img" />
      </div>
      <p>Enter the Line No till which You are able to see.</p>
      <p>Indicated at right side.</p>
      <div className="inp-div">
        <div className="inp-r">
          <label htmlFor="1">Both Eyes Open:</label>
          <input
            type="text"
            className=""
            id="1"
            className="input-f"
            value={visionTestResult["Both Eyes Open:"] || ""}
            onChange={(e) =>
              dispatch({
                type: "SELECT_OPTION_IN_VISION_TEST",
                payload: { question: "Both Eyes Open:", ans: e.target.value },
              })
            }
          />
        </div>
        <div className="inp-r">
          <label htmlFor="2">Right Eye Closed:</label>
          <input
            type="text"
            className=""
            id="2"
            className="input-f"
            value={visionTestResult["Right Eye Closed:"] || ""}
            onChange={(e) =>
              dispatch({
                type: "SELECT_OPTION_IN_VISION_TEST",
                payload: { question: "Right Eye Closed:", ans: e.target.value },
              })
            }
          />
        </div>
        <div className="inp-r">
          <label htmlFor="3">Left Eye Closed:</label>
          <input
            type="text"
            className=""
            id="3"
            className="input-f"
            value={visionTestResult["Left Eye Closed:"] || ""}
            onChange={(e) =>
              dispatch({
                type: "SELECT_OPTION_IN_VISION_TEST",
                payload: { question: "Left Eye Closed:", ans: e.target.value },
              })
            }
          />
        </div>
        <input
          type="button"
          id="submit-btn"
          value="Submit"
          style={{ margin: "20px auto", padding: "8px" }}
          onClick={uploadVisionTestResult}
        />
      </div>
    </div>
  );
};

export default EyeTestStart;
