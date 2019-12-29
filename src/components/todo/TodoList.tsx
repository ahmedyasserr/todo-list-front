import React, { FC, useState, useEffect } from "react";
import { getAllTodos } from "../../api/todoApi";
import { TodoRow } from "./TodoRow";
import { Todo } from "../../models/Todo";

export const TodoList: FC = (props: any) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
            setIsLoaded(true);
        };
        fetchData();
    }, []);

    return (
        <div className="content-fluid">
            <h2 className="text-center">Todo List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Responsible</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todoz: any) => (
                        <TodoRow key={todoz.id} todo={todoz} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
