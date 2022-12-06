import React, {memo, useState} from "react";

export default {
    title: 'Example/React.memo demo'
}

const NewMessagesCounter = memo((props: { count: number }) => {
    console.log('Counter rendering')
    return <div>{props.count}</div>
})

const Users = memo((props: { users: string[] , addUser:()=>void}) => {
    console.log('Users rendering')
    return <div>
        <button onClick={props.addUser}>add user</button>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const Example1 = () => {
    const [counter, setCounter]=useState<number>(0)
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
        <Users users={users} addUser={addNewName}/>
    </>
}