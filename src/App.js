import './App.css';

import NavBar from './components/NavBar.js'
import Header from './components/Cohorts/BootstrapStyles/Header.js'
import Footer from './components/Cohorts/BootstrapStyles/Footer.js'

import React from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;

