import React from 'react'
import { Link } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="header">
            <Link style={{ marginRight: '8px' }} to="/LogIn">Log in</Link>
            <Link to="/signup">Sign up</Link>
        </div>
    )
}

export default SignUp
