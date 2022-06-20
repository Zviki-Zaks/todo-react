import React from 'react'

export const TodoPreview = (props) => {
    const { todo, removeTodo, selectTodo } = props

    const onRemove = (ev) => {
        ev.stopPropagation()
        removeTodo(todo._id)
    }

    const onSelectTodo = () => {
        selectTodo(todo._id)
    }

    return (
        <section className="todo-preview" onClick={onSelectTodo}>
            <button onClick={onRemove}>x</button>
            <p>{todo.txt}</p>
        </section>
    )
}
