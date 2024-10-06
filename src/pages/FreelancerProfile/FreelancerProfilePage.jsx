import React from 'react'
import profile from "../../assets/profile.png";
import facebook_icon from "../../assets/facebook_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import dribbble_icon from "../../assets/dribbble_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
const FreelancerProfilePage = () => {
    return (
        <>
            <div className="container-fliud bg-primary-700">
                
                    <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-12 gap-6 p-10 md:p-14 lg:p-16">
                        <div className="col-span-12 lg:col-span-4 row-span-1 lg:row-span-full">
                            <div className="card bg-pure-white dark:bg-neutral-900 flex flex-col items-center py-24 px-9 rounded-xl shadow-2xl">
                                <div className="imgProfile">
                                    <img className='w-32' src={profile} alt="Profile Picture" />
                                </div>
                                <div className='content mt-5 flex flex-col items-center'>
                                    <h5 className="text-xl font-medium dark:text-pure-white">Lislie Alexander</h5>
                                    <h6 className='text-stone-500 text-lg mb-5'>UI/UX Designer</h6>
                                    <div className="links flex">
                                        <a className=' mx-2 w-7' href="#"><img className='w-full' src={facebook_icon} alt="" /></a>
                                        <a className=' mx-2 w-7' href="#"><img className='w-full' src={twitter_icon} alt="" /></a>
                                        <a className=' mx-2 w-7' href="#"><img className='w-full' src={dribbble_icon} alt="" /></a>
                                        <a className=' mx-2 w-7' href="#"><img className='w-full' src={linkedin_icon} alt="" /></a>
                                        <a className=' mx-2 w-7' href="#"><img className='w-full' src={github_icon} alt="" /></a>
                                    </div>
                                </div>
                                <button
                                    onClick={()=>{}}
                                    className="my-16 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-14 py-3 rounded-3xl"
                                    style={{ fontSize: 20 }}
                                >
                                    Hire How
                                </button>
                                <div className="info w-full flex justify-between items-center">
                                    <div className="salary">
                                        <h5 className='font-medium'>Weekly Salary</h5>
                                        <h6 className='text-stone-500'>500$ per week</h6>
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
                                <div className="txt">
                                    <h2 className='text-2xl md:text-4xl font-medium'>Overview</h2>
                                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum quo vel pariatur fugiat ipsa asperiores debitis placeat ducimus, iure ratione distinctio ipsum porro repellendus optio incidunt consequatur illo! Iste explicabo delectus illo pariatur libero ipsa animi eum repellendus fuga quos saepe atque deserunt corporis assumenda odio, sint sunt voluptatem?</p>
                                </div>
                                <div className="content w-full flex flex-col justify-between lg:flex-row">
                                    <div className="employment">
                                        <h2 className='text-2xl md:text-4xl font-medium'>Employment History</h2>
                                        <div className='my-5'>
                                            <p className='text-stone-500'>2010-2015</p>
                                            <h5 className='font-medium'>Product Designer</h5>
                                            <h6 className='text-primary-700'>@ Google</h6>
                                        </div>
                                        <div className='my-5'>
                                            <p className='text-stone-500'>2015-2017</p>
                                            <h5 className='font-medium'>UI/UX Designer</h5>
                                            <h6 className='text-primary-700'>@ Amazon</h6>
                                        </div>
                                        <div className='my-5'>
                                            <p className='text-stone-500'>2018-2020</p>
                                            <h5 className='font-medium'>UI/UX Designer</h5>
                                            <h6 className='text-primary-700'>@ Value</h6>
                                        </div>
                                        <div className='my-5'>
                                            <p className='text-stone-500'>2020-Now</p>
                                            <h5 className='font-medium'>UI/UX Designer</h5>
                                            <h6 className='text-primary-700'>@ Fawry</h6>
                                        </div>
                                    </div>
                                    <div className="education">
                                        <h2 className='text-2xl md:text-4xl font-medium'>Education</h2>
                                        <div className='my-5'>
                                            <p className='text-stone-500'>1996-2010</p>
                                            <h5 className='font-medium'>Student</h5>
                                            <h6 className='text-primary-700'>@ Azhar School</h6>
                                        </div>
                                        <div className='my-5'>
                                            <p className='text-stone-500'>2010-2014</p>
                                            <h5 className='font-medium'>Student</h5>
                                            <h6 className='text-primary-700'>@ Cairo University</h6>
                                        </div>
                                        <div className="projects">
                                            <h2 className='text-2xl md:text-4xl font-medium'>Projects</h2>
                                            <p className='my-5 text-stone-500'><span className='text-primary-700'>50</span> project related to product design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                
            </div>
        </>
    )
}

export default FreelancerProfilePage