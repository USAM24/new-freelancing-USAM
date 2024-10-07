import { Outlet } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { useContext, useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

import { UserProvider } from '../Contexts/UserContext';
const RootLayout = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  useEffect(()=>{
    if(darkMode){
      document.body.classList.add('dark');
    }else{
      document.body.classList.remove('dark');
    }
  },[darkMode])
  return (
    <UserProvider>
    <main className="flex flex-col min-h-screen dark:bg-neutral-900 dark:text-pure-white">
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
      <div className="flex-grow min-h-[calc(100vh-128px)]">
        <Outlet />
      </div>
      <Footer/>
    </main>
    </UserProvider>
  );
};

export default RootLayout;
