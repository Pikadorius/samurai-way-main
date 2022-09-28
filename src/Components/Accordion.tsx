import React from "react";

const Accordion = () => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}


const AccordionTitle = () => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <p>I am AccordionTitle</p>
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