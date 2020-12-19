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
import Image from "react-bootstrap/Image";

function logout() {
    localStorage.removeItem('user');
}

function NavBar() {
    return (
        <div>
            <div className="oval"/>
            <Navbar expand="lg" className="navbar-container w-100">
                <Navbar.Brand href="/" className="navbar-brand">
                    <Image fluid className="logo-pic" alt="logo" src={logo}/>
                    <h1 className="text-white brand d-sm-flex d-none">808 CLOUD</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="align-items-center">
                        <InputGroup className="d-flex align-items-center">
                            <FormControl
                                type="text"
                                placeholder="Rechercher"
                                aria-label="Rechercher"
                                aria-describedby="basic-addon2"
                                className="navbar-input rounded-pill col-10"
                            />
                            <InputGroup.Append className="inputgroup col-2 p-0">
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
                                <Image className="avatar rounded-circle z-depth-2"
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
                            <NavDropdown.Item onClick={() => logout()}>
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
