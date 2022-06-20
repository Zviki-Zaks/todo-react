import React from 'react'

export const TodoPreview = (props) => {
    const { todo, removeTodo, onSelectTodo } = props

    const onRemove = (ev) => {
        ev.stopPropagation()
        removeTodo(todo._id)
    }

    return (
        <section className="todo-preview" onClick={() => onSelectTodo(todo._id)}>
            <button onClick={onRemove}>x</button>
            <p>{todo.txt}</p>
        </section>
    )
}
