import './Home.css';
import { Button } from '@material-ui/core';
import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="Home">
        <Link to={`/login`}>Login</Link>
        <p>Home</p>
    </div>
  );
}

export default Home;
