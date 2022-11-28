import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    text: string
    onTextChange: (text: string) => void
}

const EditableSpan = React.memo((props: EditableSpanType) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.text)
    const [error, setError] = useState(false)

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => setEditMode(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onTextChangeCallback = () => {
        if (title.trim()) {
            setError(false)
            props.onTextChange(title)
            offEditMode()
        } else {
            setError(true)
        }
    }

    const onEnterCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onTextChangeCallback()
        }
    }

    return editMode
        ? <input placeholder={error ? 'Error! Write something!' : 'Write something...'} value={title}
                 onChange={onChangeHandler} autoFocus onBlur={onTextChangeCallback}
                 onKeyDown={onEnterCallback}/>
        : <span onDoubleClick={onEditMode}>{props.text}</span>
})

export default EditableSpan;