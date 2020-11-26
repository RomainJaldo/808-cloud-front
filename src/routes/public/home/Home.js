import './Home.css';
import {Button} from '@material-ui/core';
import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faUser, faFireAlt, faPowerOff, faSearch} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../imgs/808cloud-white.png';
import avatar from '../../../imgs/profilepicture.png';


function Home() {
    return (
        <div className="Home">
            <NavBar/>
            <Link to={`/login`}>Login</Link>
            <Link to={`/`}>Home</Link>
            HOME
        </div>
    );
}

function NavBar() {
    return (
        <div className="NavBar">
            <div className="navbar-logo">
                <Link to={`/`}>
                    <img className="logo" alt="logo" src={logo}/>
                </Link>
                <div>808Cloud</div>
            </div>
            <Searchbar/>
            <AddBeats/>
            <div className="ProfilePicture">
                <ProfilePicture/>
                <PopupProfile/>
            </div>
        </div>
    );
}

function Searchbar() {
    return (
        <div className="Searchbar">
            <form action="">
                <input type="text" placeholder="Rechercher.." name="search"/>
                <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
            </form>
        </div>
    );
}

function AddBeats() {
    return (
        <div className="AddBeats">
            <FontAwesomeIcon icon={faPlus}/>
        </div>
    );
}

function ProfilePicture() {
    return (
        <div className="ProfilePicture">
            <img className="avatar" alt="profilepicture" src={avatar}/>
        </div>
    );
}

function PopupProfile() {
    return (
        <div className="PopupProfile">
            <div className="myprofile"><FontAwesomeIcon icon={faUser}/><p>Mon profil</p></div>
            <div className="mybeats"><FontAwesomeIcon icon={faFireAlt}/><p>Mes beats</p></div>
            <div className="logout"><FontAwesomeIcon icon={faPowerOff}/><p>Déconnexion</p></div>
        </div>
    );
}

export default Home;
