import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL';
import Loader from '../../components/Loader/Loader';
import PaginationComponent from '../../components/Pagination/Pagination';

const ProposalProjects = () => {

    const [proposals, setProposals] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const getProjects = () => {
        axios.get(BaseURL + `proposals/applied`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data.proposalProjects);
            setProposals(response.data.proposalProjects);
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
            {proposals !== null ? <><div className="container my-5">
                <h1 className='text-primary-700 text-3xl font-semibold'>Your Proposals</h1>
                {proposals.slice(firstPageIndex, lastPageIndex).map((proposal, index) => (<div key={index} className="grid grid-cols-1">
                    <div className="border border-primary-400 rounded-lg shadow-md p-8 my-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold text-primary-700">{proposal.project.jobTitle}</h2>
                            <h3 className='text-secondary-500 underline'>{proposal.status}</h3>
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
                            <Link><button className='px-12 rounded-lg py-3 md:ms-5 w-full md:w-auto border-2 border-stone-500 bg-stone-500 text-white' >Delete</button></Link>
                            <Link><button className='px-12 rounded-lg py-3 md:ms-5 w-full md:w-auto border-2 border-primary-700 text-primary-700'>Cancel</button></Link>
                        </div>
                    </div>
                </div>))}
                <div className="flex justify-center m-8">
                    <PaginationComponent totalPosts={proposals.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                </div>
            </div></> : <Loader />}
        </>
    )
}

export default ProposalProjects