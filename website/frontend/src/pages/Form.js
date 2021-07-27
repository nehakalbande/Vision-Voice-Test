import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Form.css";

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
    },
    {
        ques: "Are you diabetic?",
        options: ["yes", "no"],
        name: "q3",
    },
    {
        ques: "Are you registered as visually impaired?",
        options: ["yes", "no"],
        name: "q4",
    },
    {
        ques: "Are you able to distinguish with each eye?",
        options: ["yes", "no"],
        name: "q5",
    },
    {
        ques:
            "Can you readily distinguish the pigmentary colours, red and green?",
        options: ["yes", "no"],
        name: "q6",
    },
    {
        ques: "Do you suffer from night blindness?",
        options: ["yes", "no"],
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

const Form = () => {
    const [opt, setOpt] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
    });
    const handlechanges = (e) => {
        console.log(e);
        console.log(e.target.name);
        console.log(e.target.value);
        setOpt({
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <div className='outer-div'>
                <div className='inner-div'>
                    <form>
                        {eyeQ.map((e, i) => {
                            return (
                                <div className='ques-div'>
                                    <div className='ques'>
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

                                    <div className='ques-option'>
                                        {e.options.map((m) => {
                                            return (
                                                <label className='qlabel'>
                                                    <input
                                                        type='radio'
                                                        value={m}
                                                        name={e.name}
                                                        onChange={(c) => {
                                                            handlechanges(c);
                                                        }}
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
            <div className='start-btn-div'>
                <Link to='/eyetest/vision-test-start' className='red-link'>
                    <div className='start-btn'>Next Test</div>
                </Link>
            </div>
        </>
    );
};

export default Form;
