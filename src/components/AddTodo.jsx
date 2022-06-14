import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        txt: ''
    }

    handleChange = ({ target }) => {
        const filed = target.name
        const value = target.type === 'number' ? (+target.value || '0') : target.value
        this.setState({ [filed]: value })
    }

    addTodo = async ({ key }) => {
        if (key !== 'Enter') return
        await this.props.saveTodo(this.state.txt)
        this.setState({ txt: '' })
    }

    render() {
        const { txt } = this.state
        return (
            <section className="add-todo">
                <input type="text" name="txt" id="txt" value={txt} onChange={this.handleChange} onKeyUp={this.addTodo} placeholder="Add New Todo" />
            </section>
        )
    }
}
