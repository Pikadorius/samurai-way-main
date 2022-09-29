import React from "react";

const Accordion = (props: any) => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    );
}


const AccordionTitle = (props: any) => {
    debugger
    console.log("AccordionTitle rendering")
    return (
        <div>
            <p>{props.title}</p>
        </div>
    );
}


const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <p>I am AccordionBody</p>
        </div>
    );
}

export default Accordion;