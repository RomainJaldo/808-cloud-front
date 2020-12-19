import React from "react";
import './Upload.css';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import {Link, Redirect} from "react-router-dom";
import NavBar from "../layout/Navbar";
import authService from "../../../services/auth.service";
import beatService from "../../../services/beat.service";

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            redirect: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleSubmit = event => {
        event.preventDefault();
        const form = {
            title: this.state.title,
        }

        beatService.createBeat(form)
            .then(res => {
                console.log(res);
                this.setState({ redirection: true })
            })
    }

    render() {
        const { redirection } = this.state;
        if (redirection) {
            return <Redirect to="/" />
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
                                    <Card.Title className="cardTitle">Ajouter une instru</Card.Title>

                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="titleInput">
                                            <Form.Control className="input" type="text" name="title" placeholder="Titre" onChange={this.handleInputChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="fileInput">
                                            <Form.File className="input" name="file" placeholder="Titre"/>
                                        </Form.Group>

                                        <Button type={"submit"} className="button login-btn">Sauvegarder</Button>
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
