import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbare: React.FC<>{
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand>Todo Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Add Todo</Link></Nav.Link>
                    <Nav.Link><Link to="/list">Todo List</Link></Nav.Link>
                    <Nav.Link><Link to="/delete">Delete</Link></Nav.Link>
                    <Nav.Link><Link to="/adminlogin">Edit Todo</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbare
