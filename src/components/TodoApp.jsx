import React, { useEffect, useState } from 'react'
import { todoService } from '../services/todoService'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

export const TodoApp = () => {

    const [todos, setTodos] = useState(null)
    const [selectedTodo, setSelectedTodo] = useState(null)

    useEffect(() => {
        loadTodos()

    }, [])

    const loadTodos = async () => {
        const todos = await todoService.query()
        setTodos(todos)
    }
    const removeTodo = async (todoId) => {
        await todoService.remove(todoId)
        loadTodos()
    }
    const selectTodo = async (todoId) => {
        const todo = await todoService.getById(todoId)
        setSelectedTodo(todo)
    }
    const saveTodo = async (txt) => {
        console.log('txt', txt)
        const todo = todoService.getEmptyTodo()
        todo.txt = txt
        // setSelectedTodo({ ...selectedTodo, txt })
        await todoService.save(selectedTodo)
        loadTodos()
    }

    return (
        <section className="todo-app">
            <div className="app-head">
                <h1 >Todo app</h1>

            </div>
            <AddTodo saveTodo={saveTodo} />
            {todos && <TodoList todos={todos} removeTodo={removeTodo} selectTodo={selectTodo} />}
        </section>
    )
}
