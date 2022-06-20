import React, { useState } from 'react'

export const AddTodo = ({ saveTodo }) => {

    const [txt, setTxt] = useState('')
    const handelChange = ({ target }) => {
        const filed = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setTxt(value)
    }
    const addTodo = async () => {
        if (txt) {
            await saveTodo(txt)
            setTxt('')

        }
    }

    return (
        <section className="add-todo">
            <input type="text" name="txt" id="txt" value={txt} onChange={handelChange} placeholder="Add New Todo" onKeyUp={(ev) => { if (ev.key === 'Enter') return addTodo() }} />
            <button className="add-btn" onClick={addTodo}>+</button>
        </section>
    )
}
