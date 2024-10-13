import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL';
import Loader from '../../components/Loader/Loader';
import PaginationComponent from '../../components/Pagination/Pagination';

const FreelancerProposal = () => {
    const [proposals, setProposals] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const { id } = useParams();
    const token = localStorage.getItem('Token_Value');

    const getProposals = () => {
        axios.get(BaseURL + `proposals/applications/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            setProposals(response.data.proposals);
            console.log(response.data.proposals);
        }).catch((error) => {
            if (error.response && error.response.status === 404) {
                setError("There are no applied people on your project.");
            } else {
                setError("An error occurred while fetching proposals.");
            }
        });
    };

    async function handleAccept(projectId,proposalId) {
        const token = localStorage.getItem('Token_Value');

        if (token) {
            try {
                const response = await fetch(`${BaseURL}proposals/accept/${projectId}/applied/${proposalId}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    // Handle successful deletion
                    console.log('Proposal accepted successfully');
                    navigate('/'); // Navigate to the home page or other appropriate page
                } else {
                    // Handle failure, log error response
                    const errorData = await response.json();
                    console.error('Error Accepting proposal:', errorData);
                }
            } catch (error) {
                console.error('Failed to accept project:', error);
            }
        } else {
            alert('You should login first');
        }
    }
    async function handleReject(projectId,proposalId) {
        const token = localStorage.getItem('Token_Value');

        if (token) {
            try {
                const response = await fetch(`${BaseURL}proposals/reject/${projectId}/applied/${proposalId}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    // Handle successful deletion
                    console.log('Proposal rejected successfully');
                    navigate('/'); // Navigate to the home page or other appropriate page
                } else {
                    // Handle failure, log error response
                    const errorData = await response.json();
                    console.error('Error Rejecting proposal:', errorData);
                }
            } catch (error) {
                console.error('Failed to reject project:', error);
            }
        } else {
            alert('You should login first');
        }
    }

    const lastPageIndex = currentPage * postsPerPage;
    const firstPageIndex = lastPageIndex - postsPerPage;

    useEffect(() => {
        getProposals();
    }, []);

    return (
        <>
            {proposals !== null ? (
                <div className='container my-5'>
                    <h1 className='text-primary-700 text-3xl font-semibold'>Freelancers Proposals</h1>
                    {proposals.slice(firstPageIndex, lastPageIndex).map((proposal, index) => (
                        <div key={index} className="grid grid-cols-1">
                            <div className="border border-primary-400 rounded-lg shadow-md p-8 my-5">
                                <div className="grid grid-rows-3 grid-flow-col">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex justify-between items-center'>
                                            <div className="w-1/6">
                                                <img className='w-full rounded-full' src={BaseURL + proposal.user.image} alt="" />
                                            </div>
                                            <h2>{proposal.user.firstName} {proposal.user.lastName}</h2>
                                            <h3>{proposal.user.jobTitle}</h3>
                                        </div>
                                        <div>
                                            <Link><button onClick={()=>handleAccept(proposal.projectId,proposal.id)} className='px-12 rounded-lg py-3 md:ms-5 w-full md:w-auto border-2 border-primary-700 bg-primary-700 text-white'>Accept</button></Link>
                                            <Link><button onClick={()=>handleReject(proposal.projectId,proposal.id)} className='px-12 rounded-lg py-3 md:ms-5 w-full md:w-auto border-2 border-stone-500 text-stone-500'>Reject</button></Link>
                                        </div>
                                    </div>
                                    <div className='flex items-center'><h3 className='text-primary-700 text-lg'>Proposal</h3></div>
                                    <div className='border border-primary-400 bg-slate-200 dark:bg-stone-800 rounded-lg p-3'>{proposal.coverLetter}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center m-8">
                        <PaginationComponent totalPosts={proposals.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            ) : (
                error ? (
                    <div className='text-center text-stone-500 text-xl my-10'>
                        {error}
                    </div>
                ) : (
                    <Loader />
                )
            )}
        </>
    );
};

export default FreelancerProposal;
