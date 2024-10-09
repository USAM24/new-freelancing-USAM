import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SkillIcon from '../SkillIcon/SkillIcon.jsx';
import { Link } from "react-router-dom";


const JobIcon = ({ job }) => {
    

  const [liked, setLiked] = useState(false); // state to toggle between filled and outlined

  const handleToggleLike = () => {
    setLiked(!liked); // toggle the liked state
  };

    return (
        <div>
            <div className="border-b-2 border-b-[#04AE95] pb-5 p-5">
               <div className='flex flex-col gap-5'>
                 <div className="flex justify-around">
                    <Link to={`/job-overview/${job.id}`}>
                      <h2 className="text-[#04AE95] mb-5 text-3xl mt-2">{job.jobTitle}</h2>
                    </Link>
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
                        <p>{job.description}</p>
                  </div>
                  <div className='flex flex-row gap-2 flex-wrap'>
                        { job.skills.map((skill,i) => (
                        <SkillIcon key={i} skill={skill} />
                        ))}
                  </div>
                 
                
              </div>
        </div>
    );
}

export default JobIcon;