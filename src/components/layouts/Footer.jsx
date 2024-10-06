import { useEffect, useState } from "react"; // Importing hooks for managing state and lifecycle
// the icons 
import email_outline from "../../assets/mdi_email-outline.png";  
import phone_outline from "../../assets/phone_outline.png";
import location from "../../assets/Location on.png";
import google_icon from "../../assets/google.png"
import facebook_icon from "../../assets/logos_facebook.png";
import x_icon from "../../assets/prime_twitter.png";
import logo from "../../assets/cleanlogo.png";

const Footer = () => 
  {
  return (
    <footer className="bg-white dark:bg-neutral-900">
      <div className="  border-b border-[#ababab] " ></div>
     
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between mb-12  py-3">
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
          <img
              alt="logo"
              src={logo}
              // src="https://i.postimg.cc/9XZQqJDq/svgviewer-png-output-10.png"
              className="h-20 w-auto mb-7"
            />
            <p className=" font-medium leading-6  text-black dark:text-white font-roboto pr-14">
              Powerful Freelance Marketplace System with ability to change the
              Users (Freelancers & Clients)
            </p>
            <div className="flex mt-4">
              <a href="#" className="mr-4">
                <img src={google_icon} alt="google icon" />
              </a>
              <a href="#" className="mr-4">
                <img src={facebook_icon} alt="facebook icon" />
              </a>
              <a href="#" className="mr-4">
                <img src={x_icon} alt="x icon" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <h4 className="text-lg font-medium my-7 dark:text-white">For Clients</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/find-freelancers" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  Find Freelancers
                </a>
              </li>
              <li className="mb-2">
                <a href="/post-job" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  Post Project
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <h4 className="text-lg font-medium my-7 dark:text-white">For Freelancers</h4>
            <ul>
              <li className="mb-2">
                <a href="/find-job" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  Find work
                </a>
              </li>
              <li className="mb-2">
                <a href="/sign-up" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  Create Account
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <h4 className="text-lg font-medium my-7 dark:text-white">Contact Us</h4>
            <ul>
              <li className="flex mb-2">
                <img className="pr-2" src={location} alt="location icon" />
                <p className=" text-neutral-250 dark:text-neutral-200 font-medium ">
                  Egypt, Cairo
                </p>
              </li>
              <li className="flex mb-2">
                <img className="pr-2" src={phone_outline} alt="phone icon" />

                <p href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium ">
                  +0201009078456
                </p>
              </li>
              <li className="flex mb-2">
                <img className="pr-2" src={email_outline} alt="email icon"  />
       
                <a href="#" className=" text-neutral-250 dark:text-neutral-200 font-medium hover:text-gray-900">
                  usma24@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
      <div className=" mb-4 border-b-2 border-[#DCDCDC] " ></div>
   
        
      <div className="text-center container mx-auto mb-4">
          <p className="text-lg font-normal leading-6  text-neutral-250 dark:text-neutral-200  font-roboto">
            2024 USAM. All right reserved
          </p>
       
      </div>
    </footer>
  );
};

export default Footer;
