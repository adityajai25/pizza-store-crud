import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: '',
    price: '',
    description: '',
    size: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/pizzas/${id}`).then(response => {
      setInitialValues(response.data);
    });
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    // price: Yup.number().required('Price is required'),
    // description: Yup.string().required('Description is required'),
    // size: Yup.string().required('Size is required'),
  });

  const handleSubmit = (values) => {
    axios.put(`http://localhost:3000/pizzas/${id}`, values).then(() => {
      alert('Pizza updated successfully!');
      navigate('/display');
    });
  };

  return (
    <div>
      <h2>Update Pizza</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
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
            <button type="submit" className="btn btn-primary">Update Pizza </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateItem;
