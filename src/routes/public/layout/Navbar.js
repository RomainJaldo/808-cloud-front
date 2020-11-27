import './Navbar.css';
import React from "react";
import logo from "../../../assets/img/808cloud-white.png";
import avatar from "../../../assets/img/profilepicture.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFireAlt, faPlus, faPowerOff, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar() {
    return (
        <Navbar expand="lg" className="navbar-container w-100">
            <Navbar.Brand href="/">
                <img className="logo-pic" alt="logo" src={logo}/>
                <h2 className="text-white">808 CLOUD</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="">
                    <InputGroup className="d-flex align-items-center">
                        <FormControl
                            placeholder="Rechercher"
                            aria-label="Rechercher"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button type="submit" className="btn-circle small"><FontAwesomeIcon icon={faSearch}/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                    {/*<Form inline>*/}
                    {/*    <FormControl type="text" placeholder="Rechercher" className="mr-sm-2"/>*/}
                    {/*    <Button type="submit" className="btn-circle"><FontAwesomeIcon icon={faSearch}/></Button>*/}
                    {/*</Form>*/}
                    <Nav.Link href="/upload" className="d-flex align-items-center">
                        <Button className="btn-circle btn-circle-xl bg-dark border-0" type="button">
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                    </Nav.Link>

                    <NavDropdown title={
                        <div className="pull-left d-flex align-items-center">
                            <img className="avatar rounded-circle z-depth-2"
                                 src={avatar}
                                 alt="user pic"
                            />
                        </div>
                    } id="basic-nav-dropdown">

                        <NavDropdown.Item href="#/action-1">
                            <FontAwesomeIcon icon={faUser}/><span>Mon profil</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#/action-2">
                            <FontAwesomeIcon icon={faFireAlt}/><span>Mes beats</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#/action-3">
                            <FontAwesomeIcon icon={faPowerOff}/><span>Déconnexion</span>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
