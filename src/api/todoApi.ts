import axios, { AxiosRequestConfig } from "axios";
import { Todo } from "../models/Todo";

const baseURL = "http://localhost:4000"; // TODO get this url from .env file

export async function getAllTodos() {
    const config: AxiosRequestConfig = {
        url: "/list",
        baseURL,
        method: "GET",
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    return [];
}

export async function getTodoById(id: string): Promise<Todo | null> {
    const config: AxiosRequestConfig = {
        url: `/list/${id}`,
        baseURL,
        method: "GET",
    };
    try {
        const response = await axios.request(config);
        return response.data;
        // return allTodos.find(t => t.id === id) || null;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export async function updateTodoById(id: string, todo: Todo): Promise<Todo | null> {
    const config: AxiosRequestConfig = {
        url: `/list/${id}`,
        baseURL,
        method: "PATCH",
        data: todo,
    };
    try {
        const response = await axios.request(config);
        return response.data;
        // return allTodos.find(t => t.id === id) || null;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export async function addTodo(todo: Todo) {
    const config: AxiosRequestConfig = {
        url: `/list/add`, // TODO rename to /list
        baseURL,
        method: "POST",
        data: todo,
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTodoById(id: string) {
    const config: AxiosRequestConfig = {
        url: `list/delete/${id}`, // TODO rename to /list/delete
        baseURL,
        method: "POST",
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
