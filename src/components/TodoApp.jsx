import React, { Component } from 'react'
import { todoService } from '../services/todoService'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default class TodoApp extends Component {

    state = {
        todos: null
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

    saveTodo = async (txt, todoId) => {
        console.log('txt', txt)
        const todo = todoId ?
            await todoService.getById(todoId)
            : todoService.getEmptyTodo()
        todo.txt = txt
        await todoService.save(todo)
        this.loadTodos()
    }

    render() {
        console.log('render')
        const { todos } = this.state
        return (
            <section>
                <h1>TodoApp</h1>
                <AddTodo saveTodo={this.saveTodo} />
                {todos && <TodoList todos={todos} removeTodo={this.removeTodo} />}
            </section>
        )
    }
}
