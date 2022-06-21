import React, { useEffect, useRef, useState } from 'react'

export const AddTodo = (props) => {

    const [txt, setTxt] = useState('')
    const inputRef = useRef(null)
    const handelChange = ({ target }) => {
        const value = target.value
        setTxt(value)
    }
    useEffect(() => {
        const txt = props.txt || ''
        setTxt(txt)
        txt ? inputRef.current.focus() : inputRef.current.blur()
    }, [props.txt])


    const addTodo = async () => {
        if (!txt) return
        props.saveTodo(txt)
    }
    const onBlurInput = () => {
        props.selectTodo()
    }

    return (
        <section className="add-todo">
            <input ref={inputRef} type="text" name="txt" id="txt" value={txt} onChange={handelChange} placeholder="Add New Todo" onKeyUp={(ev) => { if (ev.key === 'Enter') return addTodo() }} onBlur={onBlurInput} />
            <button className="add-btn" onClick={addTodo}>+</button>
        </section>
    )
}
