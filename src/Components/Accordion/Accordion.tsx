import React from "react";
import s from './Accordion.module.css';

type AccordionPropsType = {
    titleValue: string,
    listValue: Array<string>,
    collapsed: boolean,
}

const Accordion:React.FC<AccordionPropsType>= ({titleValue, listValue, collapsed}) => {
    console.log("Accordion rendering")
        return (
            <div className={s.content}>
                <AccordionTitle title={titleValue}/>
                { !collapsed && <AccordionBody list={listValue}/> }
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string,
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h2>{props.title}</h2>
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
                {props.list.map((item,index)=><li key={index+1}>{item}</li>)}
            </ol>
        </div>
    );
}

export default Accordion;