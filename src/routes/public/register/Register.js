import React from "react";
import './Register.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link} from "react-router-dom";

function Register() {
    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <Card className="loginCard">
                            <Card.Body className="bodyLeft">
                                <Card.Title className="cardTitle text-center">Déjà un compte ?</Card.Title>
                                <Link to={`/login`}><Button className="button">Se connecter</Button></Link>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title className="cardTitle">Créer un compte</Card.Title>

                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="emailInput">
                                                <Form.Control className="input" type="email" placeholder="Email" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group controlId="firstNameInput">
                                                <Form.Control className="input" type="text" placeholder="Nom" />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="lastNameInput">
                                                <Form.Control className="input" type="text" placeholder="Prénom" />
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col>
                                            <Form.Group controlId="passwordInput">
                                                <Form.Control className="input" type="password" placeholder="Mot de passe" />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="passwordConfirmInput">
                                                <Form.Control className="input" type="password" placeholder="Confirmation" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>

                                <Button className="button login-btn">S'inscire</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Register;
