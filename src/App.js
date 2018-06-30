import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects'
import grocery from './images/shopping.jpg';


class App extends Component {
  render() {
    return (
    <div className="App"> 
      <Navbar />
      <Header />
      <About />
      <Projects id = "projectTop"
      projectName = "Shopping List"
      image = {grocery}
      >
      This is a shopping list application made with React. Functionality includes Add, remove, and strike-through.
      </Projects>
      <Projects/>
    </div>
    );
  }
}

export default App;
