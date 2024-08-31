import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import CheckListItem from "../../components/CheckListItem/CheckListItem";
import FreelancerIcon from "../../components/FreelancerIcon/FreelancerIcon";
import { useState } from "react";

const FindFreelancersPage = () => {
  const [checkedCategories, setCheckedCategories] = useState(["All"]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Development & IT",
    "Design & Creative",
    "Finance & Accounting",
    "Admin & Customer Support",
    "Sales & Marketing",
    "Engineering",
    "Writing & Translation"
  ];

  const freelancers = [
    {
      id: 1,
      name: "Alice Johnson",
      job: "Web Developer",
      category: "Development & IT",
      rating: 3,
      description: "I am a dedicated UI/UX designer with a passion for creating intuitive and visually appealing user interfaces that enhance the overall user experience.I am a dedicated UI/UX designer with a passion for creating intuitive and visually appealing user interfaces that enhance the overall user experience."
    },
    {
      id: 2,
      name: "Bob Smith",
      job: "Graphic Designer",
      category: "Design & Creative",
      rating: 4.9,
      description: "Creative graphic designer with a passion for visual storytelling."
    },
    {
      id: 3,
      name: "Carla Green",
      job: "Financial Analyst",
      category: "Finance & Accounting",
      rating: 4.5,
      description: "Skilled financial analyst with experience in data analysis and reporting."
    },
    {
      id: 4,
      name: "Alice Johnson",
      job: "Web Developer",
      category: "Development & IT",
      rating: 3,
      description: "Experienced web developer specializing in React and Node.js."
    },
    {
      id: 5,
      name: "Bob Smith",
      job: "Graphic Designer",
      category: "Design & Creative",
      rating: 4.9,
      description: "Creative graphic designer with a passion for visual storytelling."
    },
    {
      id: 6,
      name: "Carla Green",
      job: "Financial Analyst",
      category: "Finance & Accounting",
      rating: 4.5,
      description: "Skilled financial analyst with experience in data analysis and reporting."
    },
    {
      id: 7,
      name: "Alice Johnson",
      job: "Web Developer",
      category: "Development & IT",
      rating: 3,
      description: "Experienced web developer specializing in React and Node.js."
    },
    {
      id: 8,
      name: "Bob Smith",
      job: "Graphic Designer",
      category: "Design & Creative",
      rating: 4.9,
      description: "Creative graphic designer with a passion for visual storytelling."
    },
    {
      id: 9,
      name: "Carla Green",
      job: "Financial Analyst",
      category: "Finance & Accounting",
      rating: 4.5,
      description: "Skilled financial analyst with experience in data analysis and reporting."
    }
  ];

  const handleCategoryChange = (category) => {
    if (checkedCategories.includes(category)) {
      setCheckedCategories(
        checkedCategories.filter((item) => item !== category)
      );
    } else {
      setCheckedCategories([...checkedCategories, category]);
    }
  };

  return (
    <div className="px-12">
      <h4 className="text-[#777777]">
        Find Freelancers{" "}
        <span className="text-[#037C6A]">
          <KeyboardDoubleArrowRightIcon className="mx-2" />
          Find by your needed skills
        </span>
      </h4>
      <div className="flex flex-row justify-center align-center m-6">
        <div className="border border-[#777777] w-[60%] mx-12 p-2 rounded-md hover:border-[#037C6A]">
          <SearchIcon className="m-2 text-[#777777]" />
          <input
            type="text"
            placeholder="Search For Freelancer By Job"
            className="p-2 w-[90%] focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr]">
        <div className="bg-[#D1FAF4] h-full p-6 rounded-lg">
          <ul className="flex flex-col">
            {categories.map((category, index) => (
              <CheckListItem
                value={category}
                key={index}
                checked={checkedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-row flex-wrap">
          {freelancers
            .filter(
              (freelancer) =>
                (checkedCategories.includes(freelancer.category) ||
                  checkedCategories.includes("All")) &&
                (freelancer.name.toLowerCase().includes(searchQuery) ||
                  freelancer.job.toLowerCase().includes(searchQuery))
            )
            .map((freelancer, index) => (
              <FreelancerIcon freelancer={freelancer} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FindFreelancersPage;
