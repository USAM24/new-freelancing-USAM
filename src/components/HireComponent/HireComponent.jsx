import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    jobTitle: Yup.string().required('Job title is required'),
    projectDescription: Yup.string().required('Project description is required'),
    deadline: Yup.date().required('Deadline is required'),
    budget: Yup.number().required('Proposed budget is required').positive('Budget must be a positive number'),
    skills: Yup.string().required('Skills are required'),
    attachments: Yup.mixed(),
    comments: Yup.string(),
});

const HireComponent = () => {
    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log('Form Data:', values);
    };

    return (
        <div className=" px-16 p-4 rounded-lg shadow-lg">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    jobTitle: '',
                    projectDescription: '',
                    deadline: '',
                    budget: '',
                    skills: '',
                    attachments: null,
                    comments: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form>
                        {/* Client Information */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        {/* Job Details */}
                        <div className="mb-4">
                            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                            <Field
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="jobTitle" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description</label>
                            <Field
                                as="textarea"
                                id="projectDescription"
                                name="projectDescription"
                                rows="4"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="projectDescription" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                            <Field
                                type="date"
                                id="deadline"
                                name="deadline"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="deadline" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        {/* Budget */}
                        <div className="mb-4">
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Proposed Budget</label>
                            <Field
                                type="number"
                                id="budget"
                                name="budget"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="budget" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        {/* Skills Required */}
                        <div className="mb-4">
                            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Key Skills</label>
                            <Field
                                type="text"
                                id="skills"
                                name="skills"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="skills" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        {/* Attachments */}
                        <div className="mb-4">
                            <label htmlFor="attachments" className="block text-sm font-medium text-gray-700">Upload Files (Optional)</label>
                            <input
                                type="file"
                                id="attachments"
                                name="attachments"
                                onChange={(event) => setFieldValue('attachments', event.currentTarget.files[0])}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        {/* Additional Information */}
                        <div className="mb-4">
                            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments or Questions</label>
                            <Field
                                as="textarea"
                                id="comments"
                                name="comments"
                                rows="4"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#037C6A] focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-[#037C6A] text-white font-bold rounded-md shadow-sm hover:bg-[#138C6A] focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default HireComponent;
