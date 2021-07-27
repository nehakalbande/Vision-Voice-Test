import React, { useEffect, useState } from "react";
import "../../css/eye_test_start.css";
import Snellen from "../../assets/Snellen.png";

const EyeTestStart = () => {
    useEffect(() => {
        document.title = "Vision Test ";
    });
    const [no, setNo] = useState(null);
    const handleChangeInput = (e) => {
        const re = /^[0-9\b]+$/; //rules
        if (e.target.value === "" || re.test(e.target.value)) {
            setNo(e.target.value);
        }
    };
    useEffect(() => {
        console.log(no);
    });
    return (
        <div className='eye-cont'>
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                Lets Start the Test!!
            </h3>
            <div className='eye-img-cont'>
                <img
                    src={Snellen}
                    alt='Snellen Chart'
                    className='snellen-img'
                />
            </div>
            <p>Enter the Line No till which You are able to see.</p>
            <p>Indicated at right side.</p>
            <div className='inp-div'>
                <div className='inp-r'>
                    <label htmlFor='1'>Both Eyes Open:</label>
                    <input
                        type='text'
                        className=''
                        id='1'
                        className='input-f'
                    />
                </div>
                <div className='inp-r'>
                    <label htmlFor='2'>Right Eye Closed:</label>
                    <input
                        type='text'
                        className=''
                        id='2'
                        className='input-f'
                    />
                </div>
                <div className='inp-r'>
                    <label htmlFor='3'>Left Eye Closed:</label>
                    <input
                        type='text'
                        className=''
                        id='3'
                        className='input-f'
                    />
                </div>
                <input
                    type='button'
                    id='submit-btn'
                    value='Submit'
                    style={{ margin: "20px auto", padding: "8px" }}
                />
            </div>
        </div>
    );
};

export default EyeTestStart;
