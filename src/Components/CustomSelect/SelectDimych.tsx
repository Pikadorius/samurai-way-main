import React, {useState} from 'react';
import {ItemType} from '../Accordion/Accordion';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import s from './SelectDimych.module.css'


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectDimych = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)

    const items = props.items.find(i => i.value === props.value)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    return (
        <div>
            <div>
                <h3>Material UI select</h3>
                <FormControl sx={{m: 1, minWidth: 80}}>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.value}
                        label="City"
                        onChange={() => {
                        }}
                    >
                        <MenuItem value={'1'}>Minsk</MenuItem>
                        <MenuItem value={'2'}>Moscow</MenuItem>
                        <MenuItem value={'3'}>Kiev</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <h3>Default select</h3>
            <div>
                <select value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)}>
                    <option value="1">Minsk</option>
                    <option value="2">Moscow</option>
                    <option value="3">Kiev</option>
                </select>
            </div>

            <h3>Custom Dimych select</h3>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItems}>{items && items.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div key={i.value} onClick={() => {
                            onItemClick(i.value)
                        }}>{i.title}</div>)}
                    </div>
                }
            </div>
        </div>
    );
};
