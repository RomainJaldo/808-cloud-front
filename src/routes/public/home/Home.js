import './Home.css';
import React from "react";
import {Link} from "react-router-dom";
import NavBar from "../layout/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import background from "../../../assets/img/istockphoto-1168734599-640x640.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function Home() {
    return (
        <Container fluid className="Home p-0">
            <Row className="">
                <Col><NavBar/></Col>
            </Row>
            <Row style={{marginBottom: "6em"}}>
                <Col className="d-flex justify-content-center">

                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="carousel-container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <Link to="#/">
                            <Card className="bg-transparent text-white card-swipe border-0">
                                <Card.Img className="img-swipe" src={background} alt="Card image"/>
                                <Card.ImgOverlay
                                    className="d-flex text-center align-items-center justify-content-center overlay-image">
                                    <Card.Title><h2>Hip Hop</h2></Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                        <Link to="#/">
                            <Card className="bg-transparent text-white card-swipe border-0">
                                <Card.Img className="img-swipe" src={background} alt="Card image"/>
                                <Card.ImgOverlay
                                    className="d-flex text-center align-items-center justify-content-center overlay-image">
                                    <Card.Title><h2>Pop</h2></Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                        <Link to="#/">
                            <Card className="bg-transparent text-white card-swipe border-0">
                                <Card.Img className="img-swipe" src={background} alt="Card image"/>
                                <Card.ImgOverlay
                                    className="d-flex text-center align-items-center justify-content-center overlay-image">
                                    <Card.Title><h2>Trap</h2></Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                        <Link to="#/">
                            <Card className="bg-transparent text-white card-swipe border-0">
                                <Card.Img className="img-swipe" src={background} alt="Card image"/>
                                <Card.ImgOverlay
                                    className="d-flex text-center align-items-center justify-content-center overlay-image">
                                    <Card.Title><h2>Drill</h2></Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </Carousel>
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
