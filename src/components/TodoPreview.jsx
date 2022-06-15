import React from 'react'

export default function TodoPreview({ todo, removeTodo, selectTodo }) {

    const onRemove = (ev) => {
        ev.stopPropagation()
        removeTodo(todo._id)
    }

    return (
        <section className="todo-preview" onClick={() => selectTodo(todo._id)}>
            <button onClick={onRemove}>x</button>
            <p>{todo.txt}</p>
        </section>
    )
}