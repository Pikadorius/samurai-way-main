import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import Banknotes from './Components/Banknotes';
import NewComponentForInputs from './Components/NewComponentForInputs';
import NewComponentForInputs2 from './Components/NewComponentForInputs2';
import TodoList from './Components/ToDoList/TodoList';
import OnOff from './Components/OnOff/OnOff';
import OnOff2 from './Components/OnOff2/OnOff2';
import UncontrolledAccordion from './Components/Accordion/UncontrolledAccordion';
import UncontrolledRating from './Components/Rating/UncontrolledRating';
import Counter from './Components/Counter/Counter';
import RouterTests from './Components/RouterTests';
import Select from "./Components/CustomSelect/Select";

export type StudentsPropsType = {
    id: number,
    name: string,
    age: number
}

// const step=Number(prompt('Enter step:', "1"));

function App() {
    console.log("App rendering");
    const [turned, setOnOff] = useState<boolean>(true)
    const changeSwitch = () => {
        setOnOff(!turned)
    }

    const [value, setValue] = useState<RatingValueType>(0);

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const collapseList = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const [selectValue,setSelectValue]=useState('Choose metal:')

    return (
        <div className="App">
            <RouterTests/>
            <Counter minValue={0} maxValue={5} step={1}/>
            <Rating rating={value} changeRating={setValue}/>
            <OnOff turndedOn={turned} change={changeSwitch}/>
            <OnOff2 on={turned} onChange={setOnOff}/>
            <UncontrolledAccordion titleValue={"I am uncontrolled Accordion"} listValue={['test1', 'test2', 'test3']}/>
            <UncontrolledRating rating={2}/>
            <TodoList/>
            {/*<NewComponentForInputs/>*/}
            {/*<NewComponentForInputs2/>*/}
            <Banknotes/>
            {/*<Accordion titleValue={"You CAN do it, just follow these directions:"}
                       listValue={["Stand your ground", "Step by step", "Never give UP", "LOL"]}
                       collapsed={!onOff}/>*/}
            <UncontrolledRating rating={3}/>
            <Accordion titleValue={"Accordion with state in App"}
                       listValue={[
                           {id:0, title:'Gold', value:'500'},
                           {id:1, title:'Silver', value:'200'},
                           {id:2, title:'Bronze', value:'300'},
                       ]}
                       clicked={(value: any, list: string)=>console.log(`${value} in ${list} clicked`)}
                       collapsed={accordionCollapsed}
                       collapse={collapseList}/>
            <UncontrolledRating rating={1}/>
            <Select value={selectValue} onChange={setSelectValue} valuesList={[
                {id:0, title:'Gold', value:'500'},
                {id:1, title:'Silver', value:'200'},
                {id:2, title:'Bronze', value:'300'},
            ]}/>
        </div>
    );
}

export default App;