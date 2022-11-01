import React, {useState} from "react";
import s from './Accordion.module.css';

type AccordionPropsType = {
    titleValue: string,
    listValue: Array<string>
}


const UncontrolledAccordion:React.FC<AccordionPropsType>= ({titleValue, listValue}) => {
    console.log("Accordion rendering")
    const [collapsed, setCollapsed]=useState<boolean>(false)

        return (
            <div className={s.content}>
                <AccordionTitle title={titleValue} onClick={()=>setCollapsed(!collapsed)}/>
                { !collapsed && <AccordionBody list={listValue}/> }
            </div>
        );
}

type  UncontrolledAccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
}

const AccordionTitle = ({title, onClick}:  UncontrolledAccordionTitlePropsType) => {
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