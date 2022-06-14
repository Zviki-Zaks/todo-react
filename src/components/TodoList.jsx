import React, { Component } from 'react'
import TodoPreview from './TodoPreview'

export default class TodoList extends Component {


    render() {
        const todos = this.props.todos
        return (
            <section>
                {todos.map(todo => <TodoPreview todo={todo} key={todo._id} removeTodo={this.props.removeTodo} />)}
            </section>
        )
    }
}

