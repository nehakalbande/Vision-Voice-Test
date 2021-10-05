import React from "react";
import "../css/Form2.css";
import { useGlobalContext } from "../reducer/context";

const eyeQ = [
  {
    ques: "Do you experience ringing in one or both ears?",
    options: [" Yes", "No"],
    name: "q1",
  },
  {
    ques: "Do your ears hurt or drain fluid? ",
    options: [" Yes", "No"],
    name: "q2",
  },
  {
    ques: " Does one of your ears hear better than the other?",
    options: ["Yes", "No"],
    name: "q3",
  },
  {
    ques: "Do you have trouble determining where sounds come from?",
    options: ["Yes", "No"],
    name: "q4",
  },
  {
    ques: "Are you able to distinguish with each ear?",
    options: ["Yes", "No"],
    name: "q5",
  },
  {
    ques: "Does it seem like people do not speak as clearly as they used to?",
    options: ["Yes", "No"],
    name: "q6",
  },
  {
    ques: "Are you frequently asking people to repeat the things they say?",
    options: ["Yes", "No"],
    name: "q7",
  },
  {
    ques: "Your gender",
    options: ["Male", "Female", " other"],
    name: "q8",
  },
  {
    ques: "Your age group",
    options: [
      " 0 - 19 years",
      " 20 - 39 years",
      " 40 - 59 years",
      " 60 - 69 years",
      " 70 or over",
    ],
    name: "q9",
  },
];

const Form2 = () => {
    const {dispatch,auralTestResult}=useGlobalContext()
 

  return (
    <div className="outer-div">
      <div className="inner-div">
        <form>
          {eyeQ.map((e, i) => {
            return (
              <div className="ques-div">
                <div className="ques">
                  <sup
                    style={{
                      color: "red",
                      fontSize: "10px",
                    }}
                  >
                    *
                  </sup>
                  {i + 1}]&nbsp;&nbsp;&nbsp;&nbsp;{e.ques}
                </div>

                <div className="ques-option">
                  {e.options.map((m) => {
                    return (
                      <label className="qlabel">
                        <input
                          checked={(auralTestResult[e.ques]===m)?true:false}
                          type="radio"
                          value={m}
                          name={e.name}
                          onChange={()=>dispatch({type:"SELECT_OPTION_IN_AURAL_TEST",payload:{question:e.ques,ans:m}})}
                          style={{
                            marginRight: "5px",
                          }}
                        />
                        {m}
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default Form2;
