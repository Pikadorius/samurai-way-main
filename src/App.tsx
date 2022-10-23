import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";
import NewComponent from "./Components/NewComponent";
import StateExample from './Components/StateExample';
import Banknotes from './Components/Banknotes';
import NewComponentForInputs from './Components/NewComponentForInputs';
import NewComponentForInputs2 from './Components/NewComponentForInputs2';
import TodoList from './Components/ToDoList/TodoList';

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

function App() {
    console.log("App rendering");

    return (
        <div className="App">
            <TodoList/>
            {/*<NewComponentForInputs/>
            <NewComponentForInputs2/>*/}
            <Banknotes/>
            <StateExample/>
            <Accordion titleValue={"You CAN do it, just follow these directions:"}
                       listValue={["Stand your ground", "Step by step", "Never give UP", "LOL"]}
                       collapsed={false}/>
            <Rating value={3} color={"red"}/>
            <Accordion titleValue={"Need to know:"}
                       listValue={["HTML", "CSS", "JS"]}
                       collapsed={false}/>
            <Rating value={5} color={"red"}/>
            <NewComponent students={students}/>
        </div>
    );
}

export default App;

