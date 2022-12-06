import React, {memo, useCallback, useMemo, useState} from "react";
import {ItemType} from '../Components/CustomSelect/MySelect';
import button from '../Components/Button';


export default {
    title: 'Example/useMemo and useCallback demo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    /*
        const getFact = (num: number): number => {
            if (num === 0) return 1;
            else return getFact(num - 1) * num;
        }*/

    // useMemo save result and rewrite it only if [a] will be changed (so we don't launch calculations on every useState change)
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



// memo saves component to memory and if props after rerender parent didn't change - child do not rerender
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

    // filter rewrites on every useState change, so when we wrap it in useMemo - it will be the same if [users] didn't change
    const filteredUsers = useMemo(() => {
        return users.filter(i => i.toLowerCase().includes('o'))
    }, [users])


    return <>
        <button onClick={() => setCounter(counter + 1)}>Send message</button>
        <button onClick={addNewName}>Add new user</button>
        {counter}
        <Users users={filteredUsers}/>
    </>
}


const SelectElement = memo((props: { items: ItemType[] }) => {
    console.log('render select element')
    return <ul>{props.items.map((el, i) => <li key={i}>{el.title}</li>)}</ul>
})

export const SelectorMemoExample = () => {
    console.log('Selectors rendering')
    const [count, setCount] = useState(0)
    const [state, setState] = useState<ItemType[]>([{id: 2, value: 1, title: 'Minsk'}, {
        id: 3,
        value: 2,
        title: 'Moscow'
    }, {
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
        <button onClick={() => setState([...state, {id: 3, title: 'Peter', value: 5}])}>add new user</button>
        <SelectElement items={state}/>
        <SelectElement items={citiesWithM}/>
        <SelectElement items={citiesFromUkr}/>
    </div>
}




type BooksPropType = {
    books: string[]
    addBook: ()=>void
}

const Books = memo((props: BooksPropType) => {
    console.log('Secret books rendering')
    return <div>
        <button onClick={props.addBook}>Add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
})

export const LikeUseCallback = () => {
    console.log('LikeUseCallback rendering')
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<string[]>(['React', 'JS', 'CSS', 'Redux'])


    // useCallback almost the same as useMemo, but it shouldn't return function, it is only saves it to memory
    // we must wrap all callbacks, that going to component with memo - in useCallback
    const addBook = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    },[books])

    const filteredBooks = useMemo(() => {
        return books.filter(b => b.toLowerCase().includes('r'))
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>Send message</button>
        {counter}
        <Books books={filteredBooks} addBook={addBook}/>
    </>
}
