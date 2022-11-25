import React, {useState} from 'react';
import Button from './Button';

type FilterType = 'Rub' | 'Dollars' | 'All' | 100 | 50;

type BanknotesType = {
    banknots: string
    value: number
    number: string
}


const SecretBanknotes = () => {
    console.log('Banknotes rendering')


    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUB', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUB', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUB', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<FilterType>("All");

    let currentMoney: Array<BanknotesType> =
        filter === "Rub" ? money.filter(item => item.banknots === "RUB") :
            filter === "Dollars" ? money.filter(item => item.banknots === "Dollars") :
                filter === 50 ? money.filter(item => item.value === 50) :
                    filter === 100 ? money.filter(item => item.value === 100) : money;

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
            <Button name={'All'} callBack={() => setFilter('All')}/>
            <Button name={'RUB'} callBack={() => onClickFilterHandler("Rub")}/>
            <Button name={'Dollars'} callBack={() => onClickFilterHandler("Dollars")}/>
            <Button name={'50'} callBack={() => onClickFilterHandler(50)}/>
            <Button name={'100'} callBack={() => onClickFilterHandler(100)}/>
        </div>
    );
}
const Banknotes=React.memo(SecretBanknotes)
export default Banknotes;