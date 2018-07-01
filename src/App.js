import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects'
import grocery from './images/shopping.jpg';
import budget from './images/budget.jpg';
import Skills from './components/skills';


class App extends Component {
  render() {
    return (
    <div className="App"> 
      <Navbar />
      <Header />
      <About />
      <Projects id = "project1"
      projectName = "Shopping List"
      image = {grocery}
      >
      This is a shopping list application made with React. Functionality includes Add, remove, and strike-through.
      </Projects>
      <Projects
      projectName = "Budget App"
      image = {budget}
      >
      This application is designed to show how a front-end application can be paired with a backend for user creation and personal values. This is meant to play with without permanently saving to a database.
      </Projects>
      <Skills />
    </div>
    );
  }
}

export default App;
