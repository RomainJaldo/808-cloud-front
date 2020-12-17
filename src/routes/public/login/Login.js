import React from "react";
import './Login.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";

import authService from '../../../services/auth.service';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        let token = localStorage.getItem('token');

        if ( token ) {
            this.setState({ redirection: true });
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        authService.login(user)
            .then(res => {
                console.log(res);
                this.setState({ redirection: true })
            })
    }

    render() {
        const { redirection } = this.state;
        if (redirection) {
            return <Redirect to="/profile" />
        }
        return (
            <main>
                <Container>
                    <Row>
                        <Col>
                            <Card className="loginCard">
                                <Card.Body>
                                    <Card.Title className="cardTitle">Connexion</Card.Title>

                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="emailInput">
                                            <Form.Control className="input" type="email" placeholder="Email" name="email" onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group controlId="passwordInput">
                                            <Form.Control className="input" type="password" placeholder="Mot de passe" name="password" onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Button type={"submit"} className="button login-btn">Se connecter</Button>
                                    </Form>
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
        )
    }
}
