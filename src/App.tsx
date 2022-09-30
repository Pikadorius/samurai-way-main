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
            <Welcome title={"Hello!"}/>
            <Recommendations/>
            <Rating value={3}/>
            <Technologies/>
            <Rating value={4}/>
            <Footer/>
            <Accordion title={"Menu"} list={["Porridge", "Pizza", "Meat"]}/>
            <Accordion title={"Menu 2"} list={["Tea", "Coffee", "Water"]}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


export default App;
