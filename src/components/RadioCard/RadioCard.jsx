import React, { useState } from "react";

export default function RadioCard({ title, Icon, description, name, value,selectedValue, setValue,otherCategory,
  setOtherCategory  }) {
  const handleDivClick = () => {
    document.getElementById(value).click();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCustomInputChange = (e) => {
    setOtherCategory(e.target.value);
  };
  return (
    <div
      className="flex flex-row p-8 m-2 w-4/5 cursor-pointer border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out"
      onClick={handleDivClick}
    >
      <div className="flex flex-col mr-4">
        <Icon className="mb-3 text-2xl" />
        <div className="mt-2 mb-2">
          <label htmlFor={value} className="text-base font-medium mb-1">
            {title}
          </label>
          <p className="text-sm font-light text-gray-500 leading-[20px]">{description}</p>
          {title === "Other" && (
        <input
          type="text"
          value={otherCategory}
          onChange={handleCustomInputChange}
          className=" p-2 border-2 border-gray-300 rounded-lg"
          placeholder="Enter your value"
        />
      )}
        </div>
      </div>
      <input type="radio" id={value} checked={selectedValue === value} // Bind the checked state
        onChange={handleChange} // Update state on change
        name={name} value={value} className="relative color-black accent-[#037C6A] h-5 w-5" />
        
    </div>
  );
}
