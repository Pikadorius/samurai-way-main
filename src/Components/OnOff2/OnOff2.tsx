import React, {useState} from 'react';

type OnOff2Type = {
    on: boolean
    onChange: (value:boolean)=>void;
}


const SecretOnOff2: React.FC<OnOff2Type> = (props) => {

    const [on, setOn] = useState<boolean>(props.on)

    const turnedOn = () => {
        setOn(true)
        props.onChange(true)
    }
    const turnedOff = () => {
        setOn(false)
        props.onChange(false)
    }

    const onStyle = {
        color: 'black',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '2px',
        padding: '2px',
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        color: 'black',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={turnedOn}>On</div>
            <div style={offStyle} onClick={turnedOff}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

const OnOff2=React.memo(SecretOnOff2)

export default OnOff2;