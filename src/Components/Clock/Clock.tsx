import React, {FC, memo, useEffect, useState} from 'react';
import s from './Clock.module.css'

type ClockPropsType = {
    isAnalog: boolean
    setAnalog: () => void
}

const Clock: FC<ClockPropsType> =memo((props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        })
        return () => clearInterval(timer)
    }, [])


    const getTwoDigitString = (n: number) => {
        return n < 10 ? "0" + n : n;
    }

    const seconds = getTwoDigitString(date.getSeconds())
    const minutes = getTwoDigitString(date.getMinutes())
    const hours = getTwoDigitString(date.getHours())

    const secondsStyle = {
        transform: `rotate(${+seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${+minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${+hours * 30}deg)`
    };


    return (<div className={s.clock}>
        <h2>Clock</h2>
        {props.isAnalog?
        <>
            <h3 className={s.digitalClock}>{date.toLocaleTimeString()}</h3>

        </> :

                <div>
                    <div className={s.analogClock}>
                        <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                        <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                        <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
                    </div>
                </div>}
        <button className={s.btn} onClick={props.setAnalog}>Change view</button>
    </div>);
});

export default Clock;