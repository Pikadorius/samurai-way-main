import React, {ChangeEvent, SetStateAction, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BackTop} from "antd";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Example/Inputs'
}

export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue]=useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <div><input value={value} onChange={onChangeHandler}/> - {value}</div>
}

export const GetInputValueOnButton = () => {
    const [value, setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=>{
        const el=inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef}/>
        <button onClick={save}>Get value</button> actual value:{value}
    </div>
}

export const inputWithFixedValue = () => <input value={'HI'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}


