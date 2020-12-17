import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import React from "react";

function CardItem({item}) {
    return (
        <Link to={item.url}>
            <Card className="bg-transparent text-white card-swipe border-0">
                <Card.Img className="img-swipe" src={item.background} alt="Card image"/>
                <Card.ImgOverlay
                    className="d-flex text-center align-items-center justify-content-center overlay-image">
                    <Card.Title className="m-0"><h2 className="m-0">{item.title}</h2></Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Link>
    );
}

export default CardItem;