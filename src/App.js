import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Footer from "./components/Footer.js";
import Navbar from "./components/Navbars.js";

import Home from "./components/pages/Home";
import Review from "./components/Review.js";
import Signin from "./components/pages/Signin.js";
import Signup from "./components/pages/Signup.js";
import AddPlace from "./components/pages/AddPlace.js";
import AddReview from "./components/pages/AddReview.js";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/review" component={Review} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/addplace" component={AddPlace} />
                <Route path="/addreview" component={AddReview} />
            </Switch>
            <Footer />
        </HashRouter>
    );
}

export default App;
