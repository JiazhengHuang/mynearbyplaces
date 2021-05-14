import React from "react";
import "./AddReview.css";

import { Container, Form, Button } from "react-bootstrap";

function AddReview() {
    return (
        <Container className="signin-container">
            <h1>Add a review for your place to the website!!!</h1>
            <br />
            <Form>
                <Form.Group>
                    <Form.Label>What is the name of the place?</Form.Label>
                    <Form.Control placeholder="Name of the place" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>What is the review you want to add?</Form.Label>
                    <Form.Control placeholder="Review" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Review
                </Button>
            </Form>
        </Container>
    );
}

export default AddReview;
