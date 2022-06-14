import React from 'react'

export default function TodoPreview(props) {
    const { todo, removeTodo } = props
    return (
        <section className="todo-preview">
            <button onClick={() => removeTodo(todo._id)}>x</button>
            <p>{todo.txt}</p>
        </section>
    )
}