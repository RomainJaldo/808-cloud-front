import './Upload.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../layout/Navbar";
import Container from "react-bootstrap/Container";

function Upload() {
    return (
        <Container fluid className="Upload p-0">
            <Row className="">
                <Col><NavBar/></Col>
            </Row>
            <Row style={{marginBottom:"6em"}}>
                <Col>
                    <h1 className="display-1 text-center">Upload</h1>
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

export default Upload;
