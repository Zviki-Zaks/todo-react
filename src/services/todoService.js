import { storageService } from './asyncService'

export const todoService = {
    query,
    getById,
    save,
    remove,
    getEmptyTodo,
}

const KEY = 'TODO_REACT'

// _createTodos()

async function query() {
    let todos = await storageService.query(KEY)
    if (!todos || !todos.length) {
        todos = [
            { _id: '45687', txt: 'Do this', isDone: true },
            { _id: '456324', txt: 'Do that', isDone: false },
        ]
        storageService.postMany(KEY, todos)
    }
    return todos
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

// function _createTodos() {
//     console.log('create')
//     let todos = JSON.parse(localStorage.getItem(KEY) || 'null')
//     console.log('todos', todos)
//     if (!todos || !todos.length) {
//         todos = [
//             { _id: '45687', txt: 'Do This', isDone: true },
//             { _id: '456324', txt: 'Do That', isDone: false },
//         ]
//     }
//     localStorage.setItem(KEY, JSON.stringify(todos))
// }