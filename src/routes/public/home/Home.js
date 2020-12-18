import './Home.css';
import React, {useEffect, useState} from "react";
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

function Home() {

    let audioList1 = [
        {
            id :1,
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
            tags : ['Chill', "Dance"],
            urlProfile : "#/",
            urlAvatar : "https://www.cregybad.org/wp-content/uploads/2017/10/user.png",
            burns : 80,
            comments : 13,
        },
        {
            name: 'Dorost Nemisham',
            singer: 'Sirvan Khosravi',
            cover:
                'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
            musicSrc:
                'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
            tags : ['Drill', "Trap"],
            urlProfile : "#/",
            urlAvatar : "https://www.cregybad.org/wp-content/uploads/2017/10/user.png",
            burns : 12,
            comments : 105,
        },
        {
            name: 'Bedtime Stories',
            singer: 'Jay Chou',
            cover:
                'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
            musicSrc:
                'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
            tags : ['Hip Hop', "Pop"],
            urlProfile : "#/",
            urlAvatar : "https://www.cregybad.org/wp-content/uploads/2017/10/user.png",
            burns : 120,
            comments : 100,
        },
        {
            name: "Spark",
            singer: 'Vexento',
            cover: 'https://img.pngio.com/i-need-jesus-fan-made-cover-art-xxxtentacion-cover-art-png-3000_3000.png',
            musicSrc: `https://www.auboutdufil.com/get.php?web=https://archive.org/download/vexento-spark/Vexento-Spark.mp3`,
            tags : ['Pop', "Dance"],
            urlProfile : "#/",
            urlAvatar : "https://www.cregybad.org/wp-content/uploads/2017/10/user.png",
            burns : 15,
            comments : 10,
        },
    ]

    const item1 = {
        background: "https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Hip Hop",
        url: "#/"
    }
    const item2 = {
        background: "https://cdn.wallpapersafari.com/53/42/TM5I8G.jpg",
        title: "Pop",
        url: "#/"
    }
    const item3 = {
        background: "https://thisisukrap.com/wp-content/uploads/2020/06/ZONE-2-730x450.jpg",
        title: "Drill",
        url: "#/"
    }
    const item4 = {
        background: "https://wallpapercave.com/wp/wp2023799.png",
        title: "Trap",
        url: "#/"
    }
    const item5 = {
        background: "https://wallpapercave.com/wp/wp4058575.jpg",
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
    const listBeats = audioList1.map((beat) =>
        <Col
            className="d-flex justify-content-center flex-column align-items-center m-md-3 col-md-5 col-12"><CardBeat
            beat={beat} key={beat}
            playBeat={playBeat}/></Col>
    );

    function playBeat() {
        console.log("play");
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
                    {listBeats}
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
