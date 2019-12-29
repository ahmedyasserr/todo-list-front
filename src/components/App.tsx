import React from "react";
import TodoList from "./Forms/TodoList";
import DeleteTodo from "./Forms/DeleteTodo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTodo from "./Forms/AddTodo";
import adminLogin from "./Forms/adminLogin";
import EditTodo from "./Forms/EditTodo";

const App: React.FC = () => {
    return (
        <Router>
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
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Add Todo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list" className="nav-link">
                                Todo List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/delete" className="nav-link">
                                Delete Todo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adminlogin" className="nav-link">
                                Edit Todo
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid mt-2">
                <Route path="/" exact component={AddTodo} />
                <Route path="/list" component={TodoList} />
                <Route path="/delete" component={DeleteTodo} />
                <Route path="/adminlogin" component={EditTodo} />
                <Route path="/adminlogin" component={adminLogin} />
            </div>
        </Router>
    );
};

export default App;
