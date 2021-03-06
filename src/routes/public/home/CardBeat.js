import React, {useState} from "react";
import {Card, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import cover from "../../../assets/img/rap-mixtape-cover-art-design-template-ca79baae8c3ee8f1112ae28f7bfaa1e0.jpg";
import avatar from "../../../assets/img/profilepicture.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {faFireAlt, faPlus, faMinus, faCommentAlt, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import beatService from "../../../services/beat.service";
import CardItem from "./CardItem";

function burn(beatId) {
    beatService.createVote(beatId, 'burn')
        .then(res => {
            window.location.reload(false);
            console.log(res);
        })
}

function freeze(beatId) {
    beatService.createVote(beatId, 'freeze')
        .then(res => {
            window.location.reload(false);
            console.log(res);
        })
}

function CardBeat({playBeat, beat}) {
    const votes = (beat.votes) ? beat.votes : null;
    const categories = (beat.categories) ? beat.categories : null;

    let burns = 0;
    let freezes = 0;

    votes.map((item) => {
        if ( item.type === 'burn' ) {
            burns++;
        } else if ( item.type === 'freeze' ) {
            freezes++;
        }
    });

    const temperature = burns - freezes;

    const listCategories = categories.map((item) =>
        <Link to="#/" className="d-flex text-decoration-none">
            <Button className="bg-light border-0 shadow-none rounded-pill p-1 text-dark mr-1">{ item.title }</Button>
        </Link>
    );

    return (
        <Card className="mb-3 card-beat">
            <Row noGutters className="p-4 flex-lg-row flex-column">
                <Col className="mb-3 mb-lg-0 ">
                    <Card.Img fluid
                              src={cover}
                              alt="Card image"
                              aria-label="Placeholder: Image"/>
                    <Button className="play bg-transparent border-0 shadow-none" onClick={() => playBeat()}>
                        <FontAwesomeIcon className="h1" icon={faPlayCircle}/>
                    </Button>
                </Col>
                <Col className="">
                    <Card.Body className="pb-0 pt-0 h-100">
                        <Container className="p-0 h-100 d-flex flex-column justify-content-between">
                            <Row noGutters className="d-flex justify-content-between align-items-center mb-3 mb-lg-0">
                                <Col className="d-flex col-6 justify-content-around bg-dark rounded shadow">
                                    <Button className="bg-transparent border-0 shadow-none button-plus" onClick={() => burn(beat.id)}><FontAwesomeIcon
                                        icon={faPlus}/></Button>
                                    <Button
                                        className="bg-transparent border-0 shadow-none button-minus" onClick={() => freeze(beat.id)}><FontAwesomeIcon
                                        icon={faMinus}/></Button>
                                </Col>
                                <Col className="col-4 d-flex align-items-center justify-content-end number-burns">
                                    <span className="mr-1">{ temperature }</span>
                                    <FontAwesomeIcon icon={faFireAlt}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card.Title>{beat.title}</Card.Title>
                                </Col>
                            </Row>
                            <Row className="mb-3 mb-lg-0">
                                <Col className="d-flex align-items-center">
                                    { listCategories }
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex col-8 p-0 align-items-center">
                                    <Link to="#/" className="d-flex text-decoration-none">
                                    <span className="col-4">
                                        <Image fluid className="rounded-circle"
                                               src={avatar}
                                               alt="user pic"
                                        />
                                    </span>
                                        <span className="col-8 p-0 text-white">John Doe</span>
                                    </Link>
                                </Col>
                                <Col
                                    className="d-flex col-4 p-0 align-items-center justify-content-end buttons-comment">
                                    <Button className="d-flex justify-content-around w-100 bg-purple border-0">
                                        <span>{ beat.comments.length }</span>
                                        <span><FontAwesomeIcon icon={faCommentAlt}/></span>
                                    </Button>
                                </Col>

                            </Row>
                        </Container>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CardBeat;
