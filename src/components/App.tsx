import React from "react";
import { TodoList } from "./todo/TodoList";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import adminLogin from "./Forms/adminLogin";
import { Navbar } from "./Bootstrap-Components/Navbar";
import { AdminModal } from "./Bootstrap-Components/AdminModal";

const App: React.FC = () => {
    return (
        <Router>
            <AdminModal />
            <Navbar />
            <div className="container-fluid mt-2">
                <Route exact path="/list" component={TodoList} />
                <Route path="/adminlogin" component={adminLogin} />
                <Redirect exact from="/" to="/adminlogin" />
            </div>
        </Router>
    );
};

export default App;
