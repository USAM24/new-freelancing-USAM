import React, { useContext, useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Stars from "../Stars/Stars";
import { BaseURL } from "../../api/BaseURL";

const FreelancerIcon = ({ freelancer }) => {
  return (
    <div className="border border-[#B8B8BF] rounded-lg p-2 w-[300px] h-[250px] m-2 flex flex-col">
      <div className="flex flex-row mb-4">
        <img
          src={BaseURL + freelancer.image}
          alt="profile"
          className="p-2 w-24 h-24 rounded-full object-cover"
        />
        <div className="p-2 flex-1">
          <h3 className="font-semibold">{freelancer.firstName+" "+freelancer.lastName}</h3>
          <h4 className="text-[#797987] text-sm">{freelancer.category}</h4>
          <h4 className="text-[#797987] text-sm">{freelancer.jobTitle}</h4>
          <Stars rating={freelancer.averageRating} />
        </div>
      </div>
      <p className="flex-1 overflow-hidden text-ellipsis">
        {freelancer.profileSummary.length > 100
          ? `${freelancer.profileSummary.slice(0, 100)}...`
          : freelancer.profileSummary}
      </p>
      <Link to={`/profile/${freelancer.id}`}>
        <button className="bg-[#037C6A] text-white p-2 px-4 rounded-lg w-full mt-auto">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default FreelancerIcon;
