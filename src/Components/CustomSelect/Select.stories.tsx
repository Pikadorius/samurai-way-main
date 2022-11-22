import React, {useState} from 'react';
import MySelect from './MySelect';
import {SelectDimych} from './SelectDimych';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/Select',
    component: MySelect
}


export const CustomSelect = () => {
    const [value, setValue] = useState<any>(null)

    return <MySelect value={value} onChange={setValue} itemsList={[
        {id: 0, title: 'Gold', value: '500'},
        {id: 1, title: 'Silver', value: '200'},
        {id: 2, title: 'Bronze', value: '300'},
    ]}/>
}

export const DimychSelectWithValue = () => {

    const [value, setValue]=useState('2')

    return <SelectDimych onChange={setValue} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]} value={value}/>
}


export const DimychSelectWithoutValue = () => {

    const [value, setValue]=useState(null)

    return <SelectDimych  value={value} onChange={setValue} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]}/>
}

