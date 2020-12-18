import React from "react";
import './Upload.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link} from "react-router-dom";
import NavBar from "../layout/Navbar";

function Upload() {
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
                                <Card.Title className="cardTitle">Ajouter une instru</Card.Title>

                                <Form>
                                    <Form.Group controlId="titleInput">
                                        <Form.Control className="input" type="text" name="title" placeholder="Titre"/>
                                    </Form.Group>
                                </Form>

                                <Form>
                                    <Form.Group controlId="fileInput">
                                        <Form.Control className="input" type="file" name="file" placeholder="Titre"/>
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

export default Upload;
