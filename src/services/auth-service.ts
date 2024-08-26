import { User } from "../models/user"
import { axiosInstance } from "./axios"

interface AuthData {
    username: string
    password: string
}

interface AuthResponse {
    accessToken: string
    user: User
}

export const login = async (data: AuthData) => {
    const result = await axiosInstance.post<AuthResponse>("/login", data)
    return result.data
}

export const register = async (data: AuthData) => {
    const result = await axiosInstance.post<AuthResponse>("/register", data)
    return result.data
}