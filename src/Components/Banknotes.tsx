import React, {useState} from 'react';
import Button from './Button';
const Banknotes = () => {
    console.log('Banknotes rendering')

    type FilterType = 'Rubles' | 'Dollars' | 'All';

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

    const [filter, setFilter] = useState("All");

    let currentMoney: Array<BanknotesType> = money;
    currentMoney = filter === "Rubles" ? money.filter(item => item.banknots === "RUBLS") : filter === "Dollars" ? money.filter(item => item.banknots === "Dollars") : money;

    const onClickFilterHandler = (nameButton: FilterType) => {
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
                                <tr key={index}>
                                    <td>{item.banknots}</td>
                                    <td>{item.value}</td>
                                    <td>{item.number}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                    </tbody>
                </table>
                <button>+</button>
            </div>
            {/*<button onClick={() => onClickFilterHandler("All")}>All</button>
            <button onClick={() => onClickFilterHandler("Rubles")}>Rubles</button>
            <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>*/}
            <Button name={'All'} callBack={()=>onClickFilterHandler('All')}/>
            <Button name={'Rubls'} callBack={()=>onClickFilterHandler("Rubles")}/>
            <Button name={'Dollars'} callBack={()=>onClickFilterHandler("Dollars")}/>
        </div>
    );
}
export default Banknotes;