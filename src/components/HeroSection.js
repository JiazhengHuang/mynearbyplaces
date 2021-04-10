import React from "react";
import "./HeroSection.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Welcome to MyNearByPlaces</h1>
            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                        Find
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="restaurants, dentists, shopping malls..."
                />
                <InputGroup.Append>
                    <Button variant="secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <br />
            <div>
                <Link className="hero-link">Restaurants</Link>
                <Link className="hero-link">Home Services</Link>
                <Link className="hero-link">Delivery</Link>
                <Link className="hero-link">Plumbers</Link>
            </div>
        </div>
    );
}

export default HeroSection;
