import React, {useState} from 'react';
import s from './Counter.module.css'

type CounterType = {
    minValue: number
    maxValue: number
    step: number
}

const Counter: React.FC<CounterType> = ({minValue, maxValue, step}) => {

    const [currentValue, setCurrentValue] = useState<number>(minValue)
    const increaseValue = () =>{
        let value=currentValue+step;
        if (value<=maxValue) setCurrentValue(value);
        else setCurrentValue(maxValue)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counterWindow}>
                <div
                    className={currentValue === maxValue ? `${s.counterItem} ${s.maxCounterItem}` : s.counterItem}>{currentValue}</div>
            </div>
            <div className={s.buttonWindow}>
                <button className={s.buttonItem} onClick={increaseValue}
                        disabled={currentValue > maxValue}>Increase
                </button>
                <button className={s.buttonItem} onClick={() => setCurrentValue(minValue)}
                        disabled={currentValue === minValue}>Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;