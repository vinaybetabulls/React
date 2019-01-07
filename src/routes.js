import React from "react";

import {
    BrowserRouter,
    Route
} from "react-router-dom";

import Home from "./components/home.component";
import About from "./components/about.component";

class RouterClass extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        )
    }
}

export default RouterClass;