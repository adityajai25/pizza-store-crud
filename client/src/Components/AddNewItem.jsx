import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    price: Yup.number().required('Price is required'),
    description: Yup.string().required('Description is required'),
    size: Yup.string().required('Size is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:3000/pizzas', values).then(() => {
      alert('Pizza added successfully!');
      resetForm();
    });
  };

  return (
    <Formik
      initialValues={{ name: '', price: '', description: '', size:'' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className="mb-3">
            <label>Name</label>
            <Field name="name" className="form-control" />
            <ErrorMessage name="name" className="text-danger" component="div" />
          </div>
          <div className="mb-3">
            <label>Price</label>
            <Field name="price" type="number" className="form-control" />
            <ErrorMessage name="price" className="text-danger" component="div" />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <Field name="description" className="form-control" />
            <ErrorMessage name="description" className="text-danger" component="div" />
          </div>
          <div className="mb-3">
            <label>Size</label>
            <Field name="size" className="form-control" />
            <ErrorMessage name="size" className="text-danger" component="div" />
          </div>
          <button type="submit" className="btn btn-success">Add Pizza</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewItem;
