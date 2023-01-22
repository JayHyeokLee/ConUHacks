import React from 'react'
import { Link } from "react-router-dom";
import './LogIn.css';

const LogIn = () => {
    return (
        <div className="header">
            <Link style={{ marginRight: '8px' }} to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
        </div>
    )
}

export default LogIn