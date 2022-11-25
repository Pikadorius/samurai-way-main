import React, {useMemo, useState} from "react";

export default {
    title: 'Example/useMemo demo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const getFact = (num: number): number => {
        if (num === 0) return 1;
        else return getFact(num - 1) * num;
    }

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

const SecretUsers = (props: { users: string[] }) => {
    console.log('Secret users rendering')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(SecretUsers);

export const HelpsWithReactMemoExample = () => {
    console.log('HelpsWithReactMemoExample rendering')
    const [counter, setCounter] = useState<number>(20)
    const [users, setUsers] = useState<string[]>(['Egor', 'Valera', 'Dimych','Kolya'])

    const addNewName=()=>{
        const newName=prompt('Write new name:')
        newName && setUsers([...users, newName])
    }

    const filteredUsers=useMemo(()=>{
        return users.filter(i=>i.toLowerCase().includes('o'))
    },[users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>Send message</button>
        <button onClick={addNewName}>Add new user</button>
        {counter}
        <Users users={filteredUsers}/>
    </>
}