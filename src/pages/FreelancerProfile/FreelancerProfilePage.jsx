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

    const formatDate = (apiDate) => {
        const date = new Date(apiDate);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return formattedDate;
    }

    const openModal = (section) => {
        setEditSection(section);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditSection(null);
    };

    const saveChanges = (section, data) => {
        let url = '';
        let payload = {};

        if (section === 'image') {
            url = BaseURL + `users/updateProfileImage/${id}`;
            payload = { image: data.image };
        } else if (section === 'user') {
            url = BaseURL + `users/${id}`;
            payload = {
                firstName: data.firstName,
                lastName: data.lastName,
                jobTitle: data.jobTitle,
                profileSummary: data.profileSummary,
                github: data.github,
                facebook: data.facebook,
                linkedin: data.linkedin,
                rate_per_hr: data.rate_per_hr,

            };
        } else if (section === 'projects') {
            url = BaseURL + `cv/project/${id}`;
            payload = {
                projectName: data.projectName,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
                projectName: data.projectName,
            };
        }

        axios.put(url, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                // Update the profile data after success
                getFreelancerData(); // Refresh data from server
            })
            .catch((error) => {
                console.log(error);
            });
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

    const getProjects = ()=>{
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
                        <div className="card bg-pure-white h-full dark:bg-neutral-900 flex flex-col items-center py-24 px-9 rounded-xl shadow-2xl">
                            <div className="imgProfile flex flex-row w-full justify-center items-center relative">
                                <img className='w-32 rounded-full' src={BaseURL + profile.image} alt="Profile Picture" />
                                <i role='button' onClick={() => openModal('image')} className="fa-regular fa-pen-to-square absolute right-0 text-2xl text-primary-700"></i>
                            </div>
                            <div className='content mt-5 flex flex-col items-center relative w-full'>
                                <h5 className="text-xl font-medium dark:text-pure-white">{profile.firstName + " " + profile.lastName}</h5>
                                <i role='button' onClick={() => openModal('user')} className="fa-regular fa-pen-to-square absolute right-0 text-2xl text-primary-700"></i>
                                <h6 className='text-stone-500 text-lg mb-5'>{profile.jobTitle}</h6>
                                <div className="links flex">
                                    <a className=' mx-2 w-7' href={profile.facebook}><img className='w-full' src={facebook_icon} alt="" /></a>
                                    <a className=' mx-2 w-7' href={profile.twitter}><img className='w-full' src={twitter_icon} alt="" /></a>
                                    <a className=' mx-2 w-7' href={profile.facebook}><img className='w-full' src={dribbble_icon} alt="" /></a>
                                    <a className=' mx-2 w-7' href={profile.linkedin}><img className='w-full' src={linkedin_icon} alt="" /></a>
                                    <a className=' mx-2 w-7' href={profile.github}><img className='w-full' src={github_icon} alt="" /></a>
                                </div>
                            </div>
                            <button
                                onClick={() => { }}
                                className="my-16 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-14 py-3 rounded-3xl"
                                style={{ fontSize: 20 }}
                            >
                                Hire How
                            </button>
                            <div className="info w-full flex justify-between items-center">
                                <div className="salary">
                                    <h5 className='font-medium'>Hourly Salary</h5>
                                    <h6 className='text-stone-500'>${profile.rate_per_hr} per hour</h6>
                                </div>
                                <div className="availability">
                                    <h5 className='font-medium'>Availability</h5>
                                    <h6 className='text-stone-500'>10 hrs per day</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-8 row-span-1 lg:row-span-full">
                        <div className="card bg-pure-white dark:bg-neutral-900 flex flex-col items-center p-9 rounded-xl h-full shadow-2xl">
                            <div className="txt w-full relative">
                                <i role='button' onClick={() => openModal('projects')} className="fa-regular fa-pen-to-square absolute right-0 text-2xl text-primary-700"></i>
                                <h2 className='text-2xl md:text-4xl font-medium'>Overview</h2>
                                <p className='my-5'>{profile.profileSummary}</p>
                            </div>
                            <div className="content w-full flex flex-col justify-between lg:flex-row">
                                <div className="projects">
                                    <h2 className='text-2xl md:text-4xl font-medium'>Projects</h2>
                                    {projects !==null && projects.map((project,index)=>(
                                    <div className='my-5'>
                                        <p className='text-stone-500'>{formatDate(project.startDate)} - {formatDate(project.endDate)}</p>
                                        <h5 className='font-medium'>{project.projectName}</h5>
                                        <p className='text-stone-500'>{project.description}</p>
                                        <a href={project.projectUrl} className='text-primary-700'>@ Go to the link</a>
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
                    closeModal={closeModal}
                    saveChanges={saveChanges}
                />
            </> : <Loader />}
        </>
    )
}

export default FreelancerProfilePage