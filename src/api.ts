import axios from "axios"
import { Todo } from "./types"

export const getTodos = () => {
    return axios.get<Todo[]>("http://localhost:3000/todos").then((res) => res.data)
}

export const postTodo = (data: { id: number, title: string }) => {
    return axios.post("http://localhost:3000/todos", data)
}

export const deleteTodo = (id: number) => {
    return axios.delete(`http://localhost:3000/todos/${id}`).then((res) => res)
}