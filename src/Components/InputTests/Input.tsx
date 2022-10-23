import React, {ChangeEvent} from 'react';


type InputType = {
    title: string
    setTitle: (title:string)=>void
}
const Input = (props:InputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;