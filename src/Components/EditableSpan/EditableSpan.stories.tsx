import EditableSpan from "./EditableSpan";
import {useState} from "react";

export default {
    title: 'Example/Editable Span',
    component: EditableSpan
}

export const EditableSpanExample = () => {
    const [title, setTitle]=useState('Hello')
    console.log(title)
    return <EditableSpan text={title} onTextChange={setTitle}/>
}