import './Home.css';
import React from "react";
import NavBar from "../layout/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import background from "../../../assets/img/istockphoto-1168734599-640x640.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardItem from "./CardItem";
import CardBeat from "./CardBeat";

function Home() {
    const item1 = {
        background: background,
        title: "Hip Hop",
        url: "#/"
    }
    const item2 = {
        background: background,
        title: "Pop",
        url: "#/"
    }
    const item3 = {
        background: background,
        title: "Drill",
        url: "#/"
    }
    const item4 = {
        background: background,
        title: "Trap",
        url: "#/"
    }
    const item5 = {
        background: background,
        title: "Afro Trap",
        url: "#/"
    }
    const items = [
        item1,
        item2,
        item3,
        item4,
        item5
    ]
    const listItems = items.map((item) =>
        <CardItem item={item}/>
    );

    return (
        <Container fluid className="Home p-0">
            <Row noGutters className="">
                <Col><NavBar/></Col>
            </Row>
            <Row noGutters style={{marginBottom: "6em",marginTop: "3em"}}>
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
                                items: 4,
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
                        {listItems}
                    </Carousel>
                </Col>
            </Row>
            <Row noGutters>
                <Col className="d-flex justify-content-center flex-column align-items-center">
                    <Row>
                        <Col><CardBeat/></Col>
                        <Col><CardBeat/></Col>
                    </Row>
                    <Row>
                        <Col><CardBeat/></Col>
                        <Col><CardBeat/></Col>
                    </Row>
                </Col>
            </Row>
            <Row noGutters>
                <Col className="d-flex justify-content-center flex-column align-items-center">
                    <h2>PLAYER</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
