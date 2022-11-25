import React from "react";
import s from './Accordion.module.css';

export type ItemType = {
    id?: number
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    /**
     * Elements that show when accordion not collapsed
     */
    listValue: ItemType[]
    collapsed: boolean,
    collapse: () => void
    clicked: (value: any, list: string)=>void
}

const SecretAccordion: React.FC<AccordionPropsType> = ({titleValue, listValue, collapsed, collapse, clicked}) => {
    console.log("Accordion rendering")
    return (
        <div className={s.content}>
            <AccordionTitle title={titleValue} collapse={collapse}/>
            {!collapsed && <AccordionBody list={listValue} clicked={(value)=>clicked(value,titleValue)}/>}
        </div>
    );
}
const Accordion=React.memo(SecretAccordion)

type AccordionTitlePropsType = {
    title: string,
    collapse: () => void
}

const SecretAccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h2 onClick={props.collapse}>{props.title}</h2>
        </div>
    );
}
const AccordionTitle=React.memo(SecretAccordionTitle)

type AccordionBodyPropsType = {
    list: ItemType[]
    clicked: (value:any)=>void
}

const SecretAccordionBody = (props: AccordionBodyPropsType) => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ol>
                {props.list.map(i => <li key={i.id}>{i.title} cost:<span onClick={()=>props.clicked(i.value)}>{i.value}</span></li>)}
            </ol>
        </div>
    );
}
const AccordionBody=React.memo(SecretAccordionBody)

export default Accordion;