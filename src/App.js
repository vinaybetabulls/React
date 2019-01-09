import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header.component';
import Footer from './header/Footer.component';
import RouterClass from './routes';
class App extends Component {
  render() {
    return (
      <div>
        <RouterClass />
        <Footer />
      </div>
    );
  }
}

export default App;
