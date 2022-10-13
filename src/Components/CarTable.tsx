import React from 'react';
import {TopCarPropsType} from "../App";

type CarTablePropsType = {
    list: Array<TopCarPropsType>
}

const CarTable = (props: CarTablePropsType) => {
    console.log("CarTable rendering...")
    return (
        <div className={'test'}>
            <table>
                <tbody>
                {props.list.map((item, index) => <tr key={index + 1}>
                    <th>{index + 1}</th>
                    <td>{item.manufacturer}</td>
                    <td>{item.model}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default CarTable;