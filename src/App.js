import './App.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from "./routes/public/home/Home";
import Login from "./routes/public/login/Login";
import Register from "./routes/public/register/Register";
import MyBeats from "./routes/public/my-beats/MyBeats";
import Upload from "./routes/public/upload/Upload";
import Profile from "./routes/public/profile/Profile";

function App() {
    //Si connecté loggedIn = true et renvoie vers l'accueil sinon affiche le login
    let loggedIn = true;
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={"/"}>
                        {loggedIn ? <Home /> : <Redirect exact to="/login" />}
                    </Route>
                    <Route exact path={"/login"} component={() => <Login/>}/>
                    <Route exact path={"/register"} component={() => <Register/>}/>
                    <Route exact path={"/mybeats"} component={() => <MyBeats/>}/>
                    <Route exact path={"/upload"} component={() => <Upload/>}/>
                    <Route exact path={"/profile"} component={() => <Profile/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
