import React, { Component } from 'react'
import { todoService } from '../services/todoService'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default class TodoApp extends Component {

    state = {
        todos: null,
        selectedTodo: null,
    }
    componentDidMount() {
        this.loadTodos()
    }

    loadTodos = async () => {
        const todos = await todoService.query()
        this.setState({ todos: todos })

    }

    removeTodo = async (todoId) => {
        await todoService.remove(todoId)
        this.loadTodos()
    }

    saveTodo = async (txt) => {
        const { selectedTodo } = this.state
        const todo = selectedTodo ?
            await todoService.getById(selectedTodo._id)
            : todoService.getEmptyTodo()
        todo.txt = txt
        await todoService.save(todo)
        this.selectTodo()
        this.loadTodos()
    }

    selectTodo = async (todoId) => {
        const todo = await todoService.getById(todoId)
        this.setState({ selectedTodo: todo })
    }

    render() {
        console.log('render')
        const { todos, selectedTodo } = this.state
        return (
            <section className="todo-app">
                <div className="app-head">

                    <h1 className="app-title">Todo App</h1>
                </div>
                <AddTodo saveTodo={this.saveTodo} selectTodo={this.selectTodo} todo={selectedTodo} />
                {todos && <TodoList todos={todos} removeTodo={this.removeTodo} selectTodo={this.selectTodo} />}
            </section>
        )
    }
}
