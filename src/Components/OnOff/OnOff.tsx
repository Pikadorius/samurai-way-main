import React from 'react';
import s from './OnOff.module.css'

export type OnOffType = {
    turndedOn: boolean
    change: () => void
}


const OnOff: React.FC<OnOffType> = ({turndedOn, change}) => {
    const bulbClass = turndedOn ? `${s.bulb} ${s.bulbOn}` : `${s.bulb} ${s.bulbOff}`
    const armClass = turndedOn ? s.armOn : `${s.armOn} ${s.armOff}`

    return (
        <div className={s.block}>
            <div className={s.switch} onClick={change}>
                <div className={armClass}>
                </div>
            </div>
            <div className={bulbClass}>
            </div>
        </div>
    );
};

export default OnOff;