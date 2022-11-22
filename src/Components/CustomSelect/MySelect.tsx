import React, {useState} from 'react';
import s from './MySelect.module.css'
import arrowBottom from './ArrowBottom.png'
import arrowTop from './ArrowTop.png'

type ItemType = {
    id?: number
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    itemsList: ItemType[]
}

const MySelect = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [hoveredElement, setHoveredElement]=useState(props.value)

    const item=props.itemsList.find(i=>i.value===props.value)
    const hoveredItem=props.itemsList.find(i=>i.value===hoveredElement)

    const onTitleClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const onItemClickHandler = (value: any) => {
        props.onChange(value);
        onTitleClickHandler();
    }

    return (
        <div className={s.wrapper}>
            <div className={s.selectName}>{item && item.title}
                <div  onClick={onTitleClickHandler} className={s.arrow}> {collapsed ? <img alt={'arrowBottom'} src={arrowBottom}/> :
                    <img alt={'arrowTop'} src={arrowTop}/>}</div>
            </div>
            {!collapsed && <div className={s.valuesField}>
                {props.itemsList.map(i => <div
                    onMouseEnter={()=>setHoveredElement(i.value)}
                    key={i.value}
                    className={s.selector + ' ' + (hoveredItem===i && s.selected)}
                    onClick={()=>onItemClickHandler(i.value)}> {i.title}</div>)}
            </div>}
        </div>
    );
};

export default MySelect;