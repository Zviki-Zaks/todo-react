import React from 'react'
import { TodoPreview } from './TodoPreview'

export const TodoList = ({ todos, removeTodo, selectTodo }) => {
    return (
        <section className="todo-list">
            {todos.map(todo => <TodoPreview todo={todo} key={todo._id} removeTodo={removeTodo} selectTodo={selectTodo} />)}
        </section>
    )
}
