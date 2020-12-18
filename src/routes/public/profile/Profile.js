import React from "react";
import './Profile.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link} from "react-router-dom";
import NavBar from "../layout/Navbar";

function Profile() {
    return (
        <main>
            <Container>
                <Row noGutters className="">
                    <Col><NavBar/></Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="loginCard">
                            <Card.Body>
                                <Card.Title className="cardTitle">Mon profil</Card.Title>

                                <Form>
                                    <Form.Group controlId="emailInput">
                                        <Form.Control className="input" type="email" placeholder="Email" value="robin.lyuong@ynov.com"/>
                                    </Form.Group>

                                    <Form.Group controlId="passwordInput">
                                        <Form.Control className="input" type="password" placeholder="Mot de passe" />
                                    </Form.Group>
                                </Form>

                                <Button className="button login-btn">Sauvegarder</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Profile;
