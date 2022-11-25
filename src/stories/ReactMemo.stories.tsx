import React, {useState} from "react";

export default {
    title: 'Example/React.memo demo'
}

const SecretNewMessagesCounter = (props: { count: number }) => {
    console.log('Counter rendering')
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: string[] }) => {
    console.log('Users rendering')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users=React.memo(SecretUsers);
const NewMessagesCounter=React.memo(SecretNewMessagesCounter)

export const Example1 = () => {
    const [counter, setCounter]=useState<number>(20)
    const [users, setUsers]=useState<string[]>(['Egor', 'Valera', 'Dimych'])

    const addNewName=()=>{
        const newName=prompt('Write new name:')
        newName && setUsers([...users, newName])
    }
    const addNameAndCounter = () => {
        const newName=prompt('Write new name:')
        newName && setUsers([...users, newName])
        setCounter(counter+1)
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>Send message</button>
        <button onClick={addNewName}>Add new user</button>
        <button onClick={addNameAndCounter}>Test</button>

        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}