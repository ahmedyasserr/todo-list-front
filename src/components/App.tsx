import React from "react";
import { TodoList } from "./todo/TodoList";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import adminLogin from "./Forms/adminLogin";
import { Navbar } from "./Bootstrap-Components/Navbar";
import { FormEditTodo } from "./Forms/FormEditTodo";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div className="container-fluid mt-2">
                <Route path="/adminlogin" component={adminLogin} />
                <Route exact path="/list" component={TodoList} />
                <Route path="/add" component={FormEditTodo} />
                <Route exact path="/edit/:id" component={FormEditTodo} />
                <Redirect exact from="/" to="/adminlogin" />
            </div>
        </Router>
    );
};

export default App;
