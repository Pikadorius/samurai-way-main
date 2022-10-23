import React, {useState} from 'react';
import Button from './Button';

const StateExample = () => {
    console.log("StateExample rendering")

    let [a, setA] = useState(0);

    const IncreaseValue = () => {
        setA(++a);
    }
    const DecreaseValue = () => {
        setA(--a);
    }
    const ResetButton = () => {
        setA(0);
    }

    return (
        <div className={'BorderedComponent'}>
            <h1>{a}</h1>
            <Button name={'Increase'} callBack={IncreaseValue}/>
            <Button name={'Decrease'} callBack={DecreaseValue}/>
            <Button name={'Reset'} callBack={ResetButton}/>
        </div>
    );
};

export default StateExample;