import React, { FC } from "react";
import { Link } from "react-router-dom";

// TODO Improve UI
export const TodoListToolbar: FC = (props: any) => {
    return (
        <div className="row justify-content-md-center mb-2">
            <Link to="/add" className="btn btn-outline-primary col-2">
                Add Todo
            </Link>
        </div>
    );
};
