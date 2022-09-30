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
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default Accordion;