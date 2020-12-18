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
import Player from "../layout/Player";
import ReactJkMusicPlayer from 'react-jinke-music-player'

let audioList1 = [
    {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        cover:
            'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        // support async fetch music src. eg.
        // musicSrc: async () => {
        //   return await fetch('/api')
        // },
    },
    {
        name: 'Dorost Nemisham',
        singer: 'Sirvan Khosravi',
        cover:
            'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
        musicSrc:
            'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
]

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
        <CardItem item={item} key={item}/>
    );

    function playBeat() {
        console.log("play")
    }

    return (
        <Container fluid className="Home p-0" style={{marginBottom: "6em"}}>
            <Row noGutters className="">
                <Col><NavBar/></Col>
            </Row>
            <Row noGutters style={{marginBottom: "6em", marginTop: "3em"}}>
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
            <Row noGutters className="d-flex flex-column justify-content-center align-items-center">
                <Row noGutters className="d-flex flex-md-row flex-column justify-content-center w-75">
                    <Col
                        className="d-flex justify-content-center flex-column align-items-center mr-md-3 col-md-5 col-12"><CardBeat playBeat={playBeat}/></Col>
                    <Col
                        className="d-flex justify-content-center flex-column align-items-center col-md-5 col-12"><CardBeat/></Col>
                </Row>
                <Row noGutters className="d-flex flex-md-row flex-column justify-content-center w-75">
                    <Col
                        className="d-flex justify-content-center flex-column align-items-center mr-md-3 col-md-5 col-12"><CardBeat/></Col>
                    <Col
                        className="d-flex justify-content-center flex-column align-items-center col-md-5 col-12"><CardBeat/></Col>
                </Row>

            </Row>
            <Row noGutters>
                <Col className="d-flex justify-content-center flex-column align-items-center">
                    <Player audio={audioList1}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
