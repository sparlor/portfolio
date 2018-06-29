import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';

class App extends Component {
  render() {
    return (
    <div className="App"> 
      <Navbar />
      <Header />
      <About />
    </div>
    );
  }
}

export default App;
