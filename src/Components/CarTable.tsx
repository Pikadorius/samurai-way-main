import React from 'react';
import {TopCarPropsType} from "../App";

type CarTablePropsType = {
    list: Array<TopCarPropsType>
}

const CarTable = (props:CarTablePropsType) => {
    return (
        <div className={'test'}>
            <table>
                {props.list.map((item,index)=><tr key={index+1}><th>{index+1}</th><td>{item.manufacturer}</td><td>{item.model}</td></tr>)}
            </table>
        </div>
    );
};

export default CarTable;