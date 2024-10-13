import React, { useContext, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SkillIcon from '../../components/SkillIcon/SkillIcon.jsx';
import { Link, useParams } from "react-router-dom";
import { UserContext } from '../../Contexts/UserContext.jsx';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL.js';
import Loader from '../../components/Loader/Loader.jsx';

const JobDetailsPage = () => {
    const [job, setJob] = useState(null)
    const getJob = () => {
        axios.get(BaseURL + `projects/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((response) => {
            console.log(response.data.project);
            setJob(response.data.project)
            console.log(token);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getJob()
    }, [])
    const [proposal, setProposal] = useState({
        bid_amount: null,
        coverLetter: "",
        confirmation: null
    })
    const { id } = useParams();
    const { token } = useContext(UserContext);
    const applyProposal = () => {
        // axios.post(BaseURL + `proposals/apply/${id}`, {
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //     },
        // }).then((response) => {
        //     console.log(response.data.project);
        //     setProposal(response.data.project);
        //     setFees(Number(job.budget)*0.1)
        // }).catch((error) => {
        //     console.log(error);
        // })
    }
    const jobb = {
        id: 1,
        job: "UX/UI Designer for a website (Figma Required)",
        skills: ["figma", "web design", "user experience", "HTML", "CSS"],
        category: "Design & Creative",
        description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!",
        projectName: "Long Term Project",
        projectDetails: "3 to 4 Months",
        priceTitle: "Fixed Price",
        price: "$500"
    };

    const [liked, setLiked] = useState(false); // state to toggle between filled and outlined
    const [agreedToTerms, setAgreedToTerms] = useState(false); // state to track agreement to terms

    const handleToggleLike = () => {
        setLiked(!liked); // toggle the liked state
    };

    const handleCheckboxChange = (e) => {
        setAgreedToTerms(e.target.checked); // update state based on checkbox
    };
    const getData = (e) => {
        const data = { ...proposal }
        data[e.target.name] = e.target.value;
        data['bid_amount'] = Number(job.budget) - (Number(job.budget) * 0.1);
        data['confirmation'] = !agreedToTerms;
        console.log(data);
        setProposal(data);
    }
    async function handleSubmit() {
        if (token) {

            try {
                const response = await fetch(BaseURL + `proposals/apply/${id}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(proposal), // Log data being sent
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    console.log(proposal);
                } else {
                    // Capture and log error details from response
                    const errorData = await response.json();
                    console.error("Error response:", errorData);
                }
            } catch (error) {
                console.error("Failed to post job data:", error);
            }

            // const response = await fetch(BaseURL + `proposals/apply/${id}`, {
            //     method: 'POST',
            //     headers: {
            //         'Authorization': `Bearer ${token}`,
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(proposal), // Log data being sent
            // }).then((response) => {
            //     console.log(response.data);
            //     console.log(proposal);
            // }).catch((error) => {
            //     console.log(error);
            // })
        } else {
            alert('Please login to apply for this job')
        }

        // console.log(proposal);
    }

    return (
        <>
            {job != null ? <><div className='py-12 px-24'>
                <div className="flex justify-around mb-5">
                    <div>
                        <h2 className="text-[#04AE95] mb-5 text-3xl mt-2 font-semibold">{job.jobTitle}</h2>
                    </div>

                    <IconButton
                        size="sm"
                        variant="plain"
                        onClick={handleToggleLike} // toggle on click
                        color="neutral"
                        sx={{
                            ml: 'auto',
                            alignSelf: 'flex-start',
                            border: liked ? '2px  #04AE95' : '2px  transparent', // change border color
                        }}
                    >
                        {liked ? (
                            <FavoriteRoundedIcon style={{ color: '#04AE95', fontSize: '32px' }} /> // filled heart with color
                        ) : (
                            <FavoriteBorderRoundedIcon style={{ color: '#04AE95', fontSize: '32px' }} /> // outlined heart with color
                        )}
                    </IconButton>
                </div>

                {/* Job Details */}
                <div className='p-8 border-2 border-primary-50 rounded-lg mb-9'>
                    <h2 className='text-primary-700 font-medium text-2xl mb-5'>Job Details</h2>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>{job.timeframe}</h2>
                        <p className='text-neutral-700'>{job.category}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>{job.paymentType}</h2>
                        <p className='text-neutral-700'>${job.budget}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>Description</h2>
                        <p className='text-neutral-700'>{job.description}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>Skills</h2>
                        <div className='flex flex-row gap-2 flex-wrap'>
                            {job.skills.map((skill, index) => (
                                <SkillIcon key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Terms */}
                <div className='p-8 border-2 border-primary-50 rounded-lg mb-9'>
                    <h2 className='text-primary-700 font-medium text-2xl mb-5'>Terms</h2>
                    <div className='mb-4 flex justify-between py-6 border-b-2 border-[#F2F2F2]'>
                        <h2 className='font-medium mb-3 text-xl'>
                            10% fees on your project
                        </h2>
                        <p className='text-neutral-700 py-3 px-4 w-72 bg-[#F2F2F2] dark:bg-neutral-950 text-right border-[1px] border-primary-50 rounded-lg '>${Number(job.budget) * 0.1}</p>
                    </div>
                    <div className='mb-4 flex justify-between py-6'>
                        <h2 className='font-medium mb-3 text-xl'>
                            You will receive
                        </h2>
                        <p className='text-neutral-700 py-3 px-4 w-72 bg-[#F2F2F2] dark:bg-neutral-950 text-right border-[1px] border-primary-50 rounded-lg '>${Number(job.budget) - (Number(job.budget) * 0.1)}</p>
                    </div>
                </div>

                {/* Cover Letter */}
                <div className='p-8 border-2 border-primary-50 rounded-lg mb-9'>
                    <h2 className='text-primary-700 font-medium text-2xl mb-5'>Cover Letter</h2>
                    <div className='mb-4 py-6'>
                        <textarea name='coverLetter' onChange={getData}
                            placeholder='Safarway | Part time Graphic Designer and Social Media Copywriter 2022 – Present
                        Safarway is a social media application dedicated to Arabic tourists and travelers around the world.
                        (Graphic Designer and Social Media Copywriter), key job responsibilities: 
                        • Designing social media Posts & Copywrite
                        • Creating content for social media platforms
                        GoldenIce | Part time Graphic Designer and Advertiser 2020 – Present
                        GoldenIce Manufacture and sell Restaurants and cafes’ equipment they have branches in:
                        Egypt, Saudi Arabia, Oman & Bahrain.
                        (Graphic Designer and Advertiser), key job responsibilities: 
                        • Create and manage promotions
                        • Creating designs for social media channels'

                            className='text-neutral-700 w-full py-3  px-4 bg-[#F2F2F2] dark:bg-neutral-950 border-[1px] border-primary-50 rounded-lg min-h-80 '>

                        </textarea>
                    </div>
                </div>

                {/* Agree to Terms Checkbox */}
                <div className="flex items-center justify-between mb-8 p-5">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="confirmation"
                            className="form-checkbox h-5 w-5 text-primary-600 accent-primary-700 border-2 border-primary-50"
                            onChange={(e) => {
                                handleCheckboxChange(e)
                                getData(e)
                            }}
                        />
                        <span className="ml-2">You have to confirm terms</span>
                    </label>
                </div>

                {/* Buttons */}
                <div className='flex flex-row justify-between py-8'>
                    <Link to={`/find-job`}>
                        <button className='py-3 px-12 border-2 border-primary-700 rounded-lg text-primary-700 font-semibold outline-4'>Cancel</button>
                    </Link>
                    <div className='flex flex-row justify-around'>
                        <button
                            className='py-3 px-12 border-2 border-primary-700 rounded-lg bg-primary-700 text-neutral-50 font-semibold outline-4'
                            disabled={!agreedToTerms} // Disable button if terms are not agreed
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div></> : <Loader />}
        </>
    );
};

export default JobDetailsPage;
