import React from 'react';
import {ItemType} from '../Accordion/Accordion';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {action} from '@storybook/addon-actions';


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectDimych = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.value}
                    label="City"
                    onChange={props.onChange}
                >
                    <MenuItem value={1}>Minsk</MenuItem>
                    <MenuItem value={2}>Moscow</MenuItem>
                    <MenuItem value={3}>Kiev</MenuItem>
                </Select>
            </FormControl>

            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    );
};
