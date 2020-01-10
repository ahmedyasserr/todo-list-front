import React from "react";
import { Navbar as RBNavbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () =>{
    return (
        <RBNavbar bg="dark" expand="lg">
            <RBNavbar.Brand className="text-white">Todo Manager</RBNavbar.Brand>
            <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
            <RBNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link active>
                        <Link to="/" style={{textDecoration: "none", color : "white"}}>Todo List</Link>
                    </Nav.Link>
                </Nav>
            </RBNavbar.Collapse>
        </RBNavbar>
    );
};

