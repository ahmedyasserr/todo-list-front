import React from "react";
import { TodoList } from "./todo/TodoList";
import DeleteTodo from "./Forms/DeleteTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FormEditTodo } from "./Forms/FormEditTodo";
import adminLogin from "./Forms/adminLogin";
import { Navbar } from "./Bootstrap-Components/Navbar";
import { AdminModal } from "./Bootstrap-Components/AdminModal";

const App: React.FC = () => {
    return (
        <Router>
            {/* TODO create AppNav component */}
            <AdminModal />
            <Navbar />
            <div className="container-fluid mt-2">
                <Route exact path="/list" component={TodoList} />
                <Route exact path="list/add" component={FormEditTodo} />
                <Route exact path="list/edit/:id" component={FormEditTodo} />
                <Route path="list/delete" component={DeleteTodo} />
                <Route path="list/adminlogin" component={adminLogin} />
            </div>
        </Router>
    );
};

export default App;
