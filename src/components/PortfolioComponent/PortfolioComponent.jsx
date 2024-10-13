import React, { useContext, useEffect, useState } from 'react'
import ProjectComponent from '../ProjectComponent/ProjectComponent';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL';
import Loader from '../Loader/Loader';

function PortfolioComponent() {
  const [projects, setProjects] = useState(null);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(5);
    const {id} = useParams();
    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const getFreelancerPortfolio = () => {
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
    // const lastPageIndex = currentPage * postsPerPage;
    // const firstPageIndex = lastPageIndex - postsPerPage;

    useEffect(() => {
        getFreelancerPortfolio();
    }, [])
  const previousProjects = [
    {
      name: "E-Commerce Website",
      date: "2024-06-15",
      summary: "Developed a full-featured e-commerce platform with user authentication, product management, and a secure checkout process.",
      link: "https://www.example-ecommerce.com",
    },
    {
      name: "Portfolio Website",
      date: "2024-05-10",
      summary: "Created a personal portfolio website to showcase design and development skills, including an interactive gallery of previous work.",
      link: "https://www.example-portfolio.com",
    },
    {
      name: "Task Management App",
      date: "2024-04-25",
      summary: "Built a task management app with features like task prioritization, deadlines, and collaborative task assignments for teams.",
      link: "https://www.example-taskapp.com",
    },
    {
      name: "Social Media Dashboard",
      date: "2024-03-30",
      summary: "Designed and implemented a dashboard to manage social media accounts, track analytics, and schedule posts across multiple platforms.",
      link: "https://www.example-socialdashboard.com",
    }
  ];
  
  return (
    <>{projects!==null?<><div className='px-12 py-2'>
      <h2 className="py-2 font-semibold text-lg">Previous Projects</h2>
      <div>
        {projects.length ? (projects.map((project,index)=>(
          <ProjectComponent project={project} key={index}/>
        ))) :(
          <p className='min-h-[500px]'>No projects found</p>
        )}
      </div>
    </div></>:<Loader/>}</>
  )
}

export default PortfolioComponent
