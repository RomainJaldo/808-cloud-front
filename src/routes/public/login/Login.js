import React from "react";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <Link to={`/`}>Home</Link>
            <p>Login</p>
        </div>
    );
}

export default Login;
