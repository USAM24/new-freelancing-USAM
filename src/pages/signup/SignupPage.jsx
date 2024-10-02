import React, { useState } from "react";
import signup_img from "../../assets/signup.png";
import ggl from "../../assets/google.png";
import facebook_logo from "../../assets/logos_facebook.png";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  let navigate = useNavigate();

  function navigateToLogin() {
    navigate("/");
  }
  const handleSignUp = ()=>{}
  return (
    
      <div className="container mx-auto pt-5">
        <div className="bg-primary-700 p-6 flex flex-wrap lg:py-24 rounded-lg justify-between lg:m-10  ">
          <div className="md:w-1/2">
            <img src={signup_img} className="rounded-md" alt="" />
          </div>

          <div className="md:w-1/2  ">
            <div>
              <div className=" mb-10">
                <h5
                  className=" font-semibold text-center mb-5"
                  style={{ fontSize: 27 }}
                >
                  Welcome to USAM, let's create an account now
                </h5>
                <div className="flex justify-center align-center">
                  <h6 className=" m-0 text-white">Or Connect With</h6>
                  <div className="flex align-top">
                    <div className="ml-3"> 
                      <a href="#">
                        <img src={facebook_logo} alt="facebook logo" />
                      </a>
                    </div>

                    <div className="ml-3">
                      <a href="#">
                        <img src={ggl} className=" mb-1 " alt="google logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSignUp} className="  mt-6  ">
                <div className="flex">
                  <div className="md:w-1/2 mt-3 px-5 sm:px-2 sm:mt-0">
                    <label
                      htmlFor="firstName"
                      className="mb-3 font-semibold block text-blac "
                      style={{ fontSize: 24 }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className=" w-full py-3 text-gray-700 shadow appearance-none border  rounded-md px-3"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="md:w-1/2 mt-3 px-5 sm:px-2 sm:mt-0">
                    <label
                      htmlFor="lastName"
                      className="mb-3 font-semibold block text-blac"
                      style={{ fontSize: 24 }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className=" w-full py-3 text-gray-700 shadow appearance-none border  rounded-md px-3"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="mb-3 font-semibold block text-blac"
                    style={{ fontSize: 24 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className=" w-full py-3 text-gray-700 shadow appearance-none border  rounded-md px-3"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                  <label
                    htmlFor="password"
                    className="mb-3 font-semibold block text-black"
                    style={{ fontSize: 24 }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full py-3 text-gray-700 shadow appearance-none border rounded-md px-3"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                  <label
                    htmlFor="role"
                    className="mb-3 font-semibold block text-black"
                    style={{ fontSize: 24 }}
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full py-3 text-gray-700 shadow appearance-none border rounded-md px-3"
                  >
                    <option value="employee">serching for freelancer</option>
                    <option value="freelancer">Freelance</option>
                  </select>
                </div>
                <div className="flex justify-end mt-7">
                <button
                  onClick={() => navigateToLogin()}
                  className=" bg-black rounded-5 text-white px-14 py-2 rounded-lg"
                  style={{fontSize:22}}
                >
                  Continue
                </button>
              </div>
              <div className="flex justify-center align-center mt-4 ">
                <h6 className="m-0 me-1 small-font fw-bold">
                  Already have an account ?{" "}
                </h6>
                <Link to={"/sign-in"} className="text-decoration-none">
                  <h6 className="text-white m-0 small-font fw-bold">
                    Login Now
                  </h6>
                </Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default SignupPage;
