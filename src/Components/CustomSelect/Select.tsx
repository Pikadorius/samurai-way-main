import React, {useState} from 'react';

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
    const [collapsed, setCollapsed]=useState<boolean>(false)

    return (
        <div onClick={()=>setCollapsed(!collapsed)}>
            <div>{props.value}</div>
            {!collapsed && <div>
                {props.valuesList.map(i => <div key={i.id}><span>{i.value}</span><span onClick={()=>props.onChange(i.title)}> {i.title}</span></div>)}
            </div>}
        </div>
    );
};

export default Select;