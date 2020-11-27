import React from "react";
import './Login.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link} from "react-router-dom";

function Login() {
    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <Card className="loginCard">
                            <Card.Body>
                                <Card.Title className="cardTitle">Connexion</Card.Title>

                                <Form>
                                    <Form.Group controlId="emailInput">
                                        <Form.Control className="input" type="email" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlId="passwordInput">
                                        <Form.Control className="input" type="password" placeholder="Mot de passe" />
                                    </Form.Group>
                                </Form>

                                <Button className="button login-btn">Se connecter</Button>
                            </Card.Body>
                            <Card.Body className="bodyRight">
                                <Card.Title className="cardTitle text-center">Pas encore de compte</Card.Title>
                                <Link to={`/register`}><Button className="button">Créer un compte</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Login;
