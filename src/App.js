import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Footer from "./components/Footer.js";
import Navbar from "./components/Navbars.js";

import Home from "./components/pages/Home";
import Review from "./components/Review.js";
import Signin from "./components/pages/Signin.js";
import Signup from "./components/pages/Signup.js";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/review" component={Review} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
            </Switch>
            <Footer />
        </HashRouter>
    );
}

export default App;
