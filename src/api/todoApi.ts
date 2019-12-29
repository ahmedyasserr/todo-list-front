import axios, { AxiosRequestConfig } from "axios";
import { allTodos } from "../mock/todo";

const baseURL = "http://localhost:4000"; // TODO get this url from .env file

export async function getAllTodos() {
    // const config: AxiosRequestConfig = {
    //     url: "/list",
    //     baseURL,
    //     method: "GET",
    // };
    try {
        // const response = await axios.request(config);
        // return response.data;
        return allTodos;
    } catch (error) {
        console.log(error);
    }
    return [];
}

export async function addTodo(todo: any) {
    const config: AxiosRequestConfig = {
        url: `/`, // TODO rename to /list
        baseURL,
        method: "POST",
        data: todo
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
        url: `/delete/${id}`, // TODO rename to /list/delete
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
