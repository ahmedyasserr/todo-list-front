import React from "react";
import { Todo } from "../../models/Todo";
import { Link } from "react-router-dom";

export const TodoRow: React.FC<{ todo: Todo }> = props => (
    <tr>
        <td>{props.todo.id}</td>
        <td>{props.todo.description}</td>
        <td>{props.todo.responsible}</td>
        <td>{props.todo.priority}</td>
        <td>{props.todo.isComplete}</td>
        <td>
            <Link to={"/edit" + props.todo.id}>Edit</Link>
        </td>
    </tr>
);
