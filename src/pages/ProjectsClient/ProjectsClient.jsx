import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Loader from '../../components/Loader/Loader';
import PaginationComponent from '../../components/Pagination/Pagination';

const ProjectsClient = () => {
    const [projects, setProjects] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const getProjects = () => {
        axios.get(BaseURL + `projects/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data);
            setProjects(response.data.projects);
            console.log(token);
        }).catch((error) => {
            console.log(error);
        })
    }
    const lastPageIndex = currentPage * postsPerPage;
    const firstPageIndex = lastPageIndex - postsPerPage;

    useEffect(() => {
        getProjects();
    }, [])
    return (
        <>
            {projects !== null ? (
                <div className='container my-5'>
                    <h1 className='text-primary-700 text-3xl font-semibold'>Your Projects</h1>
                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1">
                            {projects.slice(firstPageIndex, lastPageIndex).map((project, index) => (
                                <div key={index} className="border border-primary-400 rounded-lg shadow-md p-8 my-5">
                                    <div className="grid grid-rows-3 grid-flow-col">
                                        <div className='flex justify-between'>
                                            <h2 className='text-primary-700 text-2xl font-bold'>{project.jobTitle}</h2>
                                            <div>
                                                {/* <i className="text-3xl ms-9 text-primary-700 fa-regular fa-pen-to-square"></i> */}
                                                <i className="text-3xl ms-9 text-primary-700 fa-regular fa-trash-can"></i>
                                            </div>
                                        </div>
                                        <div><p className='text-stone-500'>{project.description}</p></div>
                                        <div className='md:flex md:justify-end md:mt-5'>
                                            <Link to={`propsal/${project.id}`}><button className='px-12 rounded-lg py-3 my-5 md:ms-5 w-full md:w-auto border-2 border-primary-700 bg-primary-700 text-white' >Applied people</button></Link>
                                            <Link to={''}><button className='px-12 rounded-lg py-3 my-5 md:ms-5 w-full md:w-auto border-2 border-stone-500 text-stone-500'>Close project</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-center m-8">
                                <PaginationComponent totalPosts={projects.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-stone-500 text-xl my-10">
                            You have no projects yet.
                        </div>
                    )}
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default ProjectsClient