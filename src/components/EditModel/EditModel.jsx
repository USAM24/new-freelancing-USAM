import React, { useState } from 'react';

const EditModal = ({ isOpen, section, closeModal, saveChanges }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveChanges(section, formData);
        closeModal();
    };

    if (!isOpen) return null; // Return null if modal is not open

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Edit {section === 'image' ? 'Profile Image' : section === 'user' ? 'User Info' : 'Projects'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Conditionally render form fields based on section */}
                    {section === 'image' && (
                        <div className="mb-4">
                            <label className="block text-gray-700">Profile Image URL</label>
                            <input
                                type="file"
                                name="image"
                                className="w-full p-2 border rounded"
                                onChange={handleInputChange}
                            />
                        </div>
                    )}
                    {section === 'user' && (
                        <>
                            <div className="flex justify-between">
                            <div className="mb-4">
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Facebook Profile</label>
                                <input
                                    type="text"
                                    name="facebook"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Linkedin Profile</label>
                                <input
                                    type="text"
                                    name="linkedin"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">GitHub Profile</label>
                                <input
                                    type="text"
                                    name="github"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Hourly Salary</label>
                                <input
                                    type="text"
                                    name="rate_per_hr"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Overview</label>
                                <textarea
                                    type="text"
                                    name="profileSummary"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                        </>
                    )}
                    {section === 'projects' && (
                        <>
                            <div className="flex justify-between">
                            <div className="mb-4">
                                <label className="block text-gray-700">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">End Date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Project Name</label>
                                <input
                                    type="text"
                                    name="projectName"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Project Link</label>
                                <textarea
                                    name="projectUrl"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Project Description</label>
                                <textarea
                                    name="projectDescription"
                                    className="w-full p-2 border rounded"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </>
                    )}

                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
