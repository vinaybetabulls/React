import React from "react";

import {
    BrowserRouter,
    Route
} from "react-router-dom";

import Home from "./components/home.component";
import About from "./components/about.component";
import Header from './header/Header.component';

class RouterClass extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterClass;