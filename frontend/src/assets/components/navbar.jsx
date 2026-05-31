import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { clearUser, toggleTheme } from "../../redux/userSlice";
import axios from "axios";
import { serverurl } from "../../App";
function Navbar() {
  const { user, theme } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`${serverurl}/api/auth/logout`, { withCredentials: true });
      dispatch(clearUser());
      navigate("/");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <div className="bg-[#f3f3f3] dark:bg-[#121212] flex justify-center px-2 sm:px-4 pt-4 sm:pt-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl bg-white dark:bg-[#1c1c1e] rounded-[24px] border border-gray-200 dark:border-gray-800 px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center relative shadow-sm transition-colors duration-300"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/home")}>
          <div className="bg-black dark:bg-white dark:text-black text-white p-2.5 rounded-xl shadow-md flex items-center justify-center">
            <BsRobot size={18} />
          </div>

          <h1 className="font-semibold hidden md:block text-lg dark:text-white">
            InterviewIQ.AI
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 relative">
          
          {/* Theme switcher */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 sm:p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-all cursor-pointer flex items-center justify-center shadow-sm"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FiSun size={16} className="sm:block hidden" /> : <FiMoon size={16} className="sm:block hidden" />}
            {theme === "dark" ? <FiSun size={14} className="sm:hidden" /> : <FiMoon size={14} className="sm:hidden" />}
          </button>

          {/* Credits */}
          <div className="relative">
            <button
              onClick={() => {
                setShowCreditPopup(!showCreditPopup);
                setShowUserPopup(false);
              }}
              className="flex items-center gap-1 sm:gap-2 bg-gray-100 dark:bg-gray-800 px-2 sm:px-4 py-2 rounded-full text-sm sm:text-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition"
            >
              <BsCoin size={16} className="text-yellow-500 sm:hidden" />
              <BsCoin size={20} className="text-yellow-500 hidden sm:block" />
              <span className="hidden sm:inline">{user?.credits || 0}</span>
            </button>

            {showCreditPopup && (
              <div className="absolute right-0 sm:right-[-50px] mt-3 w-56 sm:w-64 bg-white dark:bg-[#1c1c1e] shadow-xl border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5 z-50">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Need more credits to continue interviews?
                </p>

                <button
                  onClick={() => {
                    setShowCreditPopup(false);
                    navigate("/pricing");
                  }}
                  className="w-full bg-black dark:bg-white dark:text-black text-white py-2.5 rounded-xl text-sm font-bold shadow-md cursor-pointer hover:opacity-90 transition"
                >
                  Buy more credits
                </button>
              </div>
            )}
          </div>

          {/* User */}
          <div className="relative">
            <button
              onClick={() => {
                setShowUserPopup(!showUserPopup);
                setShowCreditPopup(false);
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-black dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center font-semibold cursor-pointer text-xs sm:text-sm"
            >
              {user
                ? user?.name?.slice(0, 1).toUpperCase()
                : <FaUserAstronaut size={14} className="sm:hidden" />}
              {!user && <FaUserAstronaut size={16} className="hidden sm:block" />}
            </button>

            {showUserPopup && (
              <div className="absolute right-0 mt-3 w-44 sm:w-48 bg-white dark:bg-[#1c1c1e] shadow-xl border border-gray-200 dark:border-gray-800 rounded-xl p-3 sm:p-4 z-50">
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 truncate">
                  {user?.name}
                </p>

                <button
                  onClick={() => {
                    setShowUserPopup(false);
                    navigate("/history");
                  }}
                  className="w-full text-left text-xs sm:text-sm py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-200 cursor-pointer"
                >
                  Interview History
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left text-xs sm:text-sm py-2 text-red-500 flex items-center gap-2 cursor-pointer transition duration-200 hover:text-red-600"
                >
                  <HiOutlineLogout />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;