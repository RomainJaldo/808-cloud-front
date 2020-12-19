import React from "react";
import './Register.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link, Redirect} from "react-router-dom";
import authService from "../../../services/auth.service";

export default class Register extends React.Component {
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
        let user = JSON.parse(localStorage.getItem('user'));

        if ( user ) {
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

        authService.register(user)
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
                                <Card.Body className="bodyLeft">
                                    <Card.Title className="cardTitle text-center">Déjà un compte ?</Card.Title>
                                    <Link to={`/login`}><Button className="button">Se connecter</Button></Link>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Créer un compte</Card.Title>

                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="emailInput">
                                                    <Form.Control className="input" type="email" placeholder="Email" name="email" onChange={this.handleInputChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="passwordInput">
                                                    <Form.Control className="input" type="password" placeholder="Mot de passe" name="password" onChange={this.handleInputChange} />
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group controlId="passwordConfirmInput">
                                                    <Form.Control className="input" type="password" placeholder="Confirmation" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Button type={"submit"} className="button login-btn">S'inscire</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}
