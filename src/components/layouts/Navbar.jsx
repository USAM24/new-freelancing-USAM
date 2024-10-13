import { useContext, useEffect, useState } from 'react'; // Importing hooks for managing state and lifecycle
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'; // Importing UI components from Headless UI
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Importing routing components
import { motion, AnimatePresence } from 'framer-motion'; // Importing Framer Motion for animations
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing icons from Heroicons
import logo from "../../assets/cleanlogo.png";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

import useReactQuery from '../../hooks/useReactQuery'; // Custom hook for React Query
import UserProfileNav from '../UserProfileNav'; // User profile navigation component
import Button from '../ui/Button';
import { UserContext } from '../../Contexts/UserContext'
import { BaseURL } from '../../api/BaseURL';

const Navbar = ({ setDarkMode, darkMode }) => {
  let navigate = useNavigate();
  // State to manage the open/close state of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      pointerEvents: 'none',
    },
    open: {
      opacity: 1,
      scale: 1,
      pointerEvents: 'auto',
      transition: {
        duration: 0.2, // Adjust animation duration as needed
        ease: 'easeOut',
      },
    },
  };

  // State to store navigation data fetched from the API
  // const [navData, setNavData] = useState([]);

  const { userData, token, setToken } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('Token_Value');
    localStorage.removeItem('User_Data');
    setToken(null);
  };

  // Example logged-in state; replace with actual authentication logic
  const isLoggedIn = true;

  // Fetching navigation links data using React Query
  // const { data } = useReactQuery({
  //   queryKey: ['nav-links'],
  //   url: '/navLinks',
  // });

  // Updating navData state when data is fetched
  // useEffect(() => {
  //   if (data) {
  //     setNavData(data);
  //   }
  // }, [data]);
  const navData = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/find-job", name: "Find Jobs" },
    { id: 3, link: "/find-freelancers", name: "Find Freelancers" },
    { id: 4, link: "/post-job", name: "Post Job" },

  ];


  return (
    <header className="bg-pure-white dark:bg-neutral-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:py-4 lg:px-8"
      >
        {/* Logo section */}
        <div className="flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="logo"
              src={logo}
              // src="https://i.postimg.cc/9XZQqJDq/svgviewer-png-output-10.png"
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-100"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="h-10 w-10 text-neutral-800 dark:text-neutral-100"
            />
          </motion.button>
        </div>

        {/* Desktop navigation links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navData?.map(({ id, link, name }) => (
            <NavLink
              to={link}
              key={id}
              className="text-lg font-normal leading-6 text-black dark:text-white hover:text-[#252525] duration-300"
            >
              {name}
            </NavLink>
          ))}
        </PopoverGroup>

        {/* Desktop authentication buttons */}
        <div className="hidden lg:flex lg:justify-end space-x-5 z-20">
          {!token ? (
            <div className="space-x-5">
              {/* <Button width={'md'} variant={'outline'}>
                <Link to={'/sign-in'}>Login</Link>
              </Button> */}
              <Link to={'/sign-in'}><Button width={'md'} variant={'outline'}>Login</Button></Link>
              <Link to={'/sign-up'}><Button width={'md'} variant={'primary'}>Sign Up</Button></Link>
              {/* <Button width={'md'} variant={'primary'}>
                <Link to={'/sign-up'}>Sign Up</Link>
              </Button> */}
            </div>
          ) : (
            <div className='hidden lg:flex lg:justify-end lg:items-center space-x-5'>
              {/* <UserProfileNav /> */}
              {userData != null &&
                <><div className='w-1/4 rounded-full flex justify-end'><Link className='flex justify-end' to={`/freelancer/${userData.id}`}><img src={BaseURL + (userData.image)} alt="UserImage" className='w-1/2 rounded-full' /></Link></div>
                  <div className='relative inline-block text-left' role='button' onClick={handleDropdownToggle}><div>
                    <button type="button" className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md text-md font-semibold" id="menu-button" aria-expanded="true" aria-haspopup="true">
                      {userData.firstName}
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                    {dropdownOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        animate={dropdownOpen ? 'open' : 'closed'}
                        initial="closed"
                        className={`origin-top-left absolute left-0 mt-5 w-48 rounded-md shadow-lg bg-stone-200 dark:bg-stone-800 ring-1 ring-black ring-opacity-5 transform ${dropdownOpen ? '' : 'pointer-events-none'}`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <Link
                            to={`/freelancer/${userData.id}`}
                            className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            Profile
                          </Link>
                          <Link
                            to={`/freelancer/${userData.id}/projects`}
                            className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                          >
                            Projects
                          </Link>
                          <Link
                            to={`/freelancer/${userData.id}/proposals`}
                            className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            Proposals
                          </Link>
                          <Link
                            to={``}
                            className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                          >
                            Payment
                          </Link>
                          <Link
                            to={'/sign-in'}
                            className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-4"
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </div></>}
              {/* <Button width={'md'} variant={'primary'}>
                <Link to={'/sign-in'} onClick={handleLogout}>Logout</Link>
              </Button> */}
            </div>
          )}
          <button onClick={() => { setDarkMode(!darkMode) }}>{darkMode ? <i className="fa-solid fa-sun text-pure-white text-2xl"></i> : <i className="fa-solid fa-moon text-pure-black dark:text-pure-white text-2xl"></i>}</button>
        </div>

      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="lg:hidden"
          >
            {/* DialogPanel with animation */}
            <motion.div
              initial={{ y: '-100% - 128px', opacity: 0 }} // Initial state
              animate={{ y: 0, opacity: 1 }} // Animate to visible state
              exit={{ y: '-100% - 128px', opacity: 0 }} // Exit animation
              transition={{ duration: 0.3 }} // Animation duration
              className="fixed inset-0 z-10 overflow-y-auto"
            >
              <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-primary-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                {/* Close button and logo in mobile menu */}
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="logo"
                      src="https://i.postimg.cc/9XZQqJDq/svgviewer-png-output-10.png"
                      className="h-20 w-auto"
                    />
                  </Link>
                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on tap
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-8 w-8 text-neutral-800"
                    />
                  </motion.button>
                </div>

                {/* Navigation links in mobile menu */}
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/50">
                    <div className="space-y-2 py-6">
                      {navData?.map(({ id, link, name }) => (
                        <NavLink
                          to={link}
                          key={id}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 dark:text-neutral-100 hover:bg-primary-800 dark:hover:bg-primary-100"
                        >
                          {name}
                        </NavLink>
                      ))}
                    </div>

                    {/* Authentication buttons in mobile menu */}
                    <div className="py-8 space-y-2">
                      <NavLink
                        to={`/freelancer/${userData.id}`}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 dark:text-neutral-100 hover:bg-primary-800 dark:hover:bg-primary-100"
                      >
                        {token ? <Link to={`/freelancer/${userData.id}`}>{userData.firstName}</Link> : 'Login'}
                      </NavLink>

                      <NavLink
                        to="sign-in"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 dark:text-neutral-100 hover:bg-primary-800 dark:hover:bg-primary-100"
                      >
                        {token ? <Link to={'/sign-in'} onClick={handleLogout}>Logout</Link> : 'Register'}
                      </NavLink>
                    </div>
                    <button onClick={() => { setDarkMode(!darkMode) }}>{darkMode ? <i className="fa-solid fa-sun text-pure-white text-2xl"></i> : <i class="fa-solid fa-moon text-pure-black dark:text-pure-white text-2xl"></i>}</button>
                  </div>
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
