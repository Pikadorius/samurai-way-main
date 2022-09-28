import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Recommendations from "./Components/Recommendations";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";


function App() {
    console.log("App rendering")
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


export default App;
