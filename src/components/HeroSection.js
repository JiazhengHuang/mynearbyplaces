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
        </div>
    );
}

export default HeroSection;
