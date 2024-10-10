import { useContext, useEffect, useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../../assets/cleanlogo.png";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import LanguageToggle from '../../langTogglingComponent/langToggle';
import useReactQuery from '../../hooks/useReactQuery';
import UserProfileNav from '../UserProfileNav';
import Button from '../ui/Button';
import { UserContext } from '../../Contexts/UserContext';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setDarkMode, darkMode }) => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userData, token, setToken } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('Token_Value');
    localStorage.removeItem('User_Data');
    setToken(null);
  };

  const isLoggedIn = true;

  const navData = [
    { id: 1, link: "/", name: t('nav.home') },
    { id: 2, link: "/find-job", name: t('nav.findJobs') },
    { id: 3, link: "/find-freelancers", name: t('nav.findFreelancers') },
    { id: 4, link: "/post-job", name: t('nav.postJob') },
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
            <span className="sr-only">{t('logo')}</span>
            <img
              alt="logo"
              src={logo}
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">{t('openMenu')}</span>
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
              {t(name)}
            </NavLink>
          ))}
        </PopoverGroup>

        {/* Desktop authentication buttons */}
        <div className="hidden lg:flex lg:justify-end space-x-5">
          {!token ? (
            <div className="space-x-5">
              <Button width={'md'} variant={'outline'}>
                <Link to={'/sign-in'}>{t('login')}</Link>
              </Button>
              <Button width={'md'} variant={'primary'}>
                <Link to={'/sign-up'}>{t('signUp')}</Link>
              </Button>
            </div>
          ) : (
            <div className='hidden lg:flex lg:justify-end lg:items-center space-x-5'>
              {/* <UserProfileNav /> */}
              <img src={userData.image} alt="" />
              <Link to={`/freelancer/${userData.id}`}>{userData.firstName}</Link>
              <Button width={'md'} variant={'primary'}>
                <Link to={'/sign-in'} onClick={handleLogout}>{t('logout')}</Link>
              </Button>
            </div>
          )}
        <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? <i className="fa-solid fa-sun text-pure-white text-2xl"></i> : <i class="fa-solid fa-moon text-pure-black dark:text-pure-white text-2xl"></i>}
 
</button>
          <LanguageToggle/>
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
              <span className="sr-only">{t('yourCompany')}</span>
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
              <span className="sr-only">{t('closeMenu')}</span>
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
                    {t(name)}
                  </NavLink>
                ))}
              </div>

              {/* Authentication buttons in mobile menu */}
              <div className="py-8 space-y-2">
                <NavLink
                  to="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 dark:text-neutral-100 hover:bg-primary-800 dark:hover:bg-primary-100"
                >
                  {token ? <Link to={`/freelancer/${userData.id}`}>{userData.firstName}</Link> : t('login')}
                </NavLink>

                <NavLink
                  to="sign-up"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 dark:text-neutral-100 hover:bg-primary-800 dark:hover:bg-primary-100"
                >
                  {token ? <Link to={'/sign-in'} onClick={handleLogout}>{t('logout')}</Link> : t('signUp')}
                </NavLink>
              </div>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <i className="fa-solid fa-sun text-pure-white text-2xl"></i> : <i class="fa-solid fa-moon text-pure-black dark:text-pure-white text-2xl"></i>}
                {t('toggleDarkMode')}
              </button>
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
