import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";


function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <Header/>
            <Welcome title={"Wake the fuck up, Samurai! We have a city to BURN!"}/>
            <Accordion title={"You CAN do it, just follow these directions:"}
                       list={["Stand your ground", "Step by step", "Never give UP"]}
                       collapsed={false}/>
            <Rating value={3}/>
            <Accordion title={"Need to know:"}
                       list={["HTML", "CSS", "JS"]}
                       collapsed={false}/>
            <Rating value={4}/>
            <Accordion title={"Menu"}
                       list={["Porridge", "Pizza", "Meat"]}
                       collapsed={false}/>
            <Rating value={4}/>
            <Accordion title={"Menu 2"}
                       list={["Tea", "Coffee", "Water"]}
                       collapsed={false}/>
            <Rating value={5}/>
            <Footer/>
        </div>
    );
}

export default App;
