import React from 'react'
import ProjectComponent from '../ProjectComponent/ProjectComponent';

function PortfolioComponent() {
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
    <div className='px-12 py-2'>
      <h2 className="py-2 font-semibold text-lg">Previous Projects</h2>
      <div>
        {previousProjects.length ? (previousProjects.map((project,index)=>(
          <ProjectComponent project={project} key={index}/>
        ))) :(
          <p className='min-h-[500px]'>No projects found</p>
        )}
      </div>
    </div>
  )
}

export default PortfolioComponent
