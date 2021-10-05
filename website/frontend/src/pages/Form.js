import React from "react";
import { Link } from "react-router-dom";
import "../css/Form.css";
import { useGlobalContext } from "../reducer/context";
const eyeQ = [
  {
    ques: "When was your last eyesight test?",
    options: [
      " year ago or less",
      "years ago or less",
      "More than 3 years ago",
      "I've never had an eyesight test",
    ],
    name: "q1",
    id:1
  },
  {
    ques: "How often should you have your eysight tested?",
    options: [
      "Every year",
      "Every 2 years",
      " Every 3 years",
      " Only if I notice any problem in my eyes",
    ],
    name: "q2",
    id:2
  },
  {
    ques: "Are you diabetic?",
    options: ["yes", "no"],
    name: "q3",
    id:3
  },
  {
    ques: "Are you registered as visually impaired?",
    options: ["yes", "no"],
    name: "q4",
    id:4
  },
  {
    ques: "Are you able to distinguish with each eye?",
    options: ["yes", "no"],
    name: "q5",
    id:5
  },
  {
    ques: "Can you readily distinguish the pigmentary colours, red and green?",
    options: ["yes", "no"],
    name: "q6",
    id:6
  },
  {
    ques: "Do you suffer from night blindness?",
    options: ["yes", "no"],
    name: "q7",
    id:7
  },
  {
    ques: "Your gender",
    options: ["Male", "Female", " other"],
    name: "q8",
    id:8
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
    id:9
  },
];

const Form = () => {
  const { dispatch,visionTestResult } = useGlobalContext();
  return (
    <>
      <div className="outer-div">
        <div className="inner-div">
          <form>
            {eyeQ.map((e, i) => {
              return (
                <div className="ques-div" key={e.id}>
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
                            type="radio"
                            value={m}
                            checked={(visionTestResult[e.ques]===m)?true:false}
                            name={e.name}
                            onChange={()=>dispatch({type:"SELECT_OPTION_IN_VISION_TEST",payload:{question:e.ques,ans:m}})}
                            style={{
                              marginRight: "5px",
                            }}
                            required
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
      <div className="start-btn-div1">
        <Link to="/eyetest/vision-test-start" className="red-link">
          <div className="start-btn">Next Test</div>
        </Link>
      </div>
    </>
  )};

export default Form;
