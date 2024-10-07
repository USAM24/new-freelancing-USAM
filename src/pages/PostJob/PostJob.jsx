import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirstPage from "../../components/PostJobPages/FirstPage";
import SecondPage from "../../components/PostJobPages/SecondPage";
import ThirdPage from "../../components/PostJobPages/ThirdPage";
import ConfirmationPage from "../../components/PostJobPages/ConfirmationPage";
import { useNavigate } from "react-router-dom";
import PostJobContext from "../../Contexts/PostJobContext";
import SaveDraftModal from "../../components/SaveDrafeModal";

const PostJob = () => {
  const navigate = useNavigate();
  const {
    scope,
    timeframe,
    category,
    jobTitle,
    skills,
    exp,
    pay,
    file,
    description,
    setFile,
    setScope,
    setTimeframe,
    setCategory,
    setJobTitle,
    setSkills,
    setExp,
    setPay,
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

  function handleSubmit() {
    // Send to server
    console.log(
      scope,
      timeframe,
      category,
      jobTitle,
      skills,
      exp,
      pay,
      file,
      description
    );

    // Clear data
    setFile(null);
    setScope("");
    setTimeframe("");
    setCategory("");
    setJobTitle("");
    setSkills([]);
    setExp("");
    setPay("");
    setDescription("");
    localStorage.setItem("pgNo", 1);

    navigate("/");
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

    setFile(null);
    setScope("");
    setTimeframe("");
    setCategory("");
    setJobTitle("");
    setSkills([]);
    setExp("");
    setPay("");
    setDescription("");
    localStorage.setItem("pgNo", 1);

    // Close the modal and navigate
    setIsModalOpen(false);
    // Clear data if necessary
    navigate("/");
  }

  function handleDiscard() {
    // Clear data
    setFile(null);
    setScope("");
    setTimeframe("");
    setCategory("");
    setJobTitle("");
    setSkills([]);
    setExp("");
    setPay("");
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
        <div className="flex justify-between items-center py-4">
          {pgNo > 1 && (
            <div className="flex items-center">
              <button
                className="bg-white-500 text-[#037C6A] border-2 border-teal-600 px-8 py-2 rounded hover:bg-[#037C6A] hover:text-white transition duration-300 font-semibold"
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
          <div className="flex items-center space-x-4">
            <button
              className="bg-white dark:text-black px-8 py-2 rounded font-semibold"
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
