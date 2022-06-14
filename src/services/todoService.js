import { storageService } from './asyncService'

export const todoService = {
    query,
    getById,
    save,
    remove,
    getEmptyTodo,
}

const todos = [
    { _id: '45687', txt: 'Do This', isDone: true },
    { _id: '456324', txt: 'Do That', isDone: false },
]

const KEY = 'TODO_REACT'

async function query() {
    return await storageService.query(KEY)
}

async function getById(todoId) {
    return await storageService.get(KEY, todoId)
}

async function save(todo) {
    return todo._id ?
        await storageService.put(KEY, todo)
        : await storageService.post(KEY, todo)
}

async function remove(todoId) {
    return await storageService.remove(KEY, todoId)
}

function getEmptyTodo() {
    return {
        txt: '',
        isDone: false,
    }
}