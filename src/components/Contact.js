import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().matches(/^[0-9]+$/, "Must be a valid phone number").required('Required'),
    subject: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  return (
    <div className="p-8 bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-200 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-900">Contact Me</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            subject: '',
            address: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            setTimeout(() => {
              alert('Message sent successfully!');
              resetForm(); // Resets the form data
            }, 500);
          }}
        >
          {() => (
            <Form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-lg font-semibold text-purple-700" htmlFor="name">Name</label>
                <Field
                  name="name"
                  type="text"
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-lg font-semibold text-purple-700" htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-lg font-semibold text-purple-700" htmlFor="phone">Phone</label>
                <Field
                  name="phone"
                  type="text"
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-lg font-semibold text-purple-700" htmlFor="subject">Subject</label>
                <Field
                  name="subject"
                  type="text"
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Address Field */}
              <div>
                <label className="block text-lg font-semibold text-purple-700" htmlFor="address">Address</label>
                <Field
                  name="address"
                  type="text"
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-lg font-semibold text-purple-700" htmlFor="message">Message</label>
                <Field
                  name="message"
                  as="textarea"
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-semibold rounded-full hover:opacity-90 transition duration-200"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
