import React from "react";
import profile from "../../assets/profile.png";
import { Link } from 'react-router-dom';

const FreelancerIcon = ({ freelancer }) => {
  const HalfStar = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
        fill="#FFD700"
      />
      <path
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
        fill="#FFF"
        style={{ clipPath: "inset(0 0 0 50%)" }}
      />
    </svg>
  );

  const FullStar = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
        fill="#FFD700"
      />
    </svg>
  );

  const EmptyStar = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
        fill="#FFF"
      />
    </svg>
  );

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center">
        {Array.from({ length: totalStars }, (_, index) => (
          <span key={index} className="text-yellow-500">
            {index < filledStars
              ? FullStar()
              : hasHalfStar && index === filledStars
              ? HalfStar()
              : EmptyStar()}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="border border-[#B8B8BF] rounded-lg p-2 w-[300px] h-[250px] m-2 flex flex-col">
      <div className="flex flex-row mb-4">
        <img
          src={profile}
          alt="profile"
          className="p-2 w-20 h-20 rounded-full object-cover"
        />
        <div className="p-2 flex-1">
          <h3 className="font-semibold">{freelancer.name}</h3>
          <h4 className="text-[#797987]">{freelancer.category}</h4>
          {renderStars(freelancer.rating)}
        </div>
      </div>
      <p className="flex-1 overflow-hidden text-ellipsis">
        {freelancer.description}
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
