import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as yup from "yup";
import axios from "axios";
import {Redirect} from "react-router-dom";

const validationSchema = yup.object().shape({
    username : yup.string().required(),
    password : yup.string().required()
})

const adminLogin: React.FC = () => {
    return (
        <div>
                <Formik initialValues={{
                      username : '',
                      password : ''
                }} 
                validationSchema = {validationSchema}
                onSubmit={ async (values) => { //Lama 3mlt async await batal y3ml reset lel form
                    axios.post('http://localhost:4001/', values)
                    .then(res => console.log(res.data));
                    setTimeout(() =>{
                        console.log("logging the values", values)
                    }, 250);
                    return  <Redirect  to="/edit" />
                }}
                >
                    {({values,isSubmitting}) => (
                    <Form>
                         <div className="form-group col-md-6">
                             <h3 className="text-left mt-2">You must Login as admin to Edit todos.</h3>
                            <label>Username</label>
                            <Field type="text"  name="username" className="form-control"  placeholder="Enter Todo description"/>
                            <ErrorMessage name="username">{msg => <div className="text-danger mt-2">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password</label>
                            <Field type="password" name="password" className="form-control"  placeholder="Enter Todo responsible"/>
                            <ErrorMessage name="password">{msg => <div className="text-danger mt-2">{msg}</div>}</ErrorMessage>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-outline-primary mt-2 ml-3">Register</button>
                        {/* This line is only used during debugging. */}
                    {/* <pre className="mt-2">{JSON.stringify(values, null, 2)}</pre> */}
                    </Form>
                )}</Formik>
        </div>
    )
}

export default adminLogin