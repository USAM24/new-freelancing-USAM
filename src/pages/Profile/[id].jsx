import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../../assets/profile.png";
import Stars from "../../components/Stars/Stars";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import PortfolioComponent from "../../components/PortfolioComponent/PortfolioComponent";
import HireComponent from "../../components/HireComponent/HireComponent";

const ProfilePage = () => {
  const [page, setPage] = useState("Profile");
  const User = {
    name: "Mohamed Ahmed",
    category: "UI UX Design",
    country: "Egypt",
    payRate: 5,
    rating: 3.5,
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -50,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };

  return (
    <div className="py-4">
      <div className="flex align-senter justify-center m-6">
        <img src={profile} alt="profile" className="w-20 h-20" />
      </div>
      <div className="flex flex-row justify-center align-center">
        <h4 className="px-8">{User.name}</h4>
        <h4 className="px-8">{User.category}</h4>
        <h4 className="px-8">{User.country}</h4>
        <h4 className="px-8">Rate: {User.payRate}$/hr</h4>
        <h4 className="px-8">
          <Stars rating={User.rating} />
        </h4>
      </div>
      <div>
        <div className="flex justify-between px-12">
          <button
            onClick={() => setPage("Profile")}
            className={`px-4 relative ${
              page === "Profile"
                ? "text-[#037C6A] font-medium after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-emerald-600"
                : "hover:text-[#037C6A] hover:font-medium hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-emerald-600 transition duration-300"
            }`}
          >
            Profile
          </button>

          <button
            onClick={() => setPage("Portfolio")}
            className={`px-4 relative ${
              page === "Portfolio"
                ? "text-[#037C6A] font-medium after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-emerald-600"
                : "hover:text-[#037C6A] hover:font-medium hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-emerald-600 transition duration-300"
            } `}
          >
            Portfolio
          </button>

          <button
            className="ml-auto px-12 p-2 rounded-md bg-[#037C6A] text-white hover:bg-[#fff] hover:text-[#037C6A] transition duration-300"
            onClick={() => setPage("Hire")}
          >
            Hire Me
          </button>
        </div>
        <div className="bg-[#D9D9D9]">
          <AnimatePresence mode='wait'>
            {page === "Profile" && (
              <motion.div
                key="Profile"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ProfileComponent />
              </motion.div>
            )}
            {page === "Portfolio" && (
              <motion.div
                key="Portfolio"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PortfolioComponent />
              </motion.div>
            )}
            {page === "Hire" && (
              <motion.div
                key="Hire"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HireComponent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
