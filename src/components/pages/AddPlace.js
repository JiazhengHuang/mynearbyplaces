import { React, useState } from "react";
import "./AddPlace.css";
import api from "../../communication/api";

import { Container, Form, Button } from "react-bootstrap";

function AddPlace() {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [message, setMessage] = useState("");

    let nameChanged = (event) => {
        setName(event.target.value);
    };

    let streetChanged = (event) => {
        setStreet(event.target.value);
    };

    let cityChanged = (event) => {
        setCity(event.target.value);
    };

    let stateChanged = (event) => {
        setState(event.target.value);
    };

    let postalcodeChanged = (event) => {
        setPostalcode(event.target.value);
    };

    let submit = () => {
        let place = {
            name: name,
            street: street,
            city: city,
            state: state,
            postalcode: postalcode,
        };
        console.log(place);
        api.addPlace(place)
            .then(() => {
                setMessage(`The place ${name} was added successfully.`);
                console.log(`The place ${name} was added successfully.`);
                setName("");
                setStreet("");
                setCity("");
                setPostalcode("");
                setState("");
            })
            .catch((e) => {
                setMessage(`There was an error in adding the place ${name}`);
                console.log(e);
            });
    };

    return (
        <Container className="signin-container">
            <h1>Add your favorite place to the website!!!</h1>
            <br />
            <Form>
                <Form.Group>
                    <Form.Label>Name of the Place</Form.Label>
                    <Form.Control
                        placeholder="Name of the place"
                        value={name}
                        onChange={nameChanged}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                        placeholder="Street"
                        value={street}
                        onChange={streetChanged}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        placeholder="City"
                        value={city}
                        onChange={cityChanged}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        placeholder="State"
                        value={state}
                        onChange={stateChanged}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        placeholder="Postal Code"
                        value={postalcode}
                        onChange={postalcodeChanged}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submit}>
                    Add Place
                </Button>
            </Form>
        </Container>
    );
}

export default AddPlace;
