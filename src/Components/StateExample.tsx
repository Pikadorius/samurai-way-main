import React, {useState} from 'react';

const StateExample = () => {
    console.log("StateExample rendering")

    let [a, setA] = useState(0);

    const OnClickHandler = () => {
        setA(++a);
    }
    const ResetButton = () => {
        setA(0);
    }


    return (
        <div className={'BorderedComponent'}>
            <h1>{a}</h1>
            <button onClick={OnClickHandler}>Number of clicks</button>
            <button onClick={ResetButton}>Reset</button>
        </div>
    );
};

export default StateExample;