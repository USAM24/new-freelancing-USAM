import React from "react";
import ClientComponent from "../ClientComponent/ClientComponent";
import Loader from "../Loader/Loader";

function ProfileComponent({User}) {
  const Users = {
    description:
      "Jane Doe is a seasoned full-stack developer with over 10 years of experience in building and maintaining web applications. She specializes in creating robust, scalable, and user-friendly interfaces that deliver a seamless experience across all devices. Jane has a deep understanding of both front-end and back-end technologies, allowing her to work on a wide range of projects from simple landing pages to complex enterprise-level applications. She is passionate about learning new technologies and constantly improves her skill set to stay ahead in the ever-evolving tech industry.",
    skills: ["HTML", "Django", "PostgreSQL"],
    clientReviews: [
      {
        name: "John Doe",
        job: "CEO",
        comment:
          "Jane was an absolute pleasure to work with. She not only delivered the project on time but also provided valuable insights that improved our application. Her expertise in both front-end and back-end development was evident throughout the project. We highly recommend her and look forward to working with her again.",
      },
      {
        name: "John Doe",
        job: "CEO",
        comment:
          "Jane was an absolute pleasure to work with. She not only delivered the project on time but also provided valuable insights that improved our application. Her expertise in both front-end and back-end development was evident throughout the project. We highly recommend her and look forward to working with her again.",
      },
      {
        name: "John Doe",
        job: "CEO",
        comment:
          "Jane was an absolute pleasure to work with. She not only delivered the project on time but also provided valuable insights that improved our application. Her expertise in both front-end and back-end development was evident throughout the project. We highly recommend her and look forward to working with her again.",
      },
    ],
  };

  return (
    <>{User!=null?<><div className="p-2 px-12">
      <h2 className="py-2 font-semibold text-lg">About Me</h2>
      <p className="py-2 ">{User.profileSummary}</p>

      <div className="py-4">
        <h2 className="py-2 font-semibold text-lg">Skills</h2>
        <div className="flex flex-wrap flex-row">
          {User.userSkills.split(',').map((skill, index) => (
            <div key={index} className="bg-[#037C6A] text-white rounded-md p-2 px-4 mx-2 my-2">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="py-4">
        <h2 className="py-2 font-semibold text-lg">Review Clients</h2>
        <div className="grid grid-cols-4 gap-4">
          {User.freelancerReviews.map((review, index) => (
            <ClientComponent review={review} key={index}/>
          ))}
        </div>
      </div>
    </div></>:<Loader/>}</>
  );
}

export default ProfileComponent;
