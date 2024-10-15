import React, { useContext, useEffect, useState } from 'react'
import profile from "../../assets/profile.png";
import facebook_icon from "../../assets/facebook_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import dribbble_icon from "../../assets/dribbble_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL';
import Loader from '../../components/Loader/Loader';
import EditModal from '../../components/EditModel/EditModel';
const FreelancerProfilePage = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [projects, setProjects] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editSection, setEditSection] = useState(null);
    const [editData, setEditData] = useState(null); // Store data being edited
    const [selectedProject, setSelectedProject] = useState('');
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const formatDate = (apiDate) => {
        const date = new Date(apiDate);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return formattedDate;
    }

    const openModal = (section, data = null) => {
        setEditSection(section);
        setEditData(data); // Pass the data to be edited
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditData(null); // Pass the data to be edited
        setEditSection(null);
    };

    const deleteProject = (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            console.log('projectId',id);
            axios.delete(BaseURL+`cv/project/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
            )
            .then((response) => {
                console.log(response.data);
                getProjects();
            }).catch ((error) => {
                console.error('Error deleting project:', error);
            })
        }
    };

    const saveChanges = (section, data) => {
        let url = '';
        let payload = {};
        if(data.userSkills == profile.userSkills){
            data.userSkills = data.userSkills.join(',');
        }else{
            data.userSkills
        }
        if (section === 'image') {
            url = BaseURL + `users/updateProfileImage/${id}`;
            payload = { image: BaseURL +'uploads/profileImages/'+ data.image };
        } else if (section === 'user') {
            url = BaseURL + `users/${id}`;
            payload = {
                firstName: data.firstName,
                lastName: data.lastName,
                jobTitle: data.jobTitle,
                rate_per_hr: data.rate_per_hr,
                facebook: data.facebook,
                github: data.github,
                linkedin: data.linkedin,
                userSkills: data.userSkills,
                profileSummary: data.profileSummary,
                portfolio: data.portfolio,
                category: data.category,
                address: data.address,
                dateOfBirth: data.dateOfBirth,
            };
        } else if (section === 'projects') {
            if (data.id) {
                // Existing project (update)
                url = BaseURL + `cv/project/${data.id}`;
                payload = {
                    projectName: data.projectName,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description: data.description,
                    projectUrl: data.projectUrl,
                };
            } else {
                // New project (add)
                url = BaseURL + `cv/project`;
                payload = {
                    // userId: id,
                    projectName: data.projectName,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description: data.description,
                    projectUrl: data.projectUrl,
                };
            }
            // setSelectedProject('');

        }

        axios({
            method: data.id ? 'put' : 'post',
            url,
            data: payload,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                // Update the profile data after success
                getFreelancerData(); // Refresh data from server
                console.log(response);
                getProjects();
            })
            .catch((error) => {
                console.log(error);
                console.log(data);
            });
        
    };

    const handleProjectSelect = (e) => {
        const projectId = Number(e.target.value);
        console.log(projectId);
        const selectedProject = projects.find((project) => project.id === projectId);
        setSelectedProject(projectId);
        setEditData(selectedProject); // Set data for editing
        console.log('selectedProject', selectedProject);
        console.log('editData', editData);
    };

    // const {id} = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('Token_Value');
    const getFreelancerData = () => {
        axios.get(BaseURL + `users/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data.user);
            setProfile(response.data.user);
            console.log(token);
        }).catch((error) => {
            console.log(error);
        })
    }
    // const lastPageIndex = currentPage * postsPerPage;
    // const firstPageIndex = lastPageIndex - postsPerPage;

    const getProjects = () => {
        axios.get(BaseURL + `cv/project/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data.userProjects);
            setProjects(response.data.userProjects);
            console.log(token);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getFreelancerData();
    }, [])
    useEffect(() => {
        getProjects();
    }, [])
    return (
        <>
            {profile !== null ? <><div className="container-fliud bg-primary-700">

                <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-12 gap-6 p-10 md:p-14 lg:p-16">
                    <div className="col-span-12 lg:col-span-4 row-span-1 lg:row-span-full">
                        <div className="card bg-pure-white dark:bg-neutral-900 flex flex-col items-center py-24 px-9 rounded-xl shadow-2xl">
                            <div className="imgProfile flex flex-row w-full h-48 justify-center items-center relative">
                                <img className='w-48 h-full rounded-full' src={BaseURL + profile.image} alt="Profile Picture" />
                                <i role='button' onClick={() => openModal('image', profile)} className="fa-regular fa-pen-to-square absolute right-0 text-2xl text-primary-700"></i>
                            </div>
                            <div className='content mt-5 flex flex-col items-center relative w-full'>
                                <h5 className="text-xl font-medium dark:text-pure-white">{profile.firstName + " " + profile.lastName}</h5>
                                <i role='button' onClick={() => openModal('user', profile)} className="fa-regular fa-pen-to-square absolute right-0 text-2xl text-primary-700"></i>
                                <h6 className='text-stone-500 text-lg mb-1'>{profile.jobTitle}</h6>
                                <h6 className='text-stone-500 text-lg mb-1'>{profile.category}</h6>
                                <h6 className='text-stone-500 text-lg mb-1'>{profile.address}</h6>
                                <h6 className='text-stone-500 text-lg mb-5'>{profile.dateOfBirth}</h6>
                                <div className="links flex">
                                    <a className=' mx-2 w-7' href={profile.facebook}><img className='w-full' src={facebook_icon} alt="" /></a>
                                    <a className=' mx-2 w-7' href={profile.linkedin}><img className='w-full' src={linkedin_icon} alt="" /></a>
                                    <a className=' mx-2 w-7' href={profile.github}><img className='w-full' src={github_icon} alt="" /></a>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <i className="fa-solid fa-link"></i>
                                <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="text"> Portfolio</a>
                            </div>
                            <button
                                onClick={() => { }}
                                className="my-12 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-14 py-3 rounded-3xl"
                                style={{ fontSize: 20 }}
                            >
                                Hire How
                            </button>
                            <div className="info w-full flex justify-center items-center">
                                <div className="salary">
                                    <h5 className='font-medium'>Hourly Salary</h5>
                                    <h6 className='text-stone-500'>${profile.rate_per_hr} per hour</h6>
                                </div>
                                {/* <div className="availability">
                                    <h5 className='font-medium'>Availability</h5>
                                    <h6 className='text-stone-500'>10 hrs per day</h6>
                                </div> */}
                            </div>
                            <div className="w-full mt-5">
                                <h5 className='font-medium mb-2'>Skills</h5>
                                <ul>
                                {profile!==null && profile.userSkills.map((skill,i)=>(<li className='inline-block mx-2 mb-2 p-2 bg-primary-300 rounded-lg font-semibold text-primary-800' key={i}>{skill}</li>))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-8 row-span-1 lg:row-span-full">
                        <div className="card bg-pure-white dark:bg-neutral-900 flex flex-col items-center p-9 rounded-xl h-full shadow-2xl">
                            <div className="txt w-full">

                                <h2 className='text-2xl md:text-4xl font-medium'>Overview</h2>
                                <p className='my-5'>{profile.profileSummary}</p>
                            </div>
                            <div className="content w-full flex flex-col justify-between lg:flex-row">
                                <div className="projects relative w-full">
                                    <i
                                        className="fa-solid fa-plus absolute right-0 text-2xl text-primary-700 cursor-pointer"
                                        onClick={() => openModal('projects')}  // Open modal for new project
                                    ></i>
                                    {/* <i role='button' onClick={() => openModal('projects', selectedProject)} className="fa-regular fa-pen-to-square absolute right-0 text-2xl text-primary-700"></i> */}
                                    {/* <div className='absolute right-0 flex items-center justify-center'><select onChange={handleProjectSelect} value={selectedProject}>
                                        <option value="">Select a project to edit</option>
                                        {projects !== null && projects.map((project) => (
                                            <option key={project.id} value={project.id}>{project.projectName}</option>
                                        ))}
                                    </select>
                                        <i className="fa-regular fa-pen-to-square text-primary-700 text-2xl" onClick={() => openModal('projects', editData)}></i> Edit selected project</div> */}
                                    <h2 className='text-2xl md:text-4xl font-medium'>Projects</h2>
                                    {projects !== null && projects.map((project, index) => (
                                        <div key={index} className='my-5 p-2 hover:bg-stone-200 dark:hover:bg-stone-800 flex justify-between items-center'>
                                            <div>
                                                <p className='text-stone-500'>{formatDate(project.startDate)} - {formatDate(project.endDate)}</p>
                                                <h5 className='font-medium'>{project.projectName}</h5>
                                                <p className='text-stone-500'>{project.description}</p>
                                                <a href={project.projectUrl} className='text-primary-700'>@ Go to the link</a>
                                            </div>
                                            <div>
                                            <i
                                                className="fa-regular fa-pen-to-square text-primary-700 mx-2 cursor-pointer text-2xl"
                                                onClick={() => {
                                                    setSelectedProjectId(project.id);
                                                    openModal('projects', project);
                                                }}
                                                title="Edit Project"
                                            ></i>
                                            <i
                                                className="fa-solid fa-trash text-red-500 cursor-pointer text-2xl"
                                                onClick={() => deleteProject(project.id)}
                                                title="Delete Project"
                                            ></i>
                                        </div>
                                        </div>))}

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
                <EditModal
                    isOpen={isModalOpen}
                    section={editSection}
                    data={editData} // Pass data to modal
                    closeModal={closeModal}
                    saveChanges={saveChanges}
                />
            </> : <Loader />}
        </>
    )
}

export default FreelancerProfilePage