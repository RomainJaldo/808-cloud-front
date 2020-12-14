import './Navbar.css';
import React from "react";
import logo from "../../../assets/img/808cloud-white.png";
import avatar from "../../../assets/img/profilepicture.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFireAlt, faPlus, faPowerOff, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar() {
    return (
        <div>
            <div className="oval"/>
            <Navbar expand="lg" className="navbar-container w-100">
                <Navbar.Brand href="/" className="navbar-brand">
                    <img className="logo-pic" alt="logo" src={logo}/>
                    <h2 className="text-white brand">808 CLOUD</h2>
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="">
                        <InputGroup className="d-flex align-items-center">
                            <FormControl
                                placeholder="Rechercher"
                                aria-label="Rechercher"
                                aria-describedby="basic-addon2"
                                className="navbar-input"
                            />
                            <InputGroup.Append className="inputgroup">
                                <Button type="submit"
                                        className="btn-circle small button-submit shadow-none"><FontAwesomeIcon
                                    icon={faSearch}/></Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Nav.Link href="/upload" className="d-flex align-items-center link-button">
                            <Button className="btn-circle btn-circle-xl border-0 button-upload" type="button">
                                <FontAwesomeIcon icon={faPlus}/>
                            </Button>
                        </Nav.Link>

                        <NavDropdown id="basic-nav-dropdown" alignRight title={
                            <div className="pull-left d-flex align-items-center">
                                <img className="avatar rounded-circle z-depth-2"
                                     src={avatar}
                                     alt="user pic"
                                />
                            </div>
                        }>

                            <NavDropdown.Item href="/profile">
                                <FontAwesomeIcon icon={faUser}/><span className="actions">Mon profil</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/mybeats">
                                <FontAwesomeIcon icon={faFireAlt}/><span className="actions">Mes beats</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/action-3">
                                <FontAwesomeIcon icon={faPowerOff}/><span className="actions">Déconnexion</span>
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
