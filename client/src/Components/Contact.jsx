import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert('Message sent successfully!');
    resetForm();
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
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
              <label>Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" className="text-danger" component="div" />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <Field name="message" as="textarea" className="form-control" />
              <ErrorMessage name="message" className="text-danger" component="div" />
            </div>
            <button type="submit" className="btn btn-success">Send Message</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
