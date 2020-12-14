import './Home.css';
import React from "react";
import {Link} from "react-router-dom";
import NavBar from "../layout/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";


function Home() {
    return (
        <Container fluid className="Home p-0">
            <Row className="">
                <Col><NavBar/></Col>
            </Row>
            <Row style={{marginBottom:"6em"}}>
                <Col>
                    <Link to={`/login`}>
                        <Button type="button">Login</Button>
                    </Link>
                    <Link to={`/register`}>
                        <Button type="button">Register</Button>
                    </Link>
                    <h1 className="display-1 text-center">HOME</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    Content
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
