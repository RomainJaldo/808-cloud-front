import './App.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/public/home/Home";
import Login from "./routes/public/login/Login";
import Register from "./routes/public/register/Register";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={"/"} component={() => <Home/>}/>
                    <Route exact path={"/login"} component={() => <Login/>}/>
                    <Route exact path={"/register"} component={() => <Register/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
