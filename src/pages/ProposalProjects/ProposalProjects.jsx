import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL';
import Loader from '../../components/Loader/Loader';
import PaginationComponent from '../../components/Pagination/Pagination';

const ProposalProjects = () => {
    const [proposals, setProposals] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('Token_Value');

    const getProjects = () => {
        axios.get(BaseURL + `proposals/applied`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            setProposals(response.data.proposalProjects);
            console.log(response.data.proposalProjects);
        }).catch((error) => {
            if (error.response && error.response.status === 404) {
                setError("You have no proposals yet.");
            } else {
                setError("An error occurred while fetching proposals.");
            }
        });
    };

    async function handleDelete(projectId,proposalId) {
        const token = localStorage.getItem('Token_Value');

        if (token) {
            try {
                const response = await fetch(`${BaseURL}proposals/withdraw/${projectId}/applied/${proposalId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    // Handle successful deletion
                    console.log('Project deleted successfully');
                    // navigate('/'); // Navigate to the home page or other appropriate page
                } else {
                    // Handle failure, log error response
                    const errorData = await response.json();
                    console.error('Error deleting project:', errorData);
                }
            } catch (error) {
                console.error('Failed to delete project:', error);
            }
        } else {
            alert('You should login first');
        }
    }

    const lastPageIndex = currentPage * postsPerPage;
    const firstPageIndex = lastPageIndex - postsPerPage;

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            {proposals !== null ? (
                <div className="container my-5">
                    <h1 className='text-primary-700 text-3xl font-semibold'>Your Proposals</h1>
                    
                    {/* Display message if there is a 404 error */}
                    {error ? (
                        <div className="text-center text-stone-500 text-xl my-10">
                            {error}
                        </div>
                    ) : (
                        <div>
                            {proposals.slice(firstPageIndex, lastPageIndex).map((proposal, index) => (
                                <div key={index} className="grid grid-cols-1">
                                    <div className="border border-primary-400 rounded-lg shadow-md p-8 my-5">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-semibold text-primary-700">{proposal.project.jobTitle}</h2>
                                            {proposal.status == 'accepted'?<h3 className='text-green-500 underline'>{proposal.status}</h3>:proposal.status == 'pending'?<h3 className='text-secondary-500 underline'>{proposal.status}</h3>:<h3 className='text-red-600 underline'>{proposal.status}</h3>}
                                        </div>
                                        <div className="border border-primary-400 rounded-lg shadow-md p-8 my-5">
                                            <h3 className='text-primary-700 text-xl mb-3'>Job Details</h3>
                                            <div className="flex items-center justify-between w-1/3 mb-3">
                                                <div>
                                                    <h3>{proposal.project.timeframe}</h3>
                                                    <h4 className='text-stone-700 mt-1'>{proposal.project.category}</h4>
                                                </div>
                                                <div>
                                                    <h3>{proposal.project.paymentType}</h3>
                                                    <h4 className='text-stone-700 mt-1'>${proposal.project.budget}</h4>
                                                </div>
                                            </div>
                                            <h3>Description</h3>
                                            <p className='text-stone-700 mb-3'>{proposal.project.description}</p>
                                            <h3>Skills</h3>
                                            <div className="flex flex-row flex-wrap">
                                                {proposal.project.skills.map((skill, index) => (
                                                    <div className="flex flex-row px-3 py-2 mr-2 mt-1 bg-primary-300 text-primary-700 font-semibold rounded-lg" key={index}>
                                                        <p>{skill}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-center'>
                                            <Link>
                                                <button onClick={()=>handleDelete(proposal.projectId,proposal.id)} className='px-12 rounded-lg py-3 md:ms-5 w-full md:w-auto border-2 border-stone-500 bg-stone-500 text-white'>
                                                    Delete
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-center m-8">
                                <PaginationComponent totalPosts={proposals.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default ProposalProjects;
