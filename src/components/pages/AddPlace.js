import React from "react";
import "./AddPlace.css";

import { Container, Form, Button } from "react-bootstrap";

function AddPlace() {
    return (
        <Container className="signin-container">
            <h1>Add your favorite place to the website!!!</h1>
            <br />
            <Form>
                <Form.Group>
                    <Form.Label>What is the name of the place?</Form.Label>
                    <Form.Control placeholder="Name of the place" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>What is the address of the place?</Form.Label>
                    <Form.Control placeholder="Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Place
                </Button>
            </Form>
        </Container>
    );
}

export default AddPlace;
