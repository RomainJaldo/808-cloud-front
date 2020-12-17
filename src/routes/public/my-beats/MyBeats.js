import './MyBeats.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../layout/Navbar";
import Container from "react-bootstrap/Container";

function MyBeats() {
    return (
        <Container fluid className="MyBeats p-0">
            <Row className="">
                <Col><NavBar/></Col>
            </Row>
            <Row style={{marginBottom:"6em"}}>
                <Col>
                    <h1 className="display-1 text-center">My beats</h1>
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

export default MyBeats;
