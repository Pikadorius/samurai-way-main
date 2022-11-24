import React, {useReducer} from "react";
import s from './Accordion.module.css';
import {accordionReducer, collapseAccordionAC} from '../../reducers/accordionReducer';

type AccordionPropsType = {
    titleValue: string,
    listValue: Array<string>
}


export type StateType = {
    collapsed: boolean
}

const UncontrolledAccordion: React.FC<AccordionPropsType> = ({titleValue, listValue}) => {
    console.log("Accordion rendering")

    const [state, dispatchState] = useReducer(accordionReducer, {collapsed: false})

    const onClickHandler = () => {
        dispatchState(collapseAccordionAC(!state.collapsed))
    }

    return (
        <div className={s.content}>
            <AccordionTitle title={titleValue} onClick={onClickHandler}/>
            {!state.collapsed && <AccordionBody list={listValue}/>}
        </div>
    );
}

type  UncontrolledAccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

const AccordionTitle = ({title, onClick}: UncontrolledAccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h2 onClick={onClick}>{title}</h2>
        </div>
    );
}

type  UncontrolledAccordionBodyPropsType = {
    list: Array<string>
}


const AccordionBody = (props: UncontrolledAccordionBodyPropsType) => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ol>
                {props.list.map((item, index) => <li key={index + 1}>{item}</li>)}
            </ol>
        </div>
    );
}

export default UncontrolledAccordion;