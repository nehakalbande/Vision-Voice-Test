import React, { Component, useEffect } from "react";
import "../../css/auarl_test_start.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Players = [
    {
        ques: "Do you find it difficult to hear people from another room ?",
        src:
            "https://www.bayaudio.com.au/wp-content/themes/bayaudio-2016/hearing-test/audios/step-5.mp3",
        op1: "YES",
        op2: "NO",
    },
    {
        ques:
            "Do you find it tricky to follow conversation in presence of background noise like in restaurant or in streets ?",
        src:
            "https://www.bayaudio.com.au/wp-content/themes/bayaudio-2016/hearing-test/audios/step-3.mp3",
        op1: "YES",
        op2: "NO",
    },
    {
        ques: "Do people complain that you have the TV or radio too loud ?",
        src:
            "https://www.bayaudio.com.au/wp-content/themes/bayaudio-2016/hearing-test/audios/step-4.mp3",
        op1: "YES",
        op2: "NO",
    },
    {
        ques: "Are you able to hear this mild tone ?",
        src:
            "https://www.mediacollege.com/audio/tone/files/100Hz_44100Hz_16bit_05sec.mp3",
        op1: "YES",
        op2: "NO",
    },
    {
        ques: "Was this tone clearly audible to you ?",
        src:
            "https://www.mediacollege.com/audio/tone/files/440Hz_44100Hz_16bit_05sec.mp3",
        op1: "YES",
        op2: "NO",
    },
    {
        ques: "Was that too harsh for you or normal tone ?",
        src:
            "https://www.mediacollege.com/audio/tone/files/10kHz_44100Hz_16bit_05sec.mp3",
        op1: "YES",
        op2: "NO",
    },
];

const AuralTestStart = () => {
    useEffect(() => {
        document.title = "Aural Test ";
    });
    return (
        <div class='container'>
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                Lets Start the Test!!
            </h3>
            {Players.map((a, i) => (
                <div className='auralll'>
                    <figure>
                        <FontAwesomeIcon
                            icon={faMusic}
                            className='icon-icon1'
                        />
                        <audio controls src={a.src} className='audioo'></audio>
                    </figure>
                    <p className='quesques'>{a.ques}</p>
                    <p>
                        <input type='radio' className='radioo' /> {a.op1}
                    </p>
                    <p>
                        <input type='radio' className='radioo' /> {a.op2}
                    </p>
                </div>
            ))}
            <input
                type='button'
                id='submit-btn'
                value='Submit'
                style={{ margin: "20px 440px", padding: "8px" }}
            />
        </div>
    );
};

export default AuralTestStart;
