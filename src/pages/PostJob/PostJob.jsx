import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirstPage from "../../components/PostJobPages/FirstPage";
import SecondPage from "../../components/PostJobPages/SecondPage";
import ThirdPage from "../../components/PostJobPages/ThirdPage";
import ConfirmationPage from "../../components/PostJobPages/ConfirmationPage";
import { useNavigate } from "react-router-dom";
import PostJobContext from "../../Contexts/PostJobContext";
import SaveDraftModal from "../../components/SaveDrafeModal";
import { isDraft } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from '../../../node_modules/jwt-decode';
import { BaseURL } from "../../api/BaseURL";
import { UserContext } from "../../Contexts/UserContext";
import { errorNotification, successNotification } from "../../hooks/Notification";

const PostJob = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);
  const [postJobData, setPostJobData] = useState({
    timeframe: "",
    category: "",
    attached_file: "",
    jobTitle: "",
    skills: [],
    description: "",
    ExperienceLevel: "",
    paymentType: "",
    budget: "",
    estimatedHours:null,
    isDraft:false
  })
  const {
    scope,
    timeframe,
    category,
    otherCategory,
    jobTitle,
    skills,
    exp,
    pay,
    fixedPrice,
    hourlyRate,
    estimatedHours,
    file,
    description,
    // postJobData,
    setFile,
    setScope,
    setTimeframe,
    setCategory,
    setOtherCategory,
    setJobTitle,
    setSkills,
    setExp,
    setPay,
    setFixedPrice,
    setHourlyRate,
    setEstimatedHours,
    setDescription,
  } = useContext(PostJobContext);

  const [pgNo, setPgNo] = useState(() => {
    const savedPageNumber = localStorage.getItem("pgNo");
    return savedPageNumber ? JSON.parse(savedPageNumber) : 1;
  });

  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    localStorage.setItem("pgNo", JSON.stringify(pgNo));
  }, [pgNo]);

  async function handleSubmit(e) {
    e.preventDefault();
    // Send to server
    console.log(
      {scope,
      timeframe,
      category,
      jobTitle,
      skills,
      exp,
      pay,
      fixedPrice,
      hourlyRate,
      estimatedHours,
      file,
      description}
    );

    postJobData.timeframe=scope;
    category=='Other' ? postJobData.category=otherCategory:postJobData.category=category
    postJobData.attached_file=file;
    postJobData.jobTitle=jobTitle;
    postJobData.skills=skills;
    postJobData.description=description;
    postJobData.ExperienceLevel=exp;
    postJobData.paymentType=pay;
    postJobData.paymentType=="Hourly Rate"?postJobData.budget=hourlyRate:postJobData.budget=fixedPrice;
    postJobData.paymentType=="Hourly Rate"?postJobData.estimatedHours=Number(estimatedHours):postJobData.estimatedHours=null;
    console.log(postJobData);
    
    const token = localStorage.getItem('Token_Value');
if (token) {
  const decodeToken = jwtDecode(token);
  setToken(decodeToken);  // Storing in context

  // Log decoded token and post job data
  console.log('Decoded token:', decodeToken);
  console.log('Post job data:', postJobData);

  try {
    const response = await fetch(BaseURL + 'projects', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postJobData), // Log data being sent
    });

    if (response.ok) {
      // Success handling
      setFile(null);
      setScope("");
      setTimeframe("");
      setCategory("");
      setOtherCategory('');
      setJobTitle("");
      setSkills([]);
      setExp("");
      setPay("");
      setDescription("");
      setHourlyRate("");
      setFixedPrice("");
      setEstimatedHours("");
      localStorage.setItem("pgNo", 1);
      successNotification('Posting Job Successfully')
      navigate("/");
    } else {
      // Capture and log error details from response
      const errorData = await response.json();
      console.error("Error response:", errorData);
    }
  } catch (error) {
    console.error("Failed to post job data:", error);
    errorNotification("Failed to post job data")
  }
} else {
  alert("You should login first");
}


    // const token = localStorage.getItem('Token_Value');
    // if (token) {
    //   const decodeToken = jwtDecode(token);
    //   setToken(decodeToken);  // Storing in context
    //   try {
    //     const response = await fetch(BaseURL+'projects', {
    //       method: 'POST',
    //       headers: {
    //         'Authorization': `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(postJobData),
    //     });
  
    //     if (response.ok) {
          
    //       // Clear data
    //       setFile(null);
    //       setScope("");
    //       setTimeframe("");
    //       setCategory("");
    //       setOtherCategory('');
    //       setJobTitle("");
    //       setSkills([]);
    //       setExp("");
    //       setPay("");
    //       setDescription("");
    //       setHourlyRate("");
    //       setFixedPrice("");
    //       setEstimatedHours("");
    //       localStorage.setItem("pgNo", 1);

    //       navigate("/");
    //     }
    //   } catch (error) {
    //     console.error("Failed to fetch user data:", error);
    //   }
    // }else{
    //   alert("You should login first")
    // }

    // axios.post(BaseURL+'projects',postJobData).then((response)=>{
    //   console.log(response.data);
    //   // Clear data
    // setFile(null);
    // setScope("");
    // setTimeframe("");
    // setCategory("");
    // setOtherCategory('');
    // setJobTitle("");
    // setSkills([]);
    // setExp("");
    // setPay("");
    // setDescription("");
    // setHourlyRate("");
    // setFixedPrice("");
    // setEstimatedHours("");
    // localStorage.setItem("pgNo", 1);

    // navigate("/");
    // }).catch((error)=>{
    //   console.error(error);
    // })

    // Clear data
    // setFile(null);
    // setScope("");
    // setTimeframe("");
    // setCategory("");
    // setOtherCategory('');
    // setJobTitle("");
    // setSkills([]);
    // setExp("");
    // setPay("");
    // setDescription("");
    // setHourlyRate("");
    // setFixedPrice("");
    // setEstimatedHours("");
    // localStorage.setItem("pgNo", 1);

    // navigate("/");
  }

  function handleCancel() {
    setIsModalOpen(true); // Open the modal
  }

  function handleSaveDraft() {
    // Save as draft logic
    //send to backend
    console.log("Saving progress as draft:", {
      scope,
      timeframe,
      category,
      jobTitle,
      skills,
      exp,
      pay,
      file,
      description,
    });

    postJobData.timeframe=scope;
    category=='Other' ? postJobData.category=otherCategory:postJobData.category=category
    postJobData.attached_file=file;
    postJobData.jobTitle=jobTitle;
    postJobData.skills=skills;
    postJobData.description=description;
    postJobData.ExperienceLevel=exp;
    postJobData.paymentType=pay;
    postJobData.paymentType=="Hourly Rate"?postJobData.budget=hourlyRate:postJobData.budget=fixedPrice;
    postJobData.paymentType=="Hourly Rate"?postJobData.estimatedHours=Number(estimatedHours):postJobData.estimatedHours=null;
    postJobData.isDraft=true;
    console.log(postJobData);

    // axios.post(BaseURL+'/projects',postJobData).then((response)=>{
    //   console.log(response.data);
    //   setFile(null);
    //   setScope("");
    //   setTimeframe("");
    //   setCategory("");
    //   setOtherCategory('');
    //   setJobTitle("");
    //   setSkills([]);
    //   setExp("");
    //   setPay("");
    //   setHourlyRate("");
    //   setFixedPrice("");
    //   setEstimatedHours("");
    //   setDescription("");
    //   localStorage.setItem("pgNo", 1);

    //   // Close the modal and navigate
    //   setIsModalOpen(false);
    //   // Clear data if necessary
    //   navigate("/");
    // }).catch((error)=>{
    //   console.error(error);
    // })

    
  }

  function handleDiscard() {
    // Clear data
    setFile(null);
    setScope("");
    setTimeframe("");
    setCategory("");
    setOtherCategory('');
    setJobTitle("");
    setSkills([]);
    setExp("");
    setPay("");
    setHourlyRate("");
    setFixedPrice("");
    setEstimatedHours("");
    setDescription("");
    localStorage.setItem("pgNo", 1);

    setIsModalOpen(false);
    navigate("/");
  }

  // Animation variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      x: direction === 1 ? 300 : -300, // Slide direction based on navigation
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: direction === 1 ? -300 : 300, // Slide direction based on navigation
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="p-4 mx-14">
      <div>
        <p className="m-2 font-medium">Page {pgNo} / 4</p>
        <AnimatePresence mode='wait'>
          <motion.div
            key={pgNo}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
          >
            {pgNo === 1 ? (
              <FirstPage />
            ) : pgNo === 2 ? (
              <SecondPage />
            ) : pgNo === 3 ? (
              <ThirdPage />
            ) : (
              <ConfirmationPage />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {pgNo > 1 && (
            <div className="flex items-center">
              <button
                className="bg-white-500 text-[#037C6A] border-2 border-teal-600 px-8 py-2 my-3 rounded hover:bg-[#037C6A] hover:text-white transition duration-300 font-semibold"
                type="button"
                onClick={() => {
                  setDirection(-1); // Set direction to backward
                  setPgNo(pgNo - 1);
                }}
              >
                Back
              </button>
            </div>
          )}
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <button
              className="bg-white dark:text-black px-8 py-2 rounded font-semibold my-2"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            {pgNo < 4 && (
              <button
                className="bg-[#037C6A] text-white border-2 border-teal-600 px-8 py-2 rounded hover:bg-white hover:text-[#037C6A] transition duration-300 font-semibold"
                type="button"
                onClick={() => {
                  setDirection(1); // Set direction to forward
                  setPgNo(pgNo + 1);
                }}
              >
                Next
              </button>
            )}
            {pgNo === 4 && (
              <button
                className="bg-[#037C6A] text-white border-2 border-teal-600 px-8 py-2 rounded hover:bg-white hover:text-[#037C6A] transition duration-300 font-semibold"
                type="button"
                onClick={handleSubmit}
              >
                Post Your Project
              </button>
            )}
          </div>
        </div>
      </div>
      <SaveDraftModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSave={handleSaveDraft}
        onDiscard={handleDiscard}
      />
    </div>
  );
};

export default PostJob;
