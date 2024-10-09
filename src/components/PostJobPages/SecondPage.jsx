import React, { useContext, useEffect, useState } from "react";
import PostJobContext from "../../Contexts/PostJobContext";
import RadioCard from "../RadioCard/RadioCard";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

export default function SecondPage() {
  const { skills, setSkills, jobTitle, setJobTitle, exp, setExp, pay, setPay, fixedPrice ,hourlyRate,setFixedPrice,setHourlyRate,setEstimatedHours } =
    useContext(PostJobContext);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const suggestedSkills = ["Figma", "HTML", "Adobe Illustrator", "Notion"];
  const [inputSkill, setInputSkill] = useState("");

  const handleAddSkill = () => {
    if (inputSkill.trim() && !skills.includes(inputSkill.trim())) {
      setSkills([...skills, inputSkill.trim()]);
      setInputSkill("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  };

  const handleSuggestedSkillClick = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-x-6 my-4">
        <div className="mb-10 lg:mb-0">
          <h2 className="text-4xl font-semibold leading-[60px]">
            What are the role, skills, experience level, and payment structure?{" "}
          </h2>
          <p className="leading-[30px] mt-2">
            Specify the job title, required skills, desired experience level,
            and preferred payment type.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center w-[70%]">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-2xl font-semibold">Job Title</h3>
              <input
                type="text"
                placeholder={jobTitle ? "" : "e.g. UX/UI Designer"}
                className="border border-gray-300 p-6 mb-5 mx-3 rounded-lg focus:outline-none dark:text-black focus:border-teal-600 hover:border-teal-600 shadow-sm transition duration-300"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />

              <h3 className="text-2xl font-semibold">Required Skills</h3>
              <input
                type="text"
                value={inputSkill}
                onChange={(e) => setInputSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Adobe Photoshop"
                className="border border-gray-300 p-6 mx-3 rounded-lg focus:outline-none dark:text-black focus:border-teal-600 hover:border-teal-600 shadow-sm transition duration-300"
              />

              {skills.length > 0 && (
                <div className="flex flex-row flex-wrap  mx-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-row p-3 mr-3 mb-3 border border-lime-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      <HighlightOffOutlinedIcon className="text-lime-500 " />
                      <p key={index} className="mx-3">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <h3 className="text-2xl font-semibold">Suggested Skills</h3>
              <div className="flex flex-row flex-wrap  mx-3">
                {suggestedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-row p-3 mr-3 mb-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800"
                    onClick={() => handleSuggestedSkillClick(skill)}
                  >
                    <ControlPointOutlinedIcon />
                    <p className="mx-3">{skill}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mt-5">Experience Level</h3>
              <div className=" mx-3">
                <RadioCard
                  title="Beginner"
                  Icon={StarOutlineOutlinedIcon}
                  name="exp"
                  description="Suited for projects tailored to beginners, emphasizing skill development."
                  value="Beginner"
                  selectedValue={exp}
                  setValue={setExp}
                />
                <RadioCard
                  title="Intermediate"
                  Icon={StarHalfOutlinedIcon}
                  name="exp"
                  description="Suited for projects requiring moderate experience and task complexity."
                  value="Intermediate"
                  selectedValue={exp}
                  setValue={setExp}
                />
                <RadioCard
                  title="Expert"
                  Icon={StarPurple500OutlinedIcon}
                  name="exp"
                  description="Ideal for projects demanding seasoned expertise and innovative solutions."
                  value="Expert"
                  selectedValue={exp}
                  setValue={setExp}
                />
              </div>

              <h3 className="text-2xl font-semibold mt-5">Payment Rate</h3>
              <div className=" mx-3">
                <RadioCard
                  title="Hourly Rate"
                  Icon={HistoryToggleOffOutlinedIcon}
                  name="pay"
                  description="Ideal for flexible projects with variable workloads, billing based on actual hours worked."
                  value="Hourly Rate"
                  selectedValue={pay}
                  setValue={setPay}
                  hourlyRate={hourlyRate}
                setHourlyRate={setHourlyRate}
                setEstimatedHours={setEstimatedHours}
                />
                <RadioCard
                  title="Fixed Price"
                  Icon={MonetizationOnOutlinedIcon}
                  name="pay"
                  description="Suited for projects with well-defined scopes and budgets, offering clear cost expectations."
                  value="Fixed Price"
                  selectedValue={pay}
                  setValue={setPay}
                  fixedPrice={fixedPrice}
                setFixedPrice={setFixedPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
