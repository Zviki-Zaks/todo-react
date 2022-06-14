import React from 'react'

export default function TodoPreview(props) {
    const { todo } = props
    return (
        <section>{todo.txt}</section>
    )
}