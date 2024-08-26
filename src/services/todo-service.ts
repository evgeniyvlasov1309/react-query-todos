import { Todo } from "../models/todo"
import { axiosInstance } from "./axios"

export const getTodos = () => {
    return axiosInstance.get<Todo[]>("/todos").then((res) => res.data)
}

export const postTodo = (data: Todo) => {
    return axiosInstance.post("/todos", data)
}

export const editTodo = ({ id, ...rest }: Todo) => {
    return axiosInstance.put(`/todos/${id}`, rest)
}

export const deleteTodo = (id: Todo['id']) => {
    return axiosInstance.delete(`/todos/${id}`).then((res) => res)
}