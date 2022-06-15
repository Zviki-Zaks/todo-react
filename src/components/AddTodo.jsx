import { thisExpression } from '@babel/types'
import React, { Component, createRef } from 'react'

export default class AddTodo extends Component {

    state = {
        txt: ''
    }

    inputRef = createRef()

    componentDidMount() {
        console.log(this.props.todo)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.todo !== this.props.todo) {
            console.log('update')
            const txt = this.props.todo?.txt || ''
            this.setState({ txt })
            if (txt) this.inputRef.current.focus()
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
        if (txt.length <= 0) return this.onBlurInput()
        await this.props.saveTodo(txt)
        this.setState({ txt: '' })

    }

    onBlurInput = () => {
        if (this.props.todo) {
            this.props.selectTodo()
        }
    }

    render() {
        console.log('add render')
        const { txt } = this.state
        return (
            <section className="add-todo">
                <input ref={this.inputRef} type="text" name="txt" id="txt" value={txt} onChange={this.handleChange} onKeyUp={({ key }) => { if (key === 'Enter') this.addTodo() }} onBlur={this.onBlurInput} placeholder="Add New Todo" />
                <button onClick={this.addTodo}>+</button>
            </section>
        )
    }
}
