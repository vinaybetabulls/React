import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/home.component";
import About from "./components/about.component";
import Header from './header/Header.component';
import Footer from "./header/Footer.component";

ReactDOM.render(
    <div>
        <Header />
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </div>
        </BrowserRouter>
        <Footer />
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
