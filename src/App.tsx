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
            <Header title={"Choose your destiny!"}/>
            <Welcome title={"Wake the fuck up, Samurai! We have a city to BURN!"}/>
            <Accordion titleValue={"You CAN do it, just follow these directions:"}
                       listValue={["Stand your ground", "Step by step", "Never give UP"]}
                       collapsed={false}/>
            <Rating value={3}/>
            <Accordion titleValue={"Need to know:"}
                       listValue={["HTML", "CSS", "JS"]}
                       collapsed={false}/>
            <Rating value={4}/>
            <Accordion titleValue={"Menu"}
                       listValue={["Porridge", "Pizza", "Meat"]}
                       collapsed={false}/>
            <Rating value={4}/>
            <Accordion titleValue={"Menu 2"}
                       listValue={["Tea", "Coffee"]}
                       collapsed={false}/>
            <Rating value={5}/>
            <Footer/>
        </div>
    );
}

export default App;
