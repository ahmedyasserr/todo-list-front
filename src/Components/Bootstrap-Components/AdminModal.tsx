import React, {Component} from "react"
import {Modal} from "react-bootstrap"
import AdminLogin from "../Forms/adminLogin"

interface modalElements {
    showModal : boolean
}

export class AdminModal extends Component<{},modalElements>{
    constructor(props : modalElements){
        super(props)
        this.state ={
            showModal : true
        }
    }
     handleClose = () =>{
       this.setState({
           showModal : false
       })
    }
    render(){
        return (
        <Modal show={this.state.showModal} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Admin Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AdminLogin />
            </Modal.Body>
         </Modal>
        );
    }
};
