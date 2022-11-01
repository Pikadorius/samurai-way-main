import React from "react";
import s from './Accordion.module.css';

type AccordionPropsType = {
    titleValue: string,
    listValue: Array<string>,
    collapsed: boolean,
    collapse: () => void
}

const Accordion: React.FC<AccordionPropsType> = ({titleValue, listValue, collapsed, collapse}) => {
    console.log("Accordion rendering")
    return (
        <div className={s.content}>
            <AccordionTitle title={titleValue} collapse={collapse}/>
            {!collapsed && <AccordionBody list={listValue}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string,
    collapse: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h2 onClick={props.collapse}>{props.title}</h2>
        </div>
    );
}

type AccordionBodyPropsType = {
    list: Array<string>
}


const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ol>
                {props.list.map((item, index) => <li key={index + 1}>{item}</li>)}
            </ol>
        </div>
    );
}

export default Accordion;