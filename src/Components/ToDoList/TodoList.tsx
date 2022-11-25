import React, {useState} from 'react';
import Input from '../InputTests/Input';
import Button from '../Button';
import s from './ToDoList.module.css'
import {v1} from 'uuid';

type AffairType = {
    id: string
    name: string
}

type AffairsType = AffairType[]

const SecretTodolist = () => {

    const [affairs, setAffairs] = useState<AffairsType>([
        {id: v1(), name: 'Learn about INPUT'},
        {id: v1(), name: 'Learn about callbacks'},
        {id: v1(), name: 'Write todolist'},
    ]);
    const [title, setTitle] = useState('');

    const addAffair = () => {
        let newAffair = {id: v1(), name: title}
        setAffairs([...affairs, newAffair])
        setTitle("")
    }

    const deleteAffairs = (id: string) => {
        setAffairs(affairs.filter(i => i.id !== id));
    }


    return (
        <div className={s.wrapper}>
            <h2>Need to do:</h2>
            <ol>
                {affairs.map((affair) => {
                    return (
                        <li key={affair.id}>
                            {affair.name}
                            {/* <button onClick={(event)=>deleteAffairs(affair.id)}>-</button>*/}
                            <Button name={'-'} callBack={() => deleteAffairs(affair.id)}/>
                        </li>
                    )
                })}
            </ol>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={addAffair}/>
        </div>
    );
};
const TodoList=React.memo(SecretTodolist)

export default TodoList;