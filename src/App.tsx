import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";
import CarTable from "./Components/CarTable";


export type TopCarPropsType = {
    manufacturer: string
    model: string
};

const topCars: Array<TopCarPropsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
];

function App() {
    console.log("App rendering");

    return (
        <div className="App">
            <Header title={"Choose your destiny!"}/>
            <Welcome title={"Wake the fuck up, Samurai! We have a city to BURN!"}/>
            <Accordion titleValue={"You CAN do it, just follow these directions:"}
                       listValue={["Stand your ground", "Step by step", "Never give UP", "LOL"]}
                       collapsed={false}/>
            <Rating value={3} color={"red"}/>
            <Accordion titleValue={"Need to know:"}
                       listValue={["HTML", "CSS", "JS"]}
                       collapsed={false}/>
            <Rating value={4} color={"red"}/>
            <Accordion titleValue={"Menu"}
                       listValue={["Porridge", "Pizza", "Meat"]}
                       collapsed={false}/>
            <Rating value={4} color={"red"}/>
            <Accordion titleValue={"Menu 2"}
                       listValue={["Tea", "Coffee"]}
                       collapsed={true}/>
            <Rating value={5} color={"red"}/>
            <CarTable list={topCars}/>
            <Footer/>
        </div>
    );
}

export default App;

