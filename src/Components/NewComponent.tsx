import React from 'react';
import {StudentsPropsType} from "../App";

type NewComponentPropsType = {
    students: Array<StudentsPropsType>
}

const NewComponent = (props: NewComponentPropsType) => {
    debugger
    return (
        <div>
            <ol>
                {props.students.map(item => {
                    return <li key={item.id}>Имя - {item.name}. Возраст - {item.age}</li>
                })}
            </ol>
        </div>
    );
};

export default NewComponent;
