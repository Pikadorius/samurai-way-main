import React, {ChangeEvent, useState} from 'react';


const FullInput = () => {
    let [title, setTitle] = useState('')
    console.log('this is title -', title);

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value);
    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>{}}>+</button>
        </div>
    );
}

export default FullInput;