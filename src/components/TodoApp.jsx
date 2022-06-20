import React, { useEffect, useState } from 'react'
import { todoService } from '../services/todoService'
import { TodoList } from './TodoList'

export const TodoApp = () => {

    const [todos, setTodos] = useState(null)

    useEffect(() => {
        loadTodos()

    }, [])

    const loadTodos = async () => {
        const todos = await todoService.query()
        setTodos(todos)
    }

    return (
        <section className="todo-app">
            <div className="app-head">
                <h1 >Todo app</h1>
            </div>
            {todos && <TodoList todos={todos} />}
        </section>
    )
}
