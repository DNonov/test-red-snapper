import React, { Component } from 'react';
import Card from "./components/Card/Card";
import HeroImage from "./components/HeroImage/HeroImage";
import './App.css';

class App extends Component {
  render() {
    return (
			<section className="app-container">
				<HeroImage />
				<Card />
			</section>
    );
  }
}

export default App;
