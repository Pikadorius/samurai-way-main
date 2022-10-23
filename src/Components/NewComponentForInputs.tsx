import React, {useState} from 'react';
import FullInput from './InputTests/FullInput';

type MessageType = {
    message: string;
}

const NewComponentForInputs = () => {
    const [message, setMessage] = useState<Array<MessageType>>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const addMessage = (title:string) => {
        let newMessage={message: title}
        setMessage([newMessage,...message])
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default NewComponentForInputs;