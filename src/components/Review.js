import React from "react";
import "./Review.css";

import { Container, Card, CardDeck } from "react-bootstrap";
import starbucks from "../images/starbucks.jpeg";

import { useState, useEffect } from "react";
import api from "../communication/api";

function Review() {
    const [place, setPlace] = useState([]);

    useEffect(() => {
        if (place.length === 0) {
            api.getPlaces().then((x) => setPlace(x));
        }
    });

    return (
        <Container className="review-container">
            <h2>Hot Businesses</h2>
            <br />
            <CardDeck>
                {place.map((obj) => (
                    <>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={starbucks}
                                alt={obj.name}
                                className="reviewImg"
                            />
                            <Card.Body>
                                <Card.Title>{obj.name} ($$$)</Card.Title>
                                <Card.Text className="card-review">
                                    {obj.reviews[0].comment}
                                </Card.Text>
                                <Card.Text className="card-address">
                                    {obj.street}, {obj.city}, {obj.state},{" "}
                                    {obj.postalcode}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                    </>
                ))}
            </CardDeck>
        </Container>
    );
}

export default Review;
