import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Recommendations from "./Components/Recommendations";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";


function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <Header/>
            <Welcome title={"Hello, young samurai!"}/>
            <Recommendations/>
            <Rating value={3}/>
            <Technologies/>
            <Rating value={4}/>
            <Footer/>
            <Accordion title={"I am new Accordion Title"}/>
        </div>
    );
}


export default App;
