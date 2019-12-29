import React from "react";
import { TodoList } from "./todo/TodoList";
import DeleteTodo from "./Forms/DeleteTodo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FormEditTodo } from "./Forms/FormEditTodo";
import adminLogin from "./Forms/adminLogin";

const App: React.FC = () => {
    return (
        <Router>
            {/* TODO create AppNav component */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand">Todo Manager</h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Add Todo
                            </Link>
                        </li> */}
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Todo List
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/delete" className="nav-link">
                                Delete Todo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adminlogin" className="nav-link">
                                Edit Todo
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
            <div className="container-fluid mt-2">
                <Route exact path="/" component={TodoList} />
                <Route exact path="/add" component={FormEditTodo} />
                <Route exact path="/edit/:id" component={FormEditTodo} />
                <Route path="/delete" component={DeleteTodo} />
                <Route path="/adminlogin" component={adminLogin} />
            </div>
        </Router>
    );
};

export default App;
