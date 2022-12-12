import React, {useState} from 'react';

const Clock = () => {
    console.log('Clock rendering')
    const [timer, setTimer] = useState<number>()
    const [state, setState] = useState(new Date())
    return (
        <div>
            <h2>{state.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock;