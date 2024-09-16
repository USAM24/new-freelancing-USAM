import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import JobIcon from "../../components/JobIcon/JobIcon.jsx";
import SearchIcon from "@mui/icons-material/Search";
import CheckListItem from "../../components/CheckListItem/CheckListItem";
import { useState } from "react";
import PaginationComponent from "../../components/Pagination/Pagination.jsx";

const FindJobPage = () => {


  const [checkedCategories, setCheckedCategories] = useState(["All"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage , setCurrentPage] =useState(1);
  const [postsPerPage , setPostsPerPage] =useState(5);

  


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

  const jobs = [
    {
      id: 1,
      job: "UX/UI Designer for a website (Figma Required)",
      skills: ["figma", "web design", "user experience","HTML","CSS"],
      category: "Design & Creative",
      description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
    },
    {
      id: 2,
      job: "UX/UI Designer for a website (Figma Required)",
      skills: ["figma", "web design", "user experience","HTML","CSS"],
      category: "Development & IT",
      description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
    },
    {
      id: 3,
      job: "UX/UI Designer for a website (Figma Required)",
      skills: ["figma", "web design", "user experience","HTML","CSS"],
      category: "Development & IT",
      description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
   },
    {
      id: 4,
      job: "UX/UI Designer for a website (Figma Required)",
      skills: ["figma", "web design", "user experience","HTML","CSS"],
      category: "Development & IT",
      description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
   },
    {
      id: 5,
      job: "UX/UI Designer for a website (Figma Required)",
      skills: ["figma", "web design", "user experience","HTML","CSS"],
      category: "Development & IT",
      description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
   },
    {
      id: 6,
      job: "UX/UI Designer for a website (Figma Required)",
      skills: ["figma", "web design", "user experience","HTML","CSS"],
      category: "Development & IT",
      description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
   },
    {
      id: 7,
      job: "UX/UI Designer for a website (Figma Required)",
      skills: ["figma", "web design", "user experience","HTML","CSS"],
      category: "Development & IT",
      description: "We are looking for a highly creative and motivated Freelance UX/UI Designer to join our dynamic team. The ideal candidate will be passionate about creating seamless, innovative, and user-friendly designs for both web and mobile platforms. If you have a knack for visual storytelling and a keen eye for detail, we would love to hear from you!"
   }
  ];

  const lastPageIndex = currentPage * postsPerPage;
  const firstPageIndex = lastPageIndex - postsPerPage;


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
        Find a Job{" "}
        <span className="text-[#037C6A]">
          <KeyboardDoubleArrowRightIcon className="mx-2" />
          Design &amp; Creative
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
        <div className="bg-[#D1FAF4] max-h-[626px] p-6 rounded-lg">
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
        <div className="flex flex-row flex-wrap ml-5 gap-2">
          {/**/}
          
            
          <div className="max-w-4xl py-6 px-8 flex flex-col gap-5">
              <h2 className="mb-8 font-medium text-2xl">Jobs you may like</h2>
              {jobs
              .filter(
                (jobb) =>
                  (checkedCategories.includes(jobb.category) || 
                  checkedCategories.includes("All")) &&
                  (jobb.job.toLowerCase().includes(searchQuery) || 
                  jobb.skills.some(skill => skill.toLowerCase().includes(searchQuery))) // Search in skills array
              ).slice(firstPageIndex,lastPageIndex)
                  .map((jobb, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: jobb.id % 2 == 0 ? "#F2F2F2" : "", // alternating background colors
                    }}
          >
            <JobIcon job={jobb} />

          </div>
        ))
      }

            <div className="flex justify-center m-8">
              <PaginationComponent totalPosts={jobs.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobPage;
