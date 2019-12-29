import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object().shape({
    id : yup.number().required("please enter an ID"),
})

const DeleteTodo: React.FC = () => {
    return (
        <div>
                <Formik initialValues={{
                      id: ''
                }} 
                validationSchema = {validationSchema}
                onSubmit={ async (values,{ resetForm }) => { //Lama 3mlt async await batal y3ml reset lel form
                   await axios.post('http://localhost:4000/delete', values)
                    .then(res => console.log(res.data));
                    setTimeout(() =>{
                        console.log("deleting todo with id:", values)
                    }, 250);
                    resetForm();
                }}
                >
                    {({isSubmitting}) => (
                    <Form>
                         <div className="form-group col-md-6">
                            <label>Todo ID</label>
                            <Field type="text"  name="id" className="form-control"  placeholder="Enter Todo ID"/>
                            <ErrorMessage name="id">{msg => <div className="text-danger mt-2">{msg}</div>}</ErrorMessage>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-outline-primary mt-2 ml-3">Delete</button>
                    </Form>
                )}</Formik>
        </div>
    )
}

export default DeleteTodo