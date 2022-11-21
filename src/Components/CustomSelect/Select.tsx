import React, {useState} from 'react';
import s from './Select.module.css'
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
    valuesList: ItemType[]
}

const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onClickHandler = (title: string) => {
        props.onChange(title);
        setCollapsed(!collapsed)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.selectName}>{props.value}
                <div  onClick={() => setCollapsed(!collapsed)} className={s.arrow}> {collapsed ? <img alt={'arrowBottom'} src={arrowBottom}/> :
                    <img alt={'arrowTop'} src={arrowTop}/>}</div>
            </div>
            {!collapsed && <div className={s.valuesField}>
                <div className={s.selector}><span onClick={() => onClickHandler('Choose metal:')}>none</span></div>


                {props.valuesList.map(i => <div key={i.id} className={s.selector}><span>{i.value}</span><span
                    onClick={()=>onClickHandler(i.title)}> {i.title}</span></div>)}
            </div>}
        </div>
    );
};

export default Select;