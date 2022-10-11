import React from "react";

type AccordionPropsType = {
    titleValue: string,
    listValue: Array<string>,
    collapsed: boolean,
}

const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")
    if (!props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody list={props.listValue}/>
            </div>
        );
    } else return (
        <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string,
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    debugger
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
    debugger
    console.log("AccordionBody rendering")
    return (
        <div>
            <ol>
                {props.list.map(item=><li>{item}</li>)}
            </ol>
        </div>
    );
}

export default Accordion;