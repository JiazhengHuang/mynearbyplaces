import React from "react";
import "./Review.css";

import { Container, Card, CardDeck } from "react-bootstrap";
import coffeeshop from "../images/coffeeshop.jpeg";
import foodtruck from "../images/food-truck.jpeg";
import starbucks from "../images/starbucks.jpeg";

function Review() {
    return (
        <Container className="review-container">
            <h2>Hot Businesses</h2>
            <br />
            <CardDeck>
                <Card>
                    <Card.Img
                        variant="top"
                        src={coffeeshop}
                        alt="Coffee Shop"
                        className="reviewImg"
                    />
                    <Card.Body>
                        <Card.Title>Coffee Shop ($$$)</Card.Title>
                        <Card.Text className="card-type">
                            Coffee, Tea, Bakeries
                        </Card.Text>
                        <Card.Text className="card-review">
                            "This coffee shop is so awesome!"
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={foodtruck}
                        alt="Food Truck"
                        className="reviewImg"
                    />
                    <Card.Body>
                        <Card.Title>Food Truck ($$)</Card.Title>
                        <Card.Text className="card-type">
                            Food Truck, Pop-Up Restaurants
                        </Card.Text>
                        <Card.Text className="card-review">
                            "This food truck is so awesome!"
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={starbucks}
                        alt="Starbucks"
                        className="reviewImg"
                    />
                    <Card.Body>
                        <Card.Title>Starbucks ($)</Card.Title>
                        <Card.Text className="card-type">
                            Coffee, Bakeries
                        </Card.Text>
                        <Card.Text className="card-review">
                            "This Starbucks is so awesome!"
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
    );
}

export default Review;
