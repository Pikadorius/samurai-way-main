import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    listValue: Array<string>
}


const UncontrolledAccordion:React.FC<AccordionPropsType>= ({titleValue, listValue}) => {
    console.log("Accordion rendering")
    const [collapsed, setCollapsed]=useState<boolean>(true)

        return (
            <div>
                <AccordionTitle title={titleValue} callback={()=>setCollapsed(!collapsed)}/>
                { !collapsed && <AccordionBody list={listValue}/> }
            </div>
        );
}

type  UncontrolledAccordionTitlePropsType = {
    title: string,
    callback: ()=>void
}

const AccordionTitle = (props:  UncontrolledAccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h2 onClick={props.callback}>{props.title}</h2>
        </div>
    );
}

type  UncontrolledAccordionBodyPropsType = {
    list: Array<string>
}


const AccordionBody = (props:  UncontrolledAccordionBodyPropsType) => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ol>
                {props.list.map((item,index)=><li key={index+1}>{item}</li>)}
            </ol>
        </div>
    );
}

export default UncontrolledAccordion;