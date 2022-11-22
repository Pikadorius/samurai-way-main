import React, {useState} from 'react';
import s from './MySelect.module.css'
import arrowBottom from './ArrowBottom.png'
import arrowTop from './ArrowTop.png'

type ItemType = {
    id: number
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

    const onTitleClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const onItemClickHandler = (title: any) => {
        props.onChange(title);
        setCollapsed(!collapsed)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.selectName}>{props.value}
                <div  onClick={onTitleClickHandler} className={s.arrow}> {collapsed ? <img alt={'arrowBottom'} src={arrowBottom}/> :
                    <img alt={'arrowTop'} src={arrowTop}/>}</div>
            </div>
            {!collapsed && <div className={s.valuesField}>
                <div className={s.selector}><span onClick={() => onItemClickHandler(null)}>none</span></div>


                {props.itemsList.map(i => <div key={i.id} className={s.selector + ' ' + (props.value===i.title && s.selected)}><span>{i.value}</span><span
                    onClick={()=>onItemClickHandler(i.title)}> {i.title}</span></div>)}
            </div>}
        </div>
    );
};

export default MySelect;