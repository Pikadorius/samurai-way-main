import React from 'react';
import './App.css';
import Header from "./Header";
import Welcome from "./Welcome";
import Recommendations from "./Recommendations";
import Technologies from "./Technologies";
import Footer from "./Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <Recommendations/>
            <Technologies/>
            <Footer/>
            <Accordion/>
        </div>
    );
}

const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

const AccordionTitle = () => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <p>I am AccordionTitle</p>
        </div>
    );
}

const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <p>I am AccordionBody</p>
        </div>
    );
}

export default App;
