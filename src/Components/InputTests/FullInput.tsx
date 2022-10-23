import React, {ChangeEvent, useState} from 'react';

type FullInputType= {
    addMessage: (title:string)=>void
}

const FullInput = (props:FullInputType) => {
    let [title, setTitle] = useState('')
    console.log('this is title -', title);

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler=()=>{
        props.addMessage(title);
        setTitle("")
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
}

export default FullInput;