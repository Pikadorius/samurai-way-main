import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import NewComponent from "./Components/NewComponent";
import Banknotes from './Components/Banknotes';
import NewComponentForInputs from './Components/NewComponentForInputs';
import NewComponentForInputs2 from './Components/NewComponentForInputs2';
import TodoList from './Components/ToDoList/TodoList';
import OnOff from './Components/OnOff/OnOff';
import OnOff2 from './Components/OnOff2/OnOff2';
import UncontrolledAccordion from './Components/Accordion/UncontrolledAccordion';
import UncontrolledRating from './Components/Rating/UncontrolledRating';
import Counter from './Components/Counter/Counter';

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
// const step=Number(prompt('Enter step:', "1"));

function App() {
    console.log("App rendering");
    const [onOff, setOnOff] = useState<boolean>(true)
    const changeSwitch = () => {
        setOnOff(!onOff)
    }


    return (
        <div className="App">
            <Counter minValue={0} maxValue={5} step={1}/>
            <OnOff2/>
            <UncontrolledAccordion titleValue={"Hello"} listValue={['test1', 'test2', 'test3']}/>
            <UncontrolledRating rating={2}/>
            <TodoList/>
            {/*<NewComponentForInputs/>
            <NewComponentForInputs2/>*/}
            <Banknotes/>
            <OnOff turndedOn={onOff} change={changeSwitch}/>
            <Accordion titleValue={"You CAN do it, just follow these directions:"}
                       listValue={["Stand your ground", "Step by step", "Never give UP", "LOL"]}
                       collapsed={!onOff}/>
            <UncontrolledRating rating={3}/>
            <Accordion titleValue={"Need to know:"}
                       listValue={["HTML", "CSS", "JS"]}
                       collapsed={false}/>
            <UncontrolledRating rating={1}/>
            <Rating rating={2}/>
            {/*<NewComponent students={students}/>*/}
        </div>
    );
}

export default App;

