import React from "react";

type AccordionPropsType = {
    title: string,
    list: object
}

const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody list={props.list}/>
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


const AccordionBody = (props: any) => {
    debugger
    console.log("AccordionBody rendering")
    if (props.list) {
        return (
            <div>
                <ol>
                    <li>{props.list[0]}</li>
                    <li>{props.list[1]}</li>
                    <li>{props.list[2]}</li>
                </ol>
            </div>
        );
    }
    else return (
        <ol>
            <li>Not defined</li>
            <li>Not defined</li>
            <li>Not defined</li>
        </ol>
    )
}

export default Accordion;