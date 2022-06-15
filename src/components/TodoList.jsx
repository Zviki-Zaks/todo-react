import React, { Component } from 'react'
import TodoPreview from './TodoPreview'

export default class TodoList extends Component {


    render() {
        const { todos, removeTodo, selectTodo } = this.props
        return (
            <section className="todo-list">
                {todos.map(todo => <TodoPreview todo={todo} key={todo._id} removeTodo={removeTodo} selectTodo={selectTodo} />)}
            </section>
        )
    }
}

