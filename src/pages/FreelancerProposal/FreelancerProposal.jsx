import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { BaseURL } from '../../api/BaseURL';
import Loader from '../../components/Loader/Loader';
import PaginationComponent from '../../components/Pagination/Pagination';

const FreelancerProposal = () => {
    const [proposals, setProposals] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const { id } = useParams();
    const { token } = useContext(UserContext);
    const getProposals = () => {
        axios.get(BaseURL + `proposals/applications/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data.proposals);
            setProposals(response.data.proposals);
            console.log(token);
        }).catch((error) => {
            console.log(error);
        })
    }
    const lastPageIndex = currentPage * postsPerPage;
    const firstPageIndex = lastPageIndex - postsPerPage;
    useEffect(() => {
        getProposals();
    }, [])
    return (
        <>{proposals !== null ? <><div className='container my-5'>
            <h1 className='text-primary-700 text-3xl font-semibold'>Freelancers Proposals</h1>
            {proposals.slice(firstPageIndex, lastPageIndex).map((proposal, index) => (
                <div key={index} className="grid grid-cols-1">
                    <div className="border border-primary-400 rounded-lg shadow-md p-8 my-5">
                        <div className="grid grid-rows-3 grid-flow-col">
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-between items-center'>
                                    <div className="w-1/6"><img className='w-full rounded-full' src={BaseURL+proposal.user.image} alt="" /></div>
                                    <h2>{proposal.user.firstName} {proposal.user.lastName}</h2>
                                    <h3>{proposal.user.jobTitle}</h3>
                                </div>
                                <div>
                                    <Link><button className='px-12 rounded-lg py-3 md:ms-5 w-full md:w-auto border-2 border-primary-700 bg-primary-700 text-white' >Apply</button></Link>
                                    <Link><button className='px-12 rounded-lg py-3 md:ms-5 w-full md:w-auto border-2 border-stone-500 text-stone-500'>Reject</button></Link>
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
        </div></> : <Loader />}</>
    )
}

export default FreelancerProposal