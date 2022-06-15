import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        txt: ''
    }

    componentDidMount() {
        console.log(this.props.todo)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.todo !== this.props.todo) {
            console.log('update')
            const txt = this.props.todo?.txt || ''
            this.setState({ txt })
        }
    }

    handleChange = ({ target }) => {
        const filed = target.name
        const value = target.type === 'number' ? (+target.value || '0') : target.value
        this.setState({ [filed]: value })
    }

    addTodo = async () => {
        const { txt } = this.state
        console.log('invoked')
        if (txt.length <= 0) return
        await this.props.saveTodo(txt)
        this.setState({ txt: '' })

    }

    render() {
        console.log('add render')
        const { txt } = this.state
        return (
            <section className="add-todo">
                <input type="text" name="txt" id="txt" value={txt} onChange={this.handleChange} onKeyUp={({ key }) => { if (key === 'Enter') this.addTodo() }} placeholder="Add New Todo" />
                <button onClick={this.addTodo}>+</button>
            </section>
        )
    }
}
