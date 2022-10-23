import React, {useState} from 'react';
import FullInput from './InputTests/FullInput';

const NewComponentForInputs = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    return (
        <div>
            <FullInput/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default NewComponentForInputs;