import React, { Component } from 'react'
import { todoService } from '../services/todoService'
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

    render() {
        console.log('render')
        const { todos } = this.state
        return (
            <section>
                <h1>TodoApp</h1>
                {todos && <TodoList todos={todos} removeTodo={this.removeTodo} />}
            </section>
        )
    }
}
