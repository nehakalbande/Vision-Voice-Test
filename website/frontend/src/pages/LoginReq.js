import React from "react";
import { Link } from "react-router-dom";

const LoginReq = () => {
    return (
        <div className='out-res'>
            <h1 style={{ marginTop: "50px" }}>
                Please Login to view this Page!!!
            </h1>
            <div className='redirect-btn abn'>
                <Link to='/login' className='res-link'>
                    Go to Login
                </Link>
            </div>
        </div>
    );
};

export default LoginReq;
