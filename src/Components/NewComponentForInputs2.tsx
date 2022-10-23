import React, {useState} from 'react';
import Input from './InputTests/Input';
import Button from './Button';

const NewComponentForInputs2 = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState('');

    const addMessage=()=> {
        setMessage([{message:title},...message])
        setTitle('')
    }

    const deleteMessage=()=> {
        let newMessage=[...message].slice(1);
        console.log(message, newMessage)
        setMessage(newMessage);
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={addMessage}/>
            <Button name={'-'} callBack={deleteMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default NewComponentForInputs2;