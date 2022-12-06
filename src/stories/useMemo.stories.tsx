import React, {memo, useMemo, useState} from "react";
import {ItemType} from '../Components/CustomSelect/MySelect';


export default {
    title: 'Example/useMemo demo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    /*
        const getFact = (num: number): number => {
            if (num === 0) return 1;
            else return getFact(num - 1) * num;
        }*/

    const resultA = useMemo(() => {
        let start = 1;
        for (let i = 1; i <= a; i++) {
            start *= i;
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                fake += Math.random()
            }
        }
        return start;
    }, [a])

    let start = 1;
    let result2 = (num: number) => {
        for (let i = 1; i <= num; i++) {
            start *= i;
        }
        return start
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {result2(b)}
        </div>
    </>
}

const Users = memo((props: { users: string[] }) => {
    console.log('Secret users rendering')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
})


export const HelpsWithReactMemoExample = () => {
    console.log('HelpsWithReactMemoExample rendering')
    const [counter, setCounter] = useState<number>(20)
    const [users, setUsers] = useState<string[]>(['Egor', 'Valera', 'Dimych', 'Kolya'])

    const addNewName = () => {
        const newName = prompt('Write new name:')
        newName && setUsers([...users, newName])
    }
/*
    const filteredUsers = useMemo(() => {
        return users.filter(i => i.toLowerCase().includes('o'))
    }, [users])*/


    return <>
        <button onClick={() => setCounter(counter + 1)}>Send message</button>
        <button onClick={addNewName}>Add new user</button>
        {counter}
        <Users users={users}/>
    </>
}


const SelectElement = memo((props:{items: ItemType[]}) => {
    console.log('render select element')
    return <ul>{props.items.map((el,i)=><li key={i}>{el.title}</li>)}</ul>
})

export const SelectorMemoExample = () => {
    console.log('Selectors rendering')
    const [count, setCount] = useState(0)
    const [state, setState] = useState<ItemType[]>([{id: 2, value: 1, title: 'Minsk'}, {id: 3, value: 2, title: 'Moscow'}, {
        id: 1,
        value: 3,
        title: 'Kiev'
    }, {id: 1, value: 4, title: 'Lviv'}])

    const citiesWithM = useMemo(() => {
        console.log('rewrite cities with M')
        return state.filter(c => c.title.toLowerCase().includes('m'))
    }, [state])


    const citiesFromUkr = useMemo(() => {
        console.log('rewrite cities from Ukr')
        return state.filter(c => c.id === 1)
    }, [state])


    return <div style={{display: 'flex'}}>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={()=>setState([...state, {id:3, title:'Peter', value:5}])}>add new user</button>
        <SelectElement items={state}/>
        <SelectElement items={citiesWithM}/>
        <SelectElement items={citiesFromUkr}/>
    </div>
}