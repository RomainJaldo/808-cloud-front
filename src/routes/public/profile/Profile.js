import React from "react";
import './Profile.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link, Redirect} from "react-router-dom";
import NavBar from "../layout/Navbar";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            redirect: false
        };
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));

        if ( !user ) {
            this.setState({ redirection: true });
        } else {
            this.setState({ user: user });
        }
    }

    render() {
        const { redirection } = this.state;
        if (redirection) {
            return <Redirect to="/login" />
        }
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
                                            <Form.Control className="input" type="email" placeholder="Email" value={ (this.user && this.user.email) ? this.user.email : null }/>
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
}
