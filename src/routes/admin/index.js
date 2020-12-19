import React from "react";
import './style.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
        };
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));

        if ( !user ) {
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

    goToAdminUsers() {

    }

    goToAdminBeats(){

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
                                    <Card.Title className="cardTitle">Utilisateurs</Card.Title>

                                    <a href="/admin/user">
                                        <Button className="button">Voir</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="loginCard">
                                <Card.Body>
                                    <Card.Title className="cardTitle">Instrus</Card.Title>

                                    <a href="/admin/beat">
                                        <Button className="button">Voir</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        )
    }
}
