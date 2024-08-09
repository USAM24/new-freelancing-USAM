import { useEffect, useState } from 'react'; // Importing hooks for managing state and lifecycle
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'; // Importing UI components from Headless UI
import { Link, NavLink } from 'react-router-dom'; // Importing routing components
import { motion, AnimatePresence } from 'framer-motion'; // Importing Framer Motion for animations
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing icons from Heroicons

import useReactQuery from '../../hooks/useReactQuery'; // Custom hook for React Query
import UserProfileNav from '../UserProfileNav'; // User profile navigation component
import Button from '../ui/Button';

const Navbar = () => {
  // State to manage the open/close state of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State to store navigation data fetched from the API
  const [navData, setNavData] = useState([]);

  // Example logged-in state; replace with actual authentication logic
  const isLoggedIn = true;

  // Fetching navigation links data using React Query
  const { data } = useReactQuery({
    queryKey: ['nav-links'],
    url: '/navLinks',
  });

  // Updating navData state when data is fetched
  useEffect(() => {
    if (data) {
      setNavData(data);
    }
  }, [data]);

  return (
    <header className="bg-pure-white">
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
              src="https://i.postimg.cc/9XZQqJDq/svgviewer-png-output-10.png"
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="h-10 w-10 text-neutral-800"
            />
          </motion.button>
        </div>

        {/* Desktop navigation links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navData?.map(({ id, link, name }) => (
            <NavLink
              to={link}
              key={id}
              className="text-lg font-normal leading-6 text-pure-black hover:text-[#252525] duration-300"
            >
              {name}
            </NavLink>
          ))}
        </PopoverGroup>

        {/* Desktop authentication buttons */}
        <div className="hidden lg:flex lg:justify-end space-x-5">
          {isLoggedIn ? (
            <div className="space-x-5">
              <Button width={'md'} variant={'outline'}>
                <Link to={'/sign-in'}>Login</Link>
              </Button>
              <Button width={'md'} variant={'primary'}>
                <Link to={'/sign-up'}>Sign Up</Link>
              </Button>
            </div>
          ) : (
            <div>
              <UserProfileNav />
            </div>
          )}
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
              <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                      {navData?.slice(1).map(({ id, link, name }) => (
                        <NavLink
                          to={link}
                          key={id}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 hover:bg-primary-800"
                        >
                          {name}
                        </NavLink>
                      ))}
                    </div>

                    {/* Authentication buttons in mobile menu */}
                    <div className="py-8 space-y-2">
                      <NavLink
                        to="/sign-in"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 hover:bg-primary-800"
                      >
                        {isLoggedIn ? 'Profile' : 'Login'}
                      </NavLink>

                      <NavLink
                        to="sign-up"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 hover:bg-primary-800"
                      >
                        {isLoggedIn ? 'Logout' : 'Register'}
                      </NavLink>
                    </div>
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
