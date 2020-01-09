import React, { FC } from "react";
import { Link } from "react-router-dom";

// TODO Improve UI
export const TodoListToolbar: FC = (props: any) => {
    return (
        <div className="row">
            <Link to="/add" className="btn btn-primary col-2">
                Add Todo
            </Link>
        </div>
    );
};
