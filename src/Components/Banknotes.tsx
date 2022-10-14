import React, {useState} from 'react';
import Button from './Button';
import {log} from 'util';

const Banknotes = () => {
    console.log('Banknotes rendering')


    type BanknotesType = {
        banknots: string
        value: number
        number: string
    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter]=useState("All");

    let currentMoney: Array<BanknotesType> = money;
    currentMoney = filter==="Rubles" ? money.filter(item => item.banknots === "RUBLS"): filter==="Dollars"? money.filter(item => item.banknots === "Dollars"): money;

    const onClickFilterHandler=(nameButton: 'Rubles' | 'Dollars' | 'All')=>{
        setFilter(nameButton);
    }


    return (
        <div className={'BorderedComponent'}>
            <div className={'test'}>
                <table>
                    <tbody>
                    {
                        currentMoney.map((item, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{item.banknots}</td>
                                    <td>{item.value}</td>
                                    <td>{item.number}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <button onClick={()=>onClickFilterHandler("All")}>All</button>
 //           <button onClick={()=>onClickFilterHandler("Rubles")}>Rubles</button>
            <button onClick={()=>onClickFilterHandler("Dollars")}>Dollars</button>
        </div>
    );
}
export default Banknotes;