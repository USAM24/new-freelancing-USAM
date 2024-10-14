import React, { useState, useEffect } from 'react';
import Select from 'react-select'; // Import the react-select component
import countryList from 'react-select-country-list'; // Import the country list

const EditModal = ({ isOpen, section, closeModal, saveChanges, data }) => {
    const [formData, setFormData] = useState({});

    // Update formData when the modal opens or when data changes
    useEffect(() => {
        if (data) {
            setFormData(data); // Initialize with incoming data
            console.log(data);
            console.log(formData);
        } else {
            setFormData({}); // Reset for a new project
            console.log('data is empty', data);
        }
    }, [data]);
    const formateDate = (apidate) => {
        if (apidate) {
            const date = apidate.split('T')[0];
            return date;
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveChanges(section, formData); // Save the updated formData
        closeModal(); // Close the modal after saving
    };

    const CountrySelector = ({ setFormData, formData }) => {
        const options = countryList().getData(); // Get the list of countries
      
        const changeHandler = (selectedOption) => {
          // Update formData with the selected country
          setFormData({
            ...formData,
            address: selectedOption.label, // Store the value (like 'US')
          });
        };
      
        return (
          <div>
            <Select
              options={options} // Provide country options
              value={options.find(option => option.label === formData.address)} // Set selected value if it's already in formData
              onChange={changeHandler} // Handle change
              placeholder="Choose your country"
              className="w-full p-2 border rounded dark:bg-stone-800 dark:text-black"
            />
          </div>
        );
      };
      

    if (!isOpen) return null; // Don't render the modal if it is not open

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-stone-900 p-5 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-xl font-semibold mb-4">Edit {section === 'image' ? 'Profile Image' : section === 'user' ? 'User Info' : 'Projects'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Conditionally render form fields based on section */}
                    {section === 'image' && (
                        <div className="mb-4">
                            <label className="block text-gray-700">Profile Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="w-full p-2 border rounded dark:bg-stone-800"
                                onChange={handleInputChange}
                            />
                        </div>
                    )}
                    {section === 'user' && (
                        <>
                            <div className="flex justify-between">
                                <div className="mb-4 w-full me-1">
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4 w-full mx-1">
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4 w-full ms-1">
                                    <label className="block text-gray-700">Job Title</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={formData.jobTitle || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                
                                <div className="mb-4 w-full me-1">
                                    <label className="block text-gray-700">Date of Birth</label>

                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4 w-full mx-1">
                                    <label className="block text-gray-700">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4 w-full ms-1">
                                    <label className="block text-gray-700">Hourly Salary</label>
                                    <input
                                        type="text"
                                        name="rate_per_hr"
                                        value={formData.rate_per_hr || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Overview</label>
                                <textarea
                                    name="profileSummary"
                                    value={formData.profileSummary || ''}
                                    className="w-full p-2 border rounded dark:bg-stone-800"
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Country</label>
                                <CountrySelector setFormData={setFormData} formData={formData}/>
                                    {/* type="text"
                                    name="userSkills"
                                    value={formData.userSkills || ''}
                                    className="w-full p-2 border rounded dark:bg-stone-800"
                                    onChange={handleInputChange} */}
                                
                            </div>
                            <div className="flex justify-between">
                                <div className="mb-4 w-full me-2">
                                    <label className="block text-gray-700">Facebook Profile</label>
                                    <input
                                        type="text"
                                        name="facebook"
                                        value={formData.facebook || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4 w-full ms-2">
                                    <label className="block text-gray-700">LinkedIn Profile</label>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        value={formData.linkedin || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="mb-4 w-full me-2">
                                    <label className="block text-gray-700">GitHub Profile</label>
                                    <input
                                        type="text"
                                        name="github"
                                        value={formData.github || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4 w-full ms-2">
                                    <label className="block text-gray-700">Portfolio URL</label>
                                    <input
                                        type="text"
                                        name="portfolio"
                                        value={formData.portfolio || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            
                            <div className="mb-4">
                                <label className="block text-gray-700">Skills</label>
                                <input
                                    type="text"
                                    name="userSkills"
                                    value={formData.userSkills || ''}
                                    className="w-full p-2 border rounded dark:bg-stone-800"
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                        </>
                    )}
                    {section === 'projects' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700">Project Name</label>
                                <input
                                    type="text"
                                    name="projectName"
                                    value={formData.projectName || ''}
                                    className="w-full p-2 border rounded dark:bg-stone-800"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Project Link</label>
                                <input
                                    type="text"
                                    name="projectUrl"
                                    value={formData.projectUrl || ''}
                                    className="w-full p-2 border rounded dark:bg-stone-800"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Project Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description || ''}
                                    className="w-full p-2 border rounded dark:bg-stone-800"
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="flex justify-between">
                                <div className="mb-4">
                                    <label className="block text-gray-700">Start Date</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formateDate(formData.startDate) || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">End Date</label>
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formateDate(formData.endDate) || ''}
                                        className="w-full p-2 border rounded dark:bg-stone-800"
                                        onChange={handleInputChange}
                                    />
                                </div>
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
