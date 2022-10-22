import React from 'react';
import {StudentsPropsType} from "../App";

type NewComponentPropsType = {
    students: Array<StudentsPropsType>
}

const NewComponent = ({students}: NewComponentPropsType) => {
    return (
        <div>
            <ol>
                {students.map(item => {
                    return <li key={item.id}>Name: {item.name}. Age: {item.age}</li>
                })}
            </ol>
        </div>
    );
};

export default NewComponent;
