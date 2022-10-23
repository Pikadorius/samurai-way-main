import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";
import CarTable from "./Components/CarTable";
import NewComponent from "./Components/NewComponent";
import StateExample from './Components/StateExample';
import Banknotes from './Components/Banknotes';
import Button from './Components/Button';
import FullInput from './Components/InputTests/FullInput';
import NewComponentForInputs from './Components/NewComponentForInputs';


export type TopCarPropsType = {
    manufacturer: string
    model: string
};

const topCars: Array<TopCarPropsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
];

export type StudentsPropsType = {
    id: number,
    name: string,
    age: number
}

const students: Array<StudentsPropsType> = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
];


const acceptFoo = () => {
    console.log('You accepted all sudjestions')
}
const dislineFoo = () => {
    console.log('You dislined all sudjestions')
}


function App() {
    console.log("App rendering");

    return (
        <div className="App">
            <Header title={"Choose your destiny!"}/>
            <NewComponentForInputs/>
            <Banknotes/>
            <StateExample/>
            <CarTable cars={topCars}/>
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
            <NewComponent students={students}/>
            <Button name={"Accept all"} callBack={acceptFoo}/>
            <Button name={"Disline"} callBack={dislineFoo}/>
            <Footer/>
        </div>
    );
}

export default App;

