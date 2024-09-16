import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SkillIcon from '../../components/SkillIcon/SkillIcon.jsx';
import { Link } from "react-router-dom";
import { useState } from 'react';

const JobOverview = () => {
    const job =
        {
          id: 1,
          job: "UX/UI Designer for a website (Figma Required)",
          skills: ["figma", "web design", "user experience","HTML","CSS"],
          category: "Design & Creative",
          description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
          ,
          projectName:"Long Term Project",
          projectDetails:"3 to 4 Months",
          priceTitle:"Fixed Price",
          price:"$500"
        };

        const [liked, setLiked] = useState(false); // state to toggle between filled and outlined

        const handleToggleLike = () => {
            setLiked(!liked); // toggle the liked state
        };

    return (
        <>
        <div className='py-12 px-24'>
             <div className="flex justify-around border-b-2 border-b-black ">
                    <div>
                        <div className='py-2 px-4 rounded-[10px] border-2 border-black w-fit font-semibold mb-4'>{job.category}</div>
                        <h2 className="text-[#04AE95] mb-5 text-3xl mt-2 font-semibold">{job.job}</h2>
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
                          <FavoriteRoundedIcon style={{ color: '#04AE95', fontSize: '32px'  }} /> // filled heart with color
                        ) : (
                          <FavoriteBorderRoundedIcon style={{ color: '#04AE95', fontSize: '32px' }} /> // outlined heart with color
                        )}
                      </IconButton>
                </div>
                <div className='pt-4'>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>{job.projectName}</h2>
                        <p className='text-neutral-700'>{job.projectDetails}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>{job.priceTitle}</h2>
                        <p className='text-neutral-700'>{job.price}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>Description</h2>
                        <p className='text-neutral-700'>{job.description}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-medium mb-3 text-2xl'>Skills</h2>
                        <div className='flex flex-row gap-2 flex-wrap'>
                            { job.skills.map((skill) => (
                            <SkillIcon skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
               
        </div>
         <div className='flex flex-row justify-between py-16 px-16 '>
            
            <Link to={`/find-job`}>
                <button className='py-3 px-12 border-2 border-primary-700 rounded-lg text-primary-700'>Cancel</button>
            </Link>
            <div className='flex flex-row justify-around '>

                <button className='py-3 px-12 '>Save As Draft</button>
                <Link to={`/job-details/${job.id}`}>
                    <button className='py-3 px-12 border-2 border-primary-700 rounded-lg bg-primary-700 text-neutral-50'>Apply Now</button>
                </Link>
            </div>

     </div>
     </>
    );
}

export default JobOverview;
