import axios from "axios"
import { Todo } from "../models/todo"

export const getTodos = () => {
    return axios.get<Todo[]>("/api/todos").then((res) => res.data)
}

export const postTodo = (data: Todo) => {
    return axios.post("/api/todos", data)
}

export const editTodo = ({ id, ...rest }: Todo) => {
    return axios.put(`/api/todos/${id}`, rest)
}

export const deleteTodo = (id: Todo['id']) => {
    return axios.delete(`/api/todos/${id}`).then((res) => res)
}