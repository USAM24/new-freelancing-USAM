import React from 'react'
import profile from "../../assets/profile.png"

function ClientComponent({review}) {
  return (
    <div className="rounded-lg p-4 w-[325px] m-2 flex flex-col bg-white">
      <div className="flex flex-row">
        <img
          src={profile}
          alt="profile"
          className="p-2 w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1 p-2">
          <h3 className="font-semibold">{review.name}</h3>
          <h4 className="text-[#797987]">{review.job}</h4>
        </div>
      </div>
      <p className="flex-1 overflow-hidden text-ellipsis">
        {review.comment}
      </p>
    </div>
  )
}

export default ClientComponent
