import React from 'react';
import {TopCarPropsType} from "../App";

type CarTablePropsType = {
    cars: Array<TopCarPropsType>
}

const CarTable = (props: CarTablePropsType) => {
    console.log("CarTable rendering...")
    return (
        <div className={'test'}>
            <table>
                <tbody>
                <tr>
                    <th>№</th>
                    <th>Mark</th>
                    <th>Model</th>
                </tr>
                {props.cars.map((item, index) => <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{item.manufacturer}</td>
                    <td>{item.model}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default CarTable;