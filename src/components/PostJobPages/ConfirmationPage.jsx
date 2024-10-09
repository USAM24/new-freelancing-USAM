import React, { useContext, useEffect } from "react";
import PostJobContext from "../../Contexts/PostJobContext";

export default function ConfirmationPage() {
  const {
    scope,
    timeframe,
    category,
    otherCategory,
    hourlyRate,
    fixedPrice,
    estimatedHours,
    jobTitle,
    skills,
    exp,
    pay,
    file,
    description,
  } = useContext(PostJobContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const savedSkills = ["Figma", "HTML", "Adobe Illustrator", "Notion"];
  return (
    <div className="border border-gray-300 p-8  rounded-md focus:outline-none focus:border-teal-600 hover:border-teal-600 shadow-sm transition duration-300 cursor-pointer">
      <div>
        <div className="border-2 border-gray-950 dark:border-gray-50 p-2 px-4 font-semibold rounded-md w-fit">
          {category !== "Other"? <h4>{category}</h4> : <h4>{otherCategory}</h4>}
        </div>
        <h2 className="text-3xl my-5 font-semibold">{jobTitle}</h2>
        <hr className="border-t border-gray-950 dark:border-gray-50 my-4" />
      </div>

      <div>
        <div className="my-3">
          <h3 className="text-xl my-1 font-semibold">{scope}</h3>
          <p>{scope === "Long Term Project" ? "More than 6 months" : "Less than 6 months"}</p>
        </div>
        <div className="my-3">
          <h3 className="text-xl my-1 font-semibold">Payment Method</h3>
          {pay=="Hourly Rate"?(<p>${hourlyRate} {pay} and Estimated Hours: {estimatedHours}H </p>):<p>${fixedPrice} {pay}</p>}
        </div>
        <div className="my-3">
          <h3 className="text-xl my-1 font-semibold">Description</h3>
          <p>
            {description}
          </p>
        </div>
        <div className="my-3">
          <h3 className="text-xl my-2 font-semibold">Skills</h3>
          <div className="flex flex-row flex-wrap  mx-3">
            {skills.map((skill, index) => (
              <div className="flex flex-row p-3 mr-3 mb-3 border border-gray-300 rounded-full" key={index}>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
