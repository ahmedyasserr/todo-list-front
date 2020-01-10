import React from "react";
import { TodoList } from "./todo/TodoList";
import DeleteTodo from "./Forms/DeleteTodo";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { FormEditTodo } from "./Forms/FormEditTodo";
import adminLogin from "./Forms/adminLogin";
import { Navbar } from "./Bootstrap-Components/Navbar";

const App: React.FC = () => {
    return (
        <Router>
            {/* TODO create AppNav component */}
            <Navbar />
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
