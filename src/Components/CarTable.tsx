import React from 'react';
import {TopCarPropsType} from "../App";

type CarTablePropsType = {
    list: Array<TopCarPropsType>
}

const CarTable = (props:CarTablePropsType ) => {
    return (
        <div>
            <table className={"homework1"}>
                {props.list.map(item=><tr><td>{item.manufacturer}</td><td>{item.model}</td></tr>)}
            </table>
        </div>
    );
};

export default CarTable;