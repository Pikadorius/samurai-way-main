import React, {memo} from "react";
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

const Accordion: React.FC<AccordionPropsType> = memo(({titleValue, listValue, collapsed, collapse, clicked}) => {
    console.log("Accordion rendering")
    return (
        <div className={s.content}>
            <AccordionTitle title={titleValue} collapse={collapse}/>
            {!collapsed && <AccordionBody list={listValue} clicked={(value)=>clicked(value,titleValue)}/>}
        </div>
    );
})


type AccordionTitlePropsType = {
    title: string,
    collapse: () => void
}

const AccordionTitle = memo((props: AccordionTitlePropsType) => {
    return (
        <div>
            <h2 onClick={props.collapse}>{props.title}</h2>
        </div>
    );
})


type AccordionBodyPropsType = {
    list: ItemType[]
    clicked: (value:any)=>void
}

const AccordionBody = memo((props: AccordionBodyPropsType) => {
    return (
        <div>
            <ol>
                {props.list.map(i => <li key={i.id}>{i.title} cost:<span onClick={()=>props.clicked(i.value)}>{i.value}</span></li>)}
            </ol>
        </div>
    );
})

export default Accordion;