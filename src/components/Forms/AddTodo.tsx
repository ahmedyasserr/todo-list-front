import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { addTodo } from "../../api/todoApi";

const validationSchema = yup.object().shape({
    description: yup.string().required(),
    responsible: yup.string().required(),
});

const AddTodo: React.FC = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    description: "",
                    responsible: "",
                    priority: "Low",
                    isComplete: false,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    //Lama 3mlt async await batal y3ml reset lel form
                    await addTodo(values);
                    resetForm();
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <div className="form-group col-md-6">
                            <label>Todo description</label>
                            <Field
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Enter Todo description"
                            />
                            <ErrorMessage name="description">
                                {msg => <div className="text-danger mt-2">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Todo responsible</label>
                            <Field
                                type="text"
                                name="responsible"
                                className="form-control"
                                placeholder="Enter Todo responsible"
                            />
                            <ErrorMessage name="responsible">
                                {msg => <div className="text-danger mt-2">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <label className="col-md-12">Todo Priority</label>
                        <div className="form-check form-check-inline ml-3">
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    name="priority"
                                    value="Low"
                                />
                                Low
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    name="priority"
                                    value="Medium"
                                />
                                Medium
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    name="priority"
                                    value="High"
                                />
                                High
                            </label>
                        </div>
                        <br />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-outline-primary mt-2 ml-3"
                        >
                            Submit
                        </button>
                        {/* This line is only used during debugging. */}
                        {/* <pre className="mt-2">{JSON.stringify(values, null, 2)}</pre> */}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddTodo;
