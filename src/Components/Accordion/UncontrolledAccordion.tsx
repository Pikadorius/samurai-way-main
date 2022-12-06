import React, {memo, useReducer} from "react";
import s from './Accordion.module.css';
import {accordionReducer, collapseAccordion} from '../../reducers/accordionReducer';

type AccordionPropsType = {
    titleValue: string,
    listValue: Array<string>
}

export type StateType = {
    collapsed: boolean
}

const UncontrolledAccordion: React.FC<AccordionPropsType> = memo(({titleValue, listValue}) => {
    console.log("Unc. accordion rendering")

    const [state, dispatchState] = useReducer(accordionReducer, {collapsed: false})

    const onClickHandler = () => {
        dispatchState(collapseAccordion(!state.collapsed))
    }

    return (
        <div className={s.content}>
            <AccordionTitle title={titleValue} onClick={onClickHandler}/>
            {!state.collapsed && <AccordionBody list={listValue}/>}
        </div>
    );
})

type  UncontrolledAccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

const AccordionTitle = memo(({title, onClick}: UncontrolledAccordionTitlePropsType) => {
    console.log("Unc. accordionTitle rendering")
    return (
        <div>
            <h2 onClick={onClick}>{title}</h2>
        </div>
    );
})



type  UncontrolledAccordionBodyPropsType = {
    list: Array<string>
}

const AccordionBody = memo((props: UncontrolledAccordionBodyPropsType) => {
    console.log("Unc. accordionBody rendering")
    return (
        <div>
            <ol>
                {props.list.map((item, index) => <li key={index + 1}>{item}</li>)}
            </ol>
        </div>
    );
})

export default UncontrolledAccordion;