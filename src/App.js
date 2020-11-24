import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from "axios";
import {Button} from '@material-ui/core';
import Home from "./routes/public/home/Home";
import Login from "./routes/public/login/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={"/"} component={() => <Home/>}/>
                    <Route exact path={"/login"} component={() => <Login/>}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
