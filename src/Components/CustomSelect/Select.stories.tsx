import React, {useState} from 'react';
import Select from './Select';
import {SelectDimych} from './SelectDimych';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/Select',
    component: Select
}


export const CustomSelect = () => {
    const [value, setValue] = useState<any>('Choose metal:')

    return <Select value={value} onChange={setValue} valuesList={[
        {id: 0, title: 'Gold', value: '500'},
        {id: 1, title: 'Silver', value: '200'},
        {id: 2, title: 'Bronze', value: '300'},
    ]}/>
}

export const DimychSelectWithValue = () => {

    return <SelectDimych onChange={action('Value changed')} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]} value={'2'}/>
}


export const DimychSelectWithoutValue = () => {

    return <SelectDimych onChange={action('Value changed')} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]}/>
}


/*
{
    const [collapsed, setCollapsed]=useState<boolean>(true)

    return (
        <div onClick={()=>setCollapsed(!collapsed)} className={s.wrapper}>
            <div className={s.selectName}>{props.value}</div>
            {!collapsed && <div className={s.valuesField}>
                <div className={s.selector}><span onClick={()=>props.onChange('Choose metal:')}>none</span></div>
                {props.valuesList.map(i => <div key={i.id} className={s.selector}><span>{i.value}</span><span onClick={()=>props.onChange(i.title)}> {i.title}</span></div>)}
            </div>}
        </div>
    );
};
*/

