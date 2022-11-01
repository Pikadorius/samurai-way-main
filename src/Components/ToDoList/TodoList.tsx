import React, {useState} from 'react';
import Input from '../InputTests/Input';
import Button from '../Button';
import s from './ToDoList.module.css'

type AffairType={
    id: number
    name: string
}

type AffairsType = AffairType[]

const TodoList = () => {

    const [affairs, setAffairs] = useState<AffairsType>([
        {id:1, name: 'Learn about INPUT'},
        {id:2, name: 'Learn about callbacks'},
        {id:3, name: 'Write todolist'},
    ]);
    const [title, setTitle]=useState('');

    const addAffair = () => {
        let newAffair={id:affairs[affairs.length-1].id+1, name:title}
        setAffairs([...affairs, newAffair])
        setTitle("")
    }

    const deleteAffairs = (id:number) => {
        setAffairs(affairs.filter(i=>i.id!==id));
    }


    return (
        <div className={s.wrapper}>
            <h2>Need to do:</h2>
            <ol>
                {affairs.map((affair)=>{
                    return (
                        <li key={affair.id}>
                            {affair.name}
                           {/* <button onClick={(event)=>deleteAffairs(affair.id)}>-</button>*/}
                            <Button name={'-'} callBack={()=>deleteAffairs(affair.id)}/>
                        </li>
                    )
                })}
            </ol>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={addAffair}/>
        </div>
    );
};

export default TodoList;